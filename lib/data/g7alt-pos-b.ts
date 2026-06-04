import type { Phrase } from "../types";

// ⓑ 5弦ルートのポジション（フレット8〜12 / G7(♭9)）
// 教則本「ジャズっぽさの根源＝オルタード・スケール」CD Track 24（マイナー型II-V）より。
// オルタードに完全5度は無いため P5 は含めない。
// 度数は標準チューニング(EADGBE)で検算済み：G=R(5弦10fr/45+10=55=G)。
export const g7altPosB: Phrase = {
  id: "g7alt-pos-b",
  title: "G7alt 5弦ルート（ⓑ）",
  subtitle: "minor II-V-I Dm7(♭5) – G7(♭9) – Cm7 / 5弦ルートのポジション",
  key: "G",
  progression: "minor II-V-I (key = C minor)",
  technique: ["altered"],
  fretRange: [8, 12],
  positionLabel: "Gオルタード・5弦ルート（8〜12fr / 5th音なし）",
  // ポジション（楽典計算で確定）
  scale: [
    { s: 0, f: 9, deg: "♯11" }, { s: 0, f: 11, deg: "♭13" },
    { s: 1, f: 8, deg: "R" },   { s: 1, f: 9, deg: "♭9" },  { s: 1, f: 11, deg: "♯9" }, { s: 1, f: 12, deg: "△3" },
    { s: 2, f: 8, deg: "♭13" }, { s: 2, f: 10, deg: "♭7" }, { s: 2, f: 12, deg: "R" },
    { s: 3, f: 8, deg: "♯9" },  { s: 3, f: 9, deg: "△3" },  { s: 3, f: 11, deg: "♯11" },
    { s: 4, f: 8, deg: "♭7" },  { s: 4, f: 10, deg: "R" },  { s: 4, f: 11, deg: "♭9" },
    { s: 5, f: 9, deg: "♯11" }, { s: 5, f: 11, deg: "♭13" },
  ],
  // フレーズ（度数の流れは教則本どおり。弦/フレットは ⓑ ポジション内での暫定運指 → 要確認）
  licks: [
    { name: "マイナーII-V定番", note: "2弦上の4音が中心 / Cm7 へ解決",
      seq: [
        { s: 1, f: 8, deg: "R" },   { s: 2, f: 10, deg: "♭7" }, { s: 1, f: 11, deg: "♯9" }, { s: 1, f: 9, deg: "♭9" },
        { s: 0, f: 9, deg: "♯11" }, { s: 1, f: 12, deg: "△3" }, { s: 1, f: 11, deg: "♯9" }, { s: 1, f: 9, deg: "♭9" },
        { s: 1, f: 8, deg: "P5", resolve: true }, // 2弦8fr = G = Cm7 の 5th（G7alt では R＝同音で機能が変わる）
      ] },
  ],
  point: "5弦ルートのポジション。対応コードは G7(♭9)。使用頻度が高い2弦上の4音（R・♭9・♯9・△3）からマスターし、徐々に使用エリアを広げるのが実践的。マイナー進行ではオルタードは必須スケール。Dm7(♭5)対応のロクリアンとセットで覚えると効く。",
  hideStepOrder: true,
};
