import type { Phrase, ScaleNote, Lick } from "@/lib/music";

// G7alt → CΔ7。弦 index は 0=1弦(高音E) … 5=6弦(低音E)。

// 4-1. ポジション（Gオルタード, fret 3〜6）
export const SCALE: ScaleNote[] = [
  { s: 0, f: 3, deg: "R" }, { s: 0, f: 4, deg: "♭9" }, { s: 0, f: 6, deg: "♯9" },
  { s: 1, f: 3, deg: "P5" }, { s: 1, f: 4, deg: "♭13" }, { s: 1, f: 6, deg: "m7" },
  { s: 2, f: 3, deg: "♯9" }, { s: 2, f: 4, deg: "△3" }, { s: 2, f: 6, deg: "♯11" },
  { s: 3, f: 3, deg: "m7" }, { s: 3, f: 5, deg: "R" }, { s: 3, f: 6, deg: "♭9" },
  { s: 4, f: 4, deg: "♯11" }, { s: 4, f: 5, deg: "P5" }, { s: 4, f: 6, deg: "♭13" },
  { s: 5, f: 3, deg: "R" }, { s: 5, f: 4, deg: "♭9" }, { s: 5, f: 6, deg: "♯9" },
];

// 4-2. リック（廣嶋さんの手書きを解読済み）
// d = 音価（省略=1、三連=0.5）。resolve:true = CΔ7 への解決音（青）。
export const LICKS: Lick[] = [
  {
    name: "リック1",
    note: "三連でテンションを挟む / 3rd(E)へ解決",
    seq: [
      { s: 2, f: 4, deg: "△3" }, { s: 1, f: 3, deg: "P5" }, { s: 1, f: 6, deg: "m7" }, { s: 0, f: 3, deg: "R" },
      { s: 0, f: 4, deg: "♭9", d: 0.5 }, { s: 0, f: 6, deg: "♯9", d: 0.5 }, { s: 0, f: 4, deg: "♭9", d: 0.5 },
      { s: 0, f: 3, deg: "R" }, { s: 1, f: 6, deg: "m7" },
      { s: 1, f: 5, deg: "△3", resolve: true }, // 2弦5fr = E = CΔ7 の3rd
    ],
  },
  {
    name: "リック2",
    note: "全テンション下行ラン / 5th(G)へ解決",
    seq: [
      { s: 0, f: 6, deg: "♯9" }, { s: 0, f: 4, deg: "♭9" }, { s: 0, f: 3, deg: "R" }, { s: 1, f: 6, deg: "m7" },
      { s: 1, f: 4, deg: "♭13" }, { s: 2, f: 4, deg: "△3" }, { s: 2, f: 3, deg: "♯9" }, { s: 3, f: 6, deg: "♭9" },
      { s: 3, f: 5, deg: "P5", resolve: true }, // 4弦5fr = G = CΔ7 の5th
    ],
  },
];

// 4-3. 解説テキスト（このページの「ここがポイント」）
export const POINT =
  "2本とも同じボックスの中の動き。違うのは解決先で、リック1はCΔ7の3rd(E)、リック2は5th(G)に着地。テンションをどれだけ通っても、最後にコード内の音へ戻れば必ず収まる——「外して、戻る」。";

// §5: ページは Phrase を受け取って描画する純粋なビューにしておく（データ駆動）。
export const G7ALT: Phrase = {
  id: "g7alt",
  title: "G7alt → CΔ7",
  key: "G",
  progression: "V-I (to C major)",
  technique: ["altered"],
  scale: SCALE,
  licks: LICKS,
  point: POINT,
};
