// 音名 / 周波数 / 度数ユーティリティ + 配色トークン
// 弦 index は 0=1弦(高音E) … 5=6弦(低音E)。標準チューニング開放（MIDI）。

export const OPEN = [64, 59, 55, 50, 45, 40] as const;
const NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export const noteName = (s: number, f: number) => NAMES[(OPEN[s] + f) % 12];
export const freq = (s: number, f: number) =>
  440 * Math.pow(2, (OPEN[s] + f - 69) / 12);

// ── データ型（§5 将来拡張の前提） ─────────────────────────────
export type ScaleNote = { s: number; f: number; deg: string };

export type LickNote = {
  s: number;
  f: number;
  deg: string;
  /** 音価（省略=1、三連=0.5） */
  d?: number;
  /** CΔ7 への解決音（青） */
  resolve?: boolean;
};

export type Lick = { name: string; note: string; seq: LickNote[] };

export type Phrase = {
  id: string; // "g7alt" など
  title: string; // "G7alt → CΔ7"
  key: string; // "G"
  progression: string; // "V-I (to C major)" など
  technique: string[]; // ["altered"] / ["diminished"] / ["blue-note"] ...
  scale: ScaleNote[]; // §4-1
  licks: Lick[]; // §4-2
  point: string; // §4-3
};

// ── 配色トークン（§3 “深煎り”テーマ） ───────────────────────────
export const C = {
  bg: "#1c1410",
  surface: "#26190f",
  surface2: "#33241733",
  line: "#4a3a2c",
  amber: "#e8821e",
  amberHi: "#ffb056",
  cream: "#f1e6d2",
  muted: "#a08a6e",
  green: "#7a9e63",
  red: "#e0301e",
  pink: "#d24bc8",
  blue: "#3f8fc0",
  dim: "#5a4632",
} as const;

// ── 度数の色分けルール（§3） ─────────────────────────────────
// コードトーン → red / テンション → pink /（解決音は resolve フラグで blue）
const CHORD = new Set(["R", "3", "△3", "5", "P5", "m7", "♭7"]);
export const roleColor = (deg: string) =>
  CHORD.has(deg.replace("→", "")) ? C.red : C.pink;
