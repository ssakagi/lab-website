import type { Metadata } from "next";
import { notoSansJP, notoSerifJP } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "京都大学大学院生命科学研究科 生体応答学分野",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
