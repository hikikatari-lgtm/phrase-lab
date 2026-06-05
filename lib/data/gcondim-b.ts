import type { Phrase } from "../types";

// Gコンディミ（半全ディミニッシュ）5弦ルート。写真「b 5弦ルートのポジション」。
// スケール：G Ab Bb B Db D E F。度数 → G=R, Ab=♭9, Bb=♯9, B=△3, Db=♯11, D=5, E=13, F=♭7。
// 弦 index は 0=1弦(高音E) … 5=6弦(低音E)。標準チューニング(EADGBE)で度数検算済み。
// 例: 5弦10fr = 45+10 = 55 = G = R / 4弦9fr = 50+9 = 59 = B = △3 / 2弦9fr = 59+9 = 68 = Ab = ♭9。
// ※C・F#・Eb・A はスケール外なので、その位置にはドットを置かない。6弦は写真に含まれないため省略。
// ※G#dim（Ab B D F = ♭9・△3・5・♭7）がアルペジオの骨格（写真では四角囲み）。
export const gcondimB: Phrase = {
  id: "gcondim-b",
  title: "G コンディミ",
  subtitle: "G7(♭9) – Cm7（5弦ルート）",
  key: "Cm",
  progression: "G7(♭9) – Cm7",
  technique: ["combination-of-diminished"],
  fretRange: [8, 12],
  positionLabel: "Gコンディミ・5弦ルート（8〜12fr / 半全ディミニッシュ）",
  hideStepOrder: true,

  // ポジション（G 半全ディミニッシュ, 5弦ルート, fret 8〜12）。楽典計算で確定。
  scale: [
    { s: 0, f: 9, deg: "♯11" }, { s: 0, f: 10, deg: "P5" }, { s: 0, f: 12, deg: "13" },
    { s: 1, f: 8, deg: "R" },   { s: 1, f: 9, deg: "♭9" },  { s: 1, f: 11, deg: "♯9" }, { s: 1, f: 12, deg: "△3" },
    { s: 2, f: 9, deg: "13" },  { s: 2, f: 10, deg: "♭7" }, { s: 2, f: 12, deg: "R" },
    { s: 3, f: 8, deg: "♯9" },  { s: 3, f: 9, deg: "△3" },  { s: 3, f: 11, deg: "♯11" }, { s: 3, f: 12, deg: "P5" },
    { s: 4, f: 8, deg: "♭7" },  { s: 4, f: 10, deg: "R" },  { s: 4, f: 11, deg: "♭9" },
  ],

  // フレーズ（b Gコンディミ）。写真のタブ譜どおりの運指。resolve=Cm7への解決音（青）。
  // 度数の流れ：△3 → 5 → ♭7 → ♭9 → △3 → ♭9 → ♭7 → 5 →（Cm7の5th=G へ解決）。上行→折り返し→下行の対称形。
  licks: [
    {
      name: "コンディミ・アルペジオ",
      note: "△3(B)から上行アルペジオ B-D-F-Ab-B（頂点）→ 折り返して Ab-F-D と下行 → 5弦10f(G)でCm7の5th(P5)へ解決。骨格はG#dim(Ab B D F)",
      seq: [
        { s: 3, f: 9, deg: "△3" },  // 4弦9fr = B（△3）
        { s: 3, f: 12, deg: "P5" }, // 4弦12fr = D（5）
        { s: 2, f: 10, deg: "♭7" }, // 3弦10fr = F（♭7）
        { s: 1, f: 9, deg: "♭9" },  // 2弦9fr = Ab（♭9）
        { s: 1, f: 12, deg: "△3" }, // 2弦12fr = B（△3）← 頂点
        { s: 1, f: 9, deg: "♭9" },  // 2弦9fr = Ab（♭9）
        { s: 2, f: 10, deg: "♭7" }, // 3弦10fr = F（♭7）
        { s: 3, f: 12, deg: "P5" }, // 4弦12fr = D（5）
        { s: 4, f: 10, deg: "P5", resolve: true }, // 5弦10fr = G = Cm7 の5th(P5)へ解決
      ],
    },
  ],

  point:
    "Gコンディミスケールの5弦ルートポジション（8〜12fr）。G7(b9)上でコードトーン（△3, 5, b7）とb9を使った上行アルペジオから折り返して下行する対称形フレーズ。G#dim（Ab B D F）の構成音がアルペジオの骨格となっている。最後はCm7の5th(G)へ解決。",
};
