import type { Phrase } from "../types";

// Gミクソリディアン アルペジオ・フレーズ（CD Track 21）。
// II-V-I（key = C major）の V＝G7 上で G Mixolydian（G A B C D E F）を使う。
// 弦 index は 0=1弦(高音E) … 5=6弦(低音E)。標準チューニング(EADGBE)で度数検算済み。
// 例: 5弦10fr = 45+10 = 55 = G = R / 3弦10fr = 55+10 = 65 = F = ♭7。
// ※写真の解説にフレーズ1の実フレットは無いため、フレーズ2と同じ 7〜10fr のボックス内に運指を確定。
export const gmixoArp: Phrase = {
  id: "gmixo-arp",
  title: "G7 アルペジオ・フレーズ（ミクソリディアン）",
  subtitle: "II-V-I Dm7 – G7 – C6 / CD Track 21",
  key: "C",
  progression: "II-V-I (Dm7 – G7 – C6)",
  technique: ["mixolydian"],
  fretRange: [7, 10],
  positionLabel: "Gミクソリディアン（7〜10fr）",

  // ポジション（G Mixolydian, fret 7〜10）。楽典計算で確定。
  scale: [
    { s: 0, f: 7, deg: "△3" }, { s: 0, f: 8, deg: "11" }, { s: 0, f: 10, deg: "P5" },
    { s: 1, f: 8, deg: "R" },  { s: 1, f: 10, deg: "9" },
    { s: 2, f: 7, deg: "P5" }, { s: 2, f: 9, deg: "13" }, { s: 2, f: 10, deg: "♭7" },
    { s: 3, f: 7, deg: "9" },  { s: 3, f: 9, deg: "△3" }, { s: 3, f: 10, deg: "11" },
    { s: 4, f: 7, deg: "13" }, { s: 4, f: 8, deg: "♭7" }, { s: 4, f: 10, deg: "R" },
    { s: 5, f: 7, deg: "△3" }, { s: 5, f: 8, deg: "11" }, { s: 5, f: 10, deg: "P5" },
  ],

  // フレーズ（CD Track 21）。d=音価（省略=1）、resolve=C6への解決音（青）。
  licks: [
    {
      name: "アルペジオ・フレーズ",
      note: "前半4音=3rd(B)から3度上行アルペジオ B D F A / 後半4音=root(G)から順次下降 G F E D → C6のルート(C)へ解決",
      seq: [
        { s: 3, f: 9, deg: "△3" }, { s: 2, f: 7, deg: "P5" }, { s: 2, f: 10, deg: "♭7" }, { s: 1, f: 10, deg: "9" },
        { s: 1, f: 8, deg: "R" },  { s: 2, f: 10, deg: "♭7" }, { s: 2, f: 9, deg: "13" }, { s: 2, f: 7, deg: "P5" },
        { s: 3, f: 10, deg: "R", resolve: true }, // 4弦10fr = C = C6 のルート
      ],
    },
  ],

  point:
    "2小節目の前半4音は、3rd音からスケールの音をひとつ飛ばしで上昇するアルペジオ・フレーズ。続く後半4音は、ルート音からのスケールに沿って順次下降して、次小節のC6のルート（C音）に“落ち着く”パターン（ジャズ用語で“解決”と言う）。ただスケールを上下するだけではジャズっぽいフレーズにはならない。コード感を生み出す音使いがポイント。",
};
