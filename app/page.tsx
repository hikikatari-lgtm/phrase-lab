import Link from "next/link";
import type { Metadata } from "next";
import { PHRASES } from "@/lib/phrases";

export const metadata: Metadata = {
  title: "phrase-lab — フレーズ一覧",
};

// トップ：登録済みフレーズの一覧メニュー。
// data/ にフレーズを足して PHRASES に登録するだけで、ここに自動で並ぶ。
export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8 sm:mb-10">
        <h1 className="font-display text-2xl font-bold text-amber sm:text-3xl">
          ☕ phrase-lab
        </h1>
        <p className="mt-1 text-sm text-muted sm:text-base">
          手書きタブを度数ボックス化 — 同じ型・違う解決先
        </p>
      </header>

      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {PHRASES.map((p) => (
          <li key={p.id}>
            <Link
              href={`/${p.id}`}
              className="group block h-full rounded-lg border border-line bg-surface p-4 transition-colors hover:border-amber sm:p-5"
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="rounded bg-surface2 px-1.5 py-0.5 font-mono text-[10px] font-bold text-amber">
                  key {p.key}
                </span>
                <span className="font-mono text-[10px] text-muted">
                  {p.fretRange[0]}–{p.fretRange[1]}fr
                </span>
              </div>
              <h2 className="font-display text-base font-bold text-cream group-hover:text-amber-hi sm:text-lg">
                {p.title}
              </h2>
              {p.subtitle && (
                <p className="mt-1 text-xs text-muted sm:text-sm">
                  {p.subtitle}
                </p>
              )}
              <p className="mt-2 font-mono text-[11px] text-muted/80">
                {p.progression}
              </p>
              <p className="mt-1 font-mono text-[11px] text-amber/80">
                {p.positionLabel}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <footer className="mt-10 text-center font-mono text-[10px] text-muted/60">
        {PHRASES.length} phrase{PHRASES.length === 1 ? "" : "s"}
      </footer>
    </main>
  );
}
