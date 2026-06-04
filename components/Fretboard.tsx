import { C, roleColor } from "@/lib/music";
import type { ScaleNote, LickNote } from "@/lib/types";

// 6弦ボックス（弦＝横線・上=1弦, フレット列, 指定レンジ）
// フレットボードは明るいクリーム地（#fbf7ef）で読みやすく。
export default function Fretboard({
  scale,
  lick,
  hot,
  fretRange,
}: {
  scale: ScaleNote[];
  lick: LickNote[];
  hot: number;
  fretRange: [number, number];
}) {
  const [minF, maxF] = fretRange,
    COLS = maxF - minF + 1,
    STR = 6,
    padL = 26,
    padT = 14,
    colW = 52,
    rowH = 30,
    W = padL + COLS * colW + 14,
    H = padT + (STR - 1) * rowH + 30;
  const strLabel = ["1", "2", "3", "4", "5", "6"];
  const cx = (f: number) => padL + (f - minF + 0.5) * colW;
  const cy = (s: number) => padT + s * rowH;
  const degSize = (d: string) => {
    const l = d.replace("→", "").length;
    return l >= 3 ? 7.5 : l === 2 ? 9.5 : 12;
  };
  const lickKey = new Set(lick.map((n) => `${n.s}-${n.f}`));
  // 同じ枠に複数回来るリック音の「何番目か」表示用
  const orderByCell: Record<string, number[]> = {};
  lick.forEach((n, i) => {
    const k = `${n.s}-${n.f}`;
    (orderByCell[k] ??= []).push(i + 1);
  });

  return (
    <div style={{ overflowX: "auto" }}>
      <svg width={W} height={H} style={{ background: "#fbf7ef", borderRadius: 8 }}>
        {Array.from({ length: STR }).map((_, s) => (
          <g key={s}>
            <line x1={padL} y1={cy(s)} x2={padL + COLS * colW} y2={cy(s)} stroke="#444" strokeWidth={0.8 + s * 0.28} />
            <text x={8} y={cy(s) + 3.5} fontSize="8.5" fill="#999" fontFamily="JetBrains Mono">{strLabel[s]}</text>
          </g>
        ))}
        {Array.from({ length: COLS + 1 }).map((_, c) => (
          <line key={c} x1={padL + c * colW} y1={cy(0)} x2={padL + c * colW} y2={cy(STR - 1)} stroke="#bbb" strokeWidth="2" />
        ))}
        {minF <= 5 && maxF >= 5 && (
          <circle cx={cx(5)} cy={cy(STR - 1) + 15} r="3.5" fill="#ccc" />
        )}
        {Array.from({ length: COLS }).map((_, c) => (
          <text key={c} x={cx(minF + c)} y={cy(STR - 1) + 27} textAnchor="middle" fontSize="9" fill="#999" fontFamily="JetBrains Mono">{minF + c}</text>
        ))}

        {/* スケール（リック時は薄く） */}
        {scale.map((n, i) => {
          if (lickKey.has(`${n.s}-${n.f}`)) return null;
          const dim = lick.length > 0;
          return (
            <g key={"s" + i} opacity={dim ? 0.26 : 1}>
              <circle cx={cx(n.f)} cy={cy(n.s)} r="12" fill={roleColor(n.deg)} stroke="#fff" strokeWidth="1.5" />
              <text x={cx(n.f)} y={cy(n.s) + degSize(n.deg) / 2.8} textAnchor="middle" fontSize={degSize(n.deg)} fontWeight="800" fill="#fff" fontFamily="Zen Maru Gothic">{n.deg}</text>
            </g>
          );
        })}

        {/* リック音（前景）。丸=度数色, 上に弾き順 */}
        {Object.entries(orderByCell).map(([k, orders]) => {
          const [s, f] = k.split("-").map(Number);
          const idxs = lick
            .map((n, i) => ({ n, i }))
            .filter((x) => x.n.s === s && x.n.f === f);
          const n = idxs[0].n;
          const isHot = idxs.some((x) => x.i === hot);
          const fill = n.resolve ? C.blue : roleColor(n.deg);
          const lbl = n.deg.replace("→", "");
          return (
            <g key={k}>
              {isHot && <circle cx={cx(f)} cy={cy(s)} r="18" fill="none" stroke={C.amber} strokeWidth="2.5" />}
              <circle cx={cx(f)} cy={cy(s)} r={isHot ? 15 : 13} fill={fill} stroke={isHot ? "#1c1410" : "#fff"} strokeWidth={isHot ? 3 : 1.8} />
              <text x={cx(f)} y={cy(s) + degSize(lbl) / 2.8} textAnchor="middle" fontSize={degSize(lbl)} fontWeight="800" fill="#fff" fontFamily="Zen Maru Gothic">{lbl}</text>
              <text x={cx(f)} y={cy(s) - 16} textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#1c1410" fontFamily="JetBrains Mono">{orders.join(",")}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
