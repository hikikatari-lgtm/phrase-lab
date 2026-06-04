import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "phrase-lab — G7alt → CΔ7 リック",
  description:
    "ギターのフレーズを「フレットボード＋度数＋サウンド＋解説」で理解するアプリ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
