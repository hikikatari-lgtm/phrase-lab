// phrase-lab 共通型。弦 index は 0=1弦(高音E) … 5=6弦(低音E)。フレットは実フレット番号。

// 度数の表記ゆれを防ぐため、使う度数は文字列で統一
// （例: "R","△3","P5","m7","♭9","♯9","♯11","♭13","(5)"）
export type Degree = string;

export type ScaleNote = {
  s: number; // 弦 0..5
  f: number; // フレット
  deg: Degree; // 度数
};

export type LickNote = {
  s: number;
  f: number;
  deg: Degree;
  d?: number; // 音価（省略=1, 三連=0.5）
  resolve?: boolean; // 解決音（青）
};

export type Lick = {
  name: string; // "リック1"
  note: string; // 一言メモ（"三連でテンションを挟む / 3rd(E)へ解決"）
  seq: LickNote[];
};

export type Phrase = {
  id: string; // URLになる。半角英数とハイフン。例 "g7alt"
  title: string; // "G7alt → CΔ7 リック"
  subtitle?: string; // "手書きタブを度数ボックス化 — 同じ型・違う解決先"
  key: string; // "G"
  progression: string; // "V-I (to C major)"
  technique: string[]; // ["altered"]
  fretRange: [number, number]; // ボックスの表示レンジ。例 [3,6]
  positionLabel: string; // "Gオルタード・ポジション（3〜6fr）"
  scale: ScaleNote[];
  licks: Lick[];
  point: string; // 「ここがポイント」本文
};
