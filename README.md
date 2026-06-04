# phrase-lab

ギターのフレーズを「フレットボード＋度数＋サウンド＋解説」で理解するアプリ。

最初の1ページとして **G7alt → CΔ7 のリック** を実装。Gオルタード・ボックス（fret 3〜6）を
度数で色分け表示し、2本のリックを切替・再生（Web Audio, テンポ可変, 弾き順ハイライト）できる。

## 設計

- タブ譜は使わず、常に「フレットボード＋度数」で表示（型と相対度数で音楽を捉える）。
- 完成形を先に聴かせてから分解する（トップダウン / Sensation Before Theory）。
- フレーズは `Phrase` 型の「部品」として持ち、データ駆動で描画（`lib/data/*.ts` を増やせば量産可能）。

## 技術スタック

- Next.js 16（App Router）+ TypeScript + Tailwind CSS v4
- 状態管理は React `useState` のみ / 音は Web Audio API（ライブラリ不要）

## 構成

```
app/page.tsx          # ページ（"use client" / Phrase を受け取る純粋ビュー）
app/layout.tsx
app/globals.css       # Tailwind + Google Fonts import + カラートークン
components/Fretboard.tsx   # 6弦ボックス・ダイアグラム（SVG）
lib/music.ts          # 音名/周波数/度数ユーティリティ・型・配色トークン
lib/data/g7alt.ts     # このページのフレーズデータ
```

## 開発

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
```
