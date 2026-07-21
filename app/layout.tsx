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
  title: "Leon - AI 应用架构师",
  description: "9 年 Web / 全栈经验，聚焦 AI 应用架构与全链路交付，擅长 Prompt Engineering、RAG、Agent、LangGraph / LangChain、LLM 推理优化、FastAPI、Node.js 与 AI 前端交互。",
  keywords: ["AI 应用架构", "AI 全栈开发", "Prompt Engineering", "RAG", "Agent", "Function Calling", "ReAct", "LangGraph", "LangChain", "FastAPI", "Node.js", "React", "TypeScript", "Python", "MCP"],
  authors: [{ name: "Leon" }],
  openGraph: {
    title: "Leon - AI 应用架构师",
    description: "9 年 Web / 全栈经验，聚焦 AI 应用架构与全链路交付，擅长 Prompt Engineering、RAG、Agent 工作流与 LLM 推理优化。",
    url: "https://leonaries.cn",
    siteName: "Leon Portfolio",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leon - AI 应用架构师",
    description: "9 年 Web / 全栈经验，聚焦 AI 应用架构与全链路交付，擅长 Prompt Engineering、RAG、Agent 工作流与 LLM 推理优化。",
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
              jobTitle: "AI 应用架构师",
              description: "9 年 Web / 全栈经验，聚焦 AI 应用架构与全链路交付，擅长 Prompt Engineering、RAG、Agent 工作流与 LLM 推理优化。",
              email: "leonaries9527@gmail.com",
              url: "https://leonaries.cn",
              knowsAbout: ["AI 应用架构", "Prompt Engineering", "RAG", "Function Calling", "Tool Use", "ReAct", "Multi-Agent", "LangGraph", "LangChain", "FastAPI", "Node.js", "React", "TypeScript", "Python", "MCP", "LLM 推理优化"],
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
