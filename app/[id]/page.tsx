import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPhrase, allPhraseIds } from "@/lib/phrases";
import PhraseView from "@/components/PhraseView";

export function generateStaticParams() {
  return allPhraseIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const phrase = getPhrase(id);
  return { title: phrase ? `${phrase.title}｜phrase-lab` : "phrase-lab" };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const phrase = getPhrase(id);
  if (!phrase) notFound();
  return <PhraseView phrase={phrase} />;
}
