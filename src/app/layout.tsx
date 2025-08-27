// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ConfigProvider } from "antd";

export const metadata: Metadata = {
  title: {
    default: "QuickLangua — Mini time, maxi learn",
    template: "%s | QuickLangua",
  },
  description:
    "QuickLangua — Thử mini-test 10 câu trong 10 phút, nhận phân tích cá nhân và lộ trình học nhanh. Flashcards, quiz & tips dành cho người bận rộn.",
  keywords: [
    "10 phút học",
    "mini test 10 câu",
    "flashcards miễn phí",
    "lộ trình học nhanh",
    "học hiệu quả",
    "Mini time maxi learn",
  ],
  authors: [{ name: "QuickLangua Team" }],
  colorScheme: "light",
  metadataBase: new URL("https://quicklangua.vercel.app"),
  openGraph: {
    title: "QuickLangua — Mini time, maxi learn",
    description:
      "Thử mini-test 10 câu trong 10 phút, nhận phân tích cá nhân & lộ trình học. Flashcards miễn phí cho người bận rộn.",
    url: "https://10min-english.vercel.app",
    siteName: "QuickLangua",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://via.placeholder.com/1200x630.png?text=QuickLangua",
        width: 1200,
        height: 630,
        alt: "QuickLangua — Mini time, maxi learn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickLangua — Mini time, maxi learn",
    description:
      "Làm 10 câu, nhận phân tích và flashcards miễn phí. Học nhanh, tiến bộ thật.",
    images: ["https://via.placeholder.com/1200x630.png?text=QuickLangua"],
  },
  alternates: {
    canonical: "https://quicklangua.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "QuickLangua",
  url: "https://quicklangua.vercel.app",
  description:
    "QuickLangua - Mini test 10 câu trong 10 phút và flashcards giúp người bận rộn cải thiện kỹ năng tiếng Anh nhanh chóng.",
  applicationCategory: "Education",
  operatingSystem: "Web",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "PoppinsCustom, sans-serif",
            },
          }}
        >
          {children}
        </ConfigProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
