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
  title: "Leon - AI 应用开发工程师",
  description: "9 年 Web / 全栈经验，聚焦 AI 应用从 0 到 1 落地，擅长 RAG、Agent Workflow、LLM 网关、FastAPI、Node.js 与前端工程化。",
  keywords: ["AI 应用开发", "AI 全栈开发", "RAG", "Agent", "LangGraph", "LangChain", "FastAPI", "Node.js", "React", "TypeScript", "Python", "MCP"],
  authors: [{ name: "Leon" }],
  openGraph: {
    title: "Leon - AI 应用开发工程师",
    description: "9 年 Web / 全栈经验，聚焦 AI 应用从 0 到 1 落地，擅长 RAG、Agent Workflow、LLM 网关与全栈工程交付。",
    url: "https://leonaries.cn",
    siteName: "Leon Portfolio",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leon - AI 应用开发工程师",
    description: "9 年 Web / 全栈经验，聚焦 AI 应用从 0 到 1 落地，擅长 RAG、Agent Workflow、LLM 网关与全栈工程交付。",
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
              jobTitle: "AI 应用开发工程师",
              description: "9 年 Web / 全栈经验，聚焦 AI 应用从 0 到 1 落地，擅长 RAG、Agent Workflow、LLM 网关与全栈工程交付。",
              email: "leonaries9527@gmail.com",
              url: "https://leonaries.cn",
              knowsAbout: ["AI 应用开发", "RAG", "Agent Workflow", "LangGraph", "LangChain", "FastAPI", "Node.js", "React", "TypeScript", "Python", "MCP", "LLM Gateway"],
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
