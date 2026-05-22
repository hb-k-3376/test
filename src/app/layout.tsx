import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: "오르 OHR",
  description:
    "오르는 다양한 피부 타입, 문화, 니즈를 이해하고, 과학 기반의 맞춤형 솔루션으로 글로벌 뷰티 시장을 주도하는 글로벌 뷰티 기업입니다.",
  keywords: [
    "글로벌 K뷰티 브랜드",
    "Global K-Beauty Brand",
    "K뷰티 트렌드 2026",
    "K-Beauty Trends 2026",
    "인디 뷰티 브랜드",
    "Indie Beauty Brand",
    "K뷰티 글로벌 진출",
    "K-Beauty Global Expansion",
    "뷰티 브랜드 하우스",
    "House of Beauty Brands",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    title: "오르 OHR",
    description:
      "오르는 다양한 피부 타입, 문화, 니즈를 이해하고, 과학 기반의 맞춤형 솔루션으로 글로벌 뷰티 시장을 주도하는 글로벌 뷰티 기업입니다.",
    images: [
      {
        url: "/images/ohr/hero.jpg",
        width: 1200,
        height: 630,
        alt: "오르 OHR 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "오르 OHR",
    description:
      "오르는 다양한 피부 타입, 문화, 니즈를 이해하고, 과학 기반의 맞춤형 솔루션으로 글로벌 뷰티 시장을 주도하는 글로벌 뷰티 기업입니다.",
    images: ["/images/ohr/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
