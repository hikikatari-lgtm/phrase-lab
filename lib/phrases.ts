import type { Phrase } from "./types";
import { g7alt } from "./data/g7alt";
import { g7altPosA } from "./data/g7alt-pos-a";
import { g7altPosB } from "./data/g7alt-pos-b";
import { gmixoArp } from "./data/gmixo-arp";
import { gmixoComp } from "./data/gmixo-comp";
import { gcondim } from "./data/gcondim";
import { gcondimB } from "./data/gcondim-b";
// 今後ここに import を足していくだけ
// import { dim7c } from "./data/dim7c";

export const PHRASES: Phrase[] = [
  g7alt,
  g7altPosA,
  g7altPosB,
  gmixoArp,
  gmixoComp,
  gcondim,
  gcondimB,
  // dim7c,
];

export const getPhrase = (id: string) => PHRASES.find((p) => p.id === id);
export const allPhraseIds = () => PHRASES.map((p) => p.id);
