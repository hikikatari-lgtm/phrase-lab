"use client";

import React, { useState, useRef, useCallback } from "react";
import Fretboard from "@/components/Fretboard";
import { C, freq, roleColor, type Phrase } from "@/lib/music";
import { G7ALT } from "@/lib/data/g7alt";

export default function Page() {
  return <PhraseView phrase={G7ALT} />;
}

// §5: Phrase を受け取って描画する純粋なビュー（データ駆動）。
function PhraseView({ phrase }: { phrase: Phrase }) {
  const { scale: SCALE, licks: LICKS } = phrase;
  const [li, setLi] = useState(0);
  const [hot, setHot] = useState(-1);
  const [bpm, setBpm] = useState(96);
  const acRef = useRef<AudioContext | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // iOS Safari 対策：最初のユーザー操作で AudioContext を生成 / resume。
  const ac = () =>
    (acRef.current ??= new (window.AudioContext ||
      (window as typeof window & { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)());

  const pluck = useCallback((f: number, when?: number, dur = 0.5) => {
    const ctx = ac();
    const t = when ?? ctx.currentTime;
    const o = ctx.createOscillator(),
      o2 = ctx.createOscillator(),
      g = ctx.createGain(),
      lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(2600, t);
    lp.frequency.exponentialRampToValueAtTime(900, t + dur);
    o.type = "triangle";
    o2.type = "sawtooth";
    o.frequency.value = f;
    o2.frequency.value = f * 2;
    o2.detune.value = 4;
    const g2 = ctx.createGain();
    g2.gain.value = 0.16;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.6, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    o2.connect(g2);
    g2.connect(g);
    g.connect(lp);
    lp.connect(ctx.destination);
    o.start(t);
    o2.start(t);
    o.stop(t + dur + 0.05);
    o2.stop(t + dur + 0.05);
  }, []);

  const clearT = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const play = useCallback(() => {
    clearT();
    setHot(-1);
    const ctx = ac();
    if (ctx.state === "suspended") ctx.resume();
    const beat = 60 / bpm;
    let t = ctx.currentTime + 0.1;
    const seq = LICKS[li].seq;
    seq.forEach((n, i) => {
      const dur = (n.d ?? 1) * beat;
      pluck(freq(n.s, n.f), t, Math.max(0.18, dur * (n.resolve ? 1.6 : 0.95)));
      const at = (t - ctx.currentTime) * 1000;
      timers.current.push(setTimeout(() => setHot(i), Math.max(0, at)));
      t += dur;
    });
    timers.current.push(
      setTimeout(() => setHot(-1), (t - ctx.currentTime) * 1000 + 300)
    );
  }, [li, bpm, pluck, LICKS]);

  const L = LICKS[li];

  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100vh",
        color: C.cream,
        fontFamily: "'Zen Maru Gothic',sans-serif",
        padding: "22px 16px 56px",
      }}
    >
      <style>{`.mono{font-family:'JetBrains Mono',monospace} .btn:hover{filter:brightness(1.12)} .seg:hover{filter:brightness(1.15)}
        input[type=range]{accent-color:${C.amber}}`}</style>

      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>☕</span>
          <h1 style={{ margin: 0, fontSize: 21, fontWeight: 700 }}>{phrase.title} リック</h1>
        </div>
        <p style={{ margin: "4px 0 16px 38px", color: C.muted, fontSize: 12.5 }}>
          手書きタブを度数ボックス化　—　同じ型・違う解決先
        </p>

        {/* ポジション */}
        <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 14, padding: "15px 16px", marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.amber, marginBottom: 4 }}>Gオルタード・ポジション（3〜6fr）</div>
          <div style={{ fontSize: 11.5, color: C.muted, marginBottom: 12 }}>
            <span style={{ color: C.red, fontWeight: 700 }}>●赤</span>=コードトーン(R・△3・P5・m7)
            <span style={{ color: C.pink, fontWeight: 700 }}>●ピンク</span>=テンション(♭9・♯9・♯11・♭13)
          </div>
          <Fretboard scale={SCALE} lick={[]} hot={-1} />
        </div>

        {/* リック選択 */}
        <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
          {LICKS.map((lk, i) => (
            <button key={i} onClick={() => { setLi(i); setHot(-1); clearT(); }} className="seg"
              style={{ flex: 1, background: i === li ? C.amber : C.surface, color: i === li ? "#1c1410" : C.cream, border: `1px solid ${i === li ? C.amberHi : C.line}`, borderRadius: 12, padding: "11px 8px", cursor: "pointer", fontFamily: "inherit", fontWeight: 700, fontSize: 14 }}>
              {lk.name}
            </button>
          ))}
        </div>

        {/* リック表示 */}
        <div style={{ background: "linear-gradient(135deg,#3a2410,#26190f)", border: `1.5px solid ${C.amber}`, borderRadius: 16, padding: "16px 18px", marginBottom: 14, boxShadow: "0 0 24px #e8821e22" }}>
          <div style={{ fontSize: 12.5, color: C.amberHi, fontWeight: 700, marginBottom: 10 }}>✎ {L.note}</div>
          <Fretboard scale={SCALE} lick={L.seq} hot={hot} />
          <div style={{ fontSize: 11.5, color: C.muted, marginTop: 8 }}>
            数字＝弾く順　<span style={{ color: C.blue }}>青＝CΔ7への解決音</span>
          </div>

          {/* 度数の流れ */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, alignItems: "center", marginTop: 12 }}>
            {L.seq.map((n, i) => (
              <React.Fragment key={i}>
                <span style={{ background: hot === i ? C.amber : n.resolve ? C.blue : roleColor(n.deg), color: "#fff", fontSize: 11, fontWeight: 700, borderRadius: 6, padding: "3px 7px", fontFamily: "Zen Maru Gothic", outline: hot === i ? `2px solid ${C.cream}` : "none" }}>
                  {n.deg}
                </span>
                {i < L.seq.length - 1 && <span style={{ color: C.muted, fontSize: 10 }}>›</span>}
              </React.Fragment>
            ))}
          </div>

          {/* 再生 */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
            <button onClick={play} className="btn"
              style={{ background: C.amber, color: "#1c1410", border: "none", borderRadius: 10, padding: "11px 26px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
              ▶ 弾く
            </button>
            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: C.muted }}>
              テンポ
              <input type="range" min="50" max="150" value={bpm} onChange={(e) => setBpm(+e.target.value)} style={{ width: 110 }} />
              <span className="mono" style={{ color: C.amberHi, width: 54 }}>{bpm} BPM</span>
            </label>
          </div>
        </div>

        {/* 読み解き */}
        <div style={{ background: C.surface2, border: `1px solid ${C.line}`, borderRadius: 12, padding: "13px 16px", marginBottom: 14 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.green, marginBottom: 6 }}>🎸 ここがポイント</div>
          <div style={{ fontSize: 12.5, color: C.cream, lineHeight: 1.85 }}>
            2本とも<b style={{ color: C.amberHi }}>同じボックス</b>の中の動き。違うのは解決先で、
            リック1は<b style={{ color: C.amberHi }}>CΔ7の3rd(E)</b>、リック2は<b style={{ color: C.amberHi }}>5th(G)</b>に着地。
            テンション（ピンク）をどれだけ通っても、最後にコード内の音へ戻れば必ず収まる——「外して、戻る」。
          </div>
        </div>
      </div>
    </div>
  );
}
