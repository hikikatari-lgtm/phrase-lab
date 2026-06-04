import { redirect } from "next/navigation";
import { allPhraseIds } from "@/lib/phrases";

// トップは当面、最初のフレーズへリダイレクト（一覧ページは将来 §6）。
export default function Page() {
  redirect(`/${allPhraseIds()[0]}`);
}
