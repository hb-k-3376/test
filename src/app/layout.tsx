import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OHR Corp Website",
  description: "OHR corporate website landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adobeFontsKitId = process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT_ID;

  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {adobeFontsKitId ? (
          <link
            rel="stylesheet"
            href={`https://use.typekit.net/${adobeFontsKitId}.css`}
          />
        ) : null}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
