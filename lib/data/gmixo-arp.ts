import type { Phrase } from "../types";

// Gミクソリディアン アルペジオ・フレーズ（CD Track 21）— 写真「a 6弦ルートのポジション」。
// II-V-I（key = C major）の V＝G7 上で G Mixolydian（G A B C D E F）を使う。
// 弦 index は 0=1弦(高音E) … 5=6弦(低音E)。標準チューニング(EADGBE)で度数検算済み。
// 例: 6弦3fr = 40+3 = 43 = G = R / 3弦4fr = 55+4 = 59 = B = △3 / 2弦6fr = 59+6 = 65 = F = ♭7。
// 6弦ルートの G7 コード・フォーム上に組んだ 2〜6fr のポジション。
export const gmixoArp: Phrase = {
  id: "gmixo-arp",
  title: "G7 アルペジオ・フレーズ（ミクソリディアン）",
  subtitle: "II-V-I Dm7 – G7 – C6 / CD Track 21 / 6弦ルート",
  key: "C",
  progression: "II-V-I (Dm7 – G7 – C6)",
  technique: ["mixolydian"],
  fretRange: [2, 6],
  positionLabel: "Gミクソリディアン・6弦ルート（2〜6fr）",
  hideStepOrder: true,

  // ポジション（G Mixolydian, 6弦ルート, fret 2〜6）。楽典計算で確定。
  scale: [
    { s: 0, f: 3, deg: "R" },  { s: 0, f: 5, deg: "9" },
    { s: 1, f: 3, deg: "P5" }, { s: 1, f: 5, deg: "13" }, { s: 1, f: 6, deg: "♭7" },
    { s: 2, f: 2, deg: "9" },  { s: 2, f: 4, deg: "△3" }, { s: 2, f: 5, deg: "11" },
    { s: 3, f: 2, deg: "13" }, { s: 3, f: 3, deg: "♭7" }, { s: 3, f: 5, deg: "R" },
    { s: 4, f: 2, deg: "△3" }, { s: 4, f: 3, deg: "11" }, { s: 4, f: 5, deg: "P5" },
    { s: 5, f: 3, deg: "R" },  { s: 5, f: 5, deg: "9" },
  ],

  // フレーズ（CD Track 21）。写真のタブ譜どおりの運指。resolve=C6への解決音（青）。
  // 度数の流れ：△3 → 5 → ♭7 → 9 → R → ♭7 → 13 → 5 →（C6のルート C へ解決）。
  // 指使い：中 人 小 薬 人 小 薬 人 薬。
  licks: [
    {
      name: "アルペジオ・フレーズ",
      note: "前半=3rd(B)から3度上行アルペジオ B-D-F-A / 後半=root(G)から順次下降 G-F-E-D → 3弦5f(C)でC6ルートへ解決。指=中人小薬人小薬人薬",
      seq: [
        { s: 2, f: 4, deg: "△3" }, // 3弦4fr = B（中）
        { s: 1, f: 3, deg: "P5" }, // 2弦3fr = D（人）
        { s: 1, f: 6, deg: "♭7" }, // 2弦6fr = F（小）
        { s: 0, f: 5, deg: "9" },  // 1弦5fr = A（薬）
        { s: 0, f: 3, deg: "R" },  // 1弦3fr = G（人）
        { s: 1, f: 6, deg: "♭7" }, // 2弦6fr = F（小）
        { s: 1, f: 5, deg: "13" }, // 2弦5fr = E（薬）
        { s: 1, f: 3, deg: "P5" }, // 2弦3fr = D（人）
        { s: 2, f: 5, deg: "R", resolve: true }, // 3弦5fr = C = C6 のルートへ解決（薬）
      ],
    },
  ],

  point:
    "2小節目の前半4音は、3rd音からスケールの音をひとつ飛ばしで上昇するアルペジオ・フレーズ。続く後半4音は、ルート音からのスケールに沿って順次下降して、次小節のC6のルート（C音）に“落ち着く”パターン（ジャズ用語で“解決”と言う）。ただスケールを上下するだけではジャズっぽいフレーズにはならない。コード感を生み出す音使いがポイント。",
};
