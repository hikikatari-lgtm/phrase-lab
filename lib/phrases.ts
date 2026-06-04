import type { Phrase } from "./types";
import { g7alt } from "./data/g7alt";
// 今後ここに import を足していくだけ
// import { dim7c } from "./data/dim7c";

export const PHRASES: Phrase[] = [
  g7alt,
  // dim7c,
];

export const getPhrase = (id: string) => PHRASES.find((p) => p.id === id);
export const allPhraseIds = () => PHRASES.map((p) => p.id);
