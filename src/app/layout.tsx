// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ConfigProvider } from "antd";

export const metadata: Metadata = {
  title: {
    default: "10MinuteE — Mini time, maxi learn",
    template: "%s | 10MinuteE",
  },
  description:
    "10MinuteE — Thử mini-test 10 câu trong 10 phút, nhận phân tích cá nhân và lộ trình học nhanh. Flashcards, quiz & tips dành cho người bận rộn.",
  keywords: [
    "10 phút học",
    "mini test 10 câu",
    "flashcards miễn phí",
    "lộ trình học nhanh",
    "học hiệu quả",
    "Mini time maxi learn",
  ],
  authors: [{ name: "10MinuteE Team" }],
  colorScheme: "light",
  metadataBase: new URL("https://10min-english.vercel.app"),
  openGraph: {
    title: "10MinuteE — Mini time, maxi learn",
    description:
      "Thử mini-test 10 câu trong 10 phút, nhận phân tích cá nhân & lộ trình học. Flashcards miễn phí cho người bận rộn.",
    url: "https://10min-english.vercel.app",
    siteName: "10MinuteE",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://via.placeholder.com/1200x630.png?text=10MinuteE",
        width: 1200,
        height: 630,
        alt: "10MinuteE — Mini time, maxi learn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "10MinuteE — Mini time, maxi learn",
    description:
      "Làm 10 câu, nhận phân tích và flashcards miễn phí. Học nhanh, tiến bộ thật.",
    images: ["https://via.placeholder.com/1200x630.png?text=10MinuteE"],
  },
  alternates: {
    canonical: "https://10min-english.vercel.app/",
  },
  verification: {
    google: "googlecc06b2b3aa6ff0fe",
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
  name: "10MinuteE",
  url: "https://10min-english.vercel.app",
  description:
    "10MinuteE - Mini test 10 câu trong 10 phút và flashcards giúp người bận rộn cải thiện kỹ năng tiếng Anh nhanh chóng.",
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
