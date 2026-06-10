---
title: "AI Agent"
description: "围绕 OpenAI SDK、LangChain、RAG、Chain、Runnable、向量存储与 Agent 架构的学习笔记。"
date: "2026-06-09"
category: "AI 编程"
tags:
  - AI Agent
  - LangChain
  - RAG
  - Python
---

# AI AGENT

## Python基础

1、OpenAI库 Python SDK

ChatMessage 和 ChatCompletion

2、提示词技巧

详细描述 、 角色、""""""

3、Zero-shot 和Few-shot

## LangChain

![AI Agent 图 1](/blog/ai-programming/ai-agent/image-01-ad39951c.png)

![AI Agent 图 2](/blog/ai-programming/ai-agent/image-02-22261780.png)

### RAG

![AI Agent 图 3](/blog/ai-programming/ai-agent/image-03-3e896ebc.png)

![AI Agent 图 4](/blog/ai-programming/ai-agent/image-04-f92e76ab.png)

![AI Agent 图 5](/blog/ai-programming/ai-agent/image-05-482d977a.png)

![AI Agent 图 6](/blog/ai-programming/ai-agent/image-06-d2ce1a83.png)

![AI Agent 图 7](/blog/ai-programming/ai-agent/image-07-7742f743.png)

### FewShotPromptTemplate

![AI Agent 图 8](/blog/ai-programming/ai-agent/image-08-696f27b5.png)

![AI Agent 图 9](/blog/ai-programming/ai-agent/image-09-6f6e345d.png)

### Chain

![AI Agent 图 10](/blog/ai-programming/ai-agent/image-10-781b54bd.png)

![AI Agent 图 11](/blog/ai-programming/ai-agent/image-11-57fa0d0a.png)

![AI Agent 图 12](/blog/ai-programming/ai-agent/image-12-5225ba3f.png)

### Runnable接口

![AI Agent 图 13](/blog/ai-programming/ai-agent/image-13-1276d4a3.png)

![AI Agent 图 14](/blog/ai-programming/ai-agent/image-14-e4e5de6c.png)

![AI Agent 图 15](/blog/ai-programming/ai-agent/image-15-3778ea01.png)

![AI Agent 图 16](/blog/ai-programming/ai-agent/image-16-730f8598.png)

![AI Agent 图 17](/blog/ai-programming/ai-agent/image-17-401456d1.png)

![AI Agent 图 18](/blog/ai-programming/ai-agent/image-18-a7636ba9.png)

临时会话记忆

![AI Agent 图 19](/blog/ai-programming/ai-agent/image-19-24efe773.png)

长期会话记忆

![AI Agent 图 20](/blog/ai-programming/ai-agent/image-20-da569573.png)

### 文档加载器

![AI Agent 图 21](/blog/ai-programming/ai-agent/image-21-afb1fda8.png)

![AI Agent 图 22](/blog/ai-programming/ai-agent/image-22-5bfa908a.png)

![AI Agent 图 23](/blog/ai-programming/ai-agent/image-23-c9824bcb.png)

![AI Agent 图 24](/blog/ai-programming/ai-agent/image-24-783663bc.png)

### Vector stores 向量存储

![AI Agent 图 25](/blog/ai-programming/ai-agent/image-25-7707291d.png)

![AI Agent 图 26](/blog/ai-programming/ai-agent/image-26-a2141075.png)

## RAG项目

![AI Agent 图 27](/blog/ai-programming/ai-agent/image-27-fe3c920a.png)

### 离线流程

![AI Agent 图 28](/blog/ai-programming/ai-agent/image-28-e678cb14.png)

![AI Agent 图 29](/blog/ai-programming/ai-agent/image-29-c9944cc8.png)

在线流程

![AI Agent 图 30](/blog/ai-programming/ai-agent/image-30-7ecb1e69.png)

## Agent

### ReAct

思考--> 行动-->观察-->思考--> 行动-->观察-->...-->...-->结束

![AI Agent 图 31](/blog/ai-programming/ai-agent/image-31-ab0ed9ee.png)

### Middleware 中间件

Agent 执行前和执行后

model执行前和执行后

工具执行中、模型执行中

![AI Agent 图 32](/blog/ai-programming/ai-agent/image-32-2022f1c7.png)

Agent  项目架构

![AI Agent 图 33](/blog/ai-programming/ai-agent/image-33-141582d2.png)
