import type { Phrase } from "../types";

// Gミクソリディアン コンパクトな運指（CD Track 22）。
// II-V-I（key = C major）の V＝G7 上で G Mixolydian（G A B C D E F）を使う。
// 弦 index は 0=1弦(高音E) … 5=6弦(低音E)。写真の手書きタブの実フレットを採用：
//   5弦ルート=5弦10fr(G) / 3弦10fr(F) / 2弦10fr(A) / 1弦8fr(C)→7fr(B) スライド。
// 標準チューニング(EADGBE)で度数検算済み（例: 1弦8fr = 64+8 = 72 = C = 11th）。
export const gmixoComp: Phrase = {
  id: "gmixo-comp",
  title: "G7 コンパクトな運指（ミクソリディアン）",
  subtitle: "II-V-I Dm7 – G7 – CΔ7 / CD Track 22 / ジョイントなし＆スライド",
  key: "C",
  progression: "II-V-I (Dm7 – G7 – CΔ7)",
  technique: ["mixolydian"],
  fretRange: [7, 10],
  positionLabel: "Gミクソリディアン（7〜10fr / 5弦ルート）",

  // ポジション（G Mixolydian, fret 7〜10）。楽典計算で確定。
  scale: [
    { s: 0, f: 7, deg: "△3" }, { s: 0, f: 8, deg: "11" }, { s: 0, f: 10, deg: "P5" },
    { s: 1, f: 8, deg: "R" },  { s: 1, f: 10, deg: "9" },
    { s: 2, f: 7, deg: "P5" }, { s: 2, f: 9, deg: "13" }, { s: 2, f: 10, deg: "♭7" },
    { s: 3, f: 7, deg: "9" },  { s: 3, f: 9, deg: "△3" }, { s: 3, f: 10, deg: "11" },
    { s: 4, f: 7, deg: "13" }, { s: 4, f: 8, deg: "♭7" }, { s: 4, f: 10, deg: "R" },
    { s: 5, f: 7, deg: "△3" }, { s: 5, f: 8, deg: "11" }, { s: 5, f: 10, deg: "P5" },
  ],

  // フレーズ（CD Track 22）。d=音価（省略=1）。
  // ※モデルにスライド/ジョイント表現は無いため note に明記。
  licks: [
    {
      name: "コンパクトな運指",
      note: "5弦root(G)から4th(C)まで6音アルペジオ上行 G B D F A C / 3弦10f→2弦10fはジョイント不使用・1弦8f→7fはスライド → 2弦8f(G)でCΔ7の5th(P5)へ解決",
      seq: [
        { s: 4, f: 10, deg: "R" },  { s: 3, f: 9, deg: "△3" }, { s: 2, f: 7, deg: "P5" }, { s: 2, f: 10, deg: "♭7" },
        { s: 1, f: 10, deg: "9" },  { s: 0, f: 8, deg: "11" }, // 1弦8fr = C（4th）
        { s: 0, f: 7, deg: "△3" }, // 1弦8f→7f スライド = B
        { s: 1, f: 10, deg: "9" }, // 2弦10fr = A、小節跨ぎで CΔ7 へ
        { s: 1, f: 8, deg: "P5", resolve: true }, // 2弦8fr = G = CΔ7 の5th(P5)へ解決
      ],
    },
  ],

  point:
    "2小節目は、5弦のルート音から4th音までの6音はアルペジオの上行フレーズとなっている。なお、2小節2拍目ウラと3拍目モチに3弦10f→2弦10fにはジョイントを使わない。また1弦8f→7fというようにスライドを交えることで、続く2弦10fの小節跨ぎへの移行がスムーズになる。ジャズならではのコンパクトな運指といえる動きだ。",
};
