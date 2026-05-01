import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leon - 全栈开发工程师（偏前端）",
  description: "8 年全栈开发经验，以 React、TypeScript、Node.js 为核心技术栈，精通 Web3 DeFi 开发与 AI 工程化提效。",
  keywords: ["Web3", "DeFi", "React", "Next.js", "TypeScript", "Node.js", "全栈开发", "AI", "Wagmi", "NestJS", "Python"],
  authors: [{ name: "Leon" }],
  openGraph: {
    title: "Leon - 全栈开发工程师（偏前端）",
    description: "8 年全栈开发经验，以 React、TypeScript、Node.js 为核心技术栈，精通 Web3 DeFi 开发与 AI 工程化提效",
    url: "https://leonaries.cn",
    siteName: "Leon Portfolio",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leon - 全栈开发工程师（偏前端）",
    description: "8 年全栈开发经验，以 React、TypeScript、Node.js 为核心技术栈，精通 Web3 DeFi 开发与 AI 工程化提效",
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
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Leon",
              
              jobTitle: "全栈开发工程师（偏前端）",
              description: "8 年全栈开发经验，以 React、TypeScript、Node.js 为核心技术栈，精通 Web3 DeFi 开发与 AI 工程化提效",
              email: "leonaries9527@gmail.com",
              url: "https://leonaries.cn",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "西南财经大学",
              },
              knowsAbout: ["Web3", "DeFi", "React", "Next.js", "TypeScript", "Node.js", "NestJS", "Python", "AI", "LangChain", "RAG", "Multi-Agent"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
