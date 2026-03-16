import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leon - Web3 全栈开发工程师",
  description: "专注于 Web3 全栈开发，精通 React、Next.js 和区块链技术。致力于构建高性能、用户友好的去中心化应用。",
  keywords: ["Web3", "DeFi", "React", "Next.js", "区块链", "全栈开发", "Wagmi", "Solidity"],
  authors: [{ name: "Leon" }],
  openGraph: {
    title: "Leon - Web3 全栈开发工程师",
    description: "专注于 Web3 全栈开发，精通 React、Next.js 和区块链技术",
    url: "https://leonaries.cn",
    siteName: "Leon Portfolio",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leon - Web3 全栈开发工程师",
    description: "专注于 Web3 全栈开发，精通 React、Next.js 和区块链技术",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Leon",
              
              jobTitle: "Web3 全栈开发工程师",
              description: "专注于 Web3 全栈开发，精通 React、Next.js 和区块链技术",
              email: "leonaries9527@gmail.com",
              url: "https://leonaries.cn",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "西南财经大学",
              },
              knowsAbout: ["Web3", "DeFi", "React", "Next.js", "TypeScript", "Solidity", "Blockchain"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
