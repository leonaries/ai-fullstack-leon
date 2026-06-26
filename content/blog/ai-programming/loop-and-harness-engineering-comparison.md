---
title: "Loop Engineering 与 Harness Engineering：Agent 落地的两层关键能力"
description: "Loop 决定 Agent 下一步怎么做，Harness 决定 Agent 能在什么环境里安全、稳定地做。理解这两层，才能把 AI Agent 从演示推向真实交付。"
date: "2026-06-26"
category: "AI 编程"
tags:
  - Loop Engineering
  - Harness Engineering
  - AI Agent
  - Agentic Coding
---

# Loop Engineering 与 Harness Engineering：Agent 落地的两层关键能力

最近在梳理 AI Agent 的工程化能力时，我发现有两个概念特别容易被混在一起：**Loop Engineering** 和 **Harness Engineering**。

它们都和 Agent 的执行有关，但关注点并不一样。

简单说：

- **Loop Engineering** 关注 Agent 如何一步一步完成任务。
- **Harness Engineering** 关注 Agent 在什么样的运行环境里完成任务。

如果把 Agent 看成一个开发者，Loop 更像它的思考和行动节奏，Harness 更像它的工作台、工具箱、权限系统和反馈环境。

## Loop Engineering：Agent 的执行循环

Loop Engineering 关注的是 Agent 的 **Execution Loop**。

它要回答的问题是：

> Agent 下一步应该做什么？什么时候继续？什么时候停止？什么时候重新规划？

一个最典型的 Agent Loop 可能长这样：

```text
Think
  ↓
Act
  ↓
Observe
  ↓
Reflect
  ↓
Repeat
```

也可以更偏工程化一点：

```text
Plan
  ↓
Tool
  ↓
Result
  ↓
Reason
  ↓
Tool
  ↓
Finish
```

这里最重要的不是某一个步骤，而是“循环”本身。

Agent 不是一次性回答完就结束，而是在任务过程中持续判断：信息够不够、工具是否调用成功、结果是否满足目标、要不要继续补充、要不要修正前一步判断。

## Loop 主要解决什么问题

Loop Engineering 主要处理任务执行过程中的节奏和决策。

它通常会关注这些内容：

- 任务规划（Planning）
- 推理与拆解（Reasoning）
- 工具调用（Tool Calling）
- 结果观察（Observation）
- 自我反思（Reflection）
- 是否继续循环
- 是否重新规划
- 最大执行步数（Max Steps）
- 错误恢复（Retry）
- 终止条件（Stop Condition）

比如用户说：

> 帮我分析 OpenAI 最新发布内容。

一个 Agent 可能会经历这样的 Loop：

```text
理解任务
  ↓
搜索官网
  ↓
阅读博客
  ↓
总结内容
  ↓
发现缺少价格信息
  ↓
查询 Pricing
  ↓
补充总结
  ↓
完成任务
```

这条链路里，Agent 每一步都在根据上一步结果决定下一步动作。

如果没有 Loop，它就很容易变成一次性生成：看起来说了很多，但没有真正补齐事实，也没有根据反馈继续推进。

## Harness Engineering：Agent 的运行环境

Harness Engineering 关注的是另一层问题：如何搭建整个 Agent 的运行环境。

它要回答的是：

> Agent 能使用哪些能力？如何安全、稳定、可观测地运行？

一个典型 Harness 可能包含：

```text
Harness
│
├── Prompt
├── Model
├── Memory
├── Tools
├── Browser
├── Python
├── Filesystem
├── Database
├── MCP
├── Logging
├── Tracing
├── Evaluation
├── Cache
├── Permissions
├── Deployment
└── Monitoring
```

如果说 Loop 是 Agent 的执行节奏，那么 Harness 就是让这个节奏能够真实运转的外部系统。

没有 Harness，Agent 可能知道下一步应该“运行测试”，但它没有终端；它可能知道应该“打开页面验证”，但它没有浏览器；它可能知道应该“回滚危险操作”，但它没有权限边界和状态管理。

## Harness 主要解决什么问题

Harness Engineering 更像系统工程，它关注的是模型之外的能力组织。

它通常包括：

- Prompt 管理
- 模型选择
- 短期和长期记忆
- 工具系统
- Browser 能力
- Python Runtime
- 文件系统
- 数据库
- MCP Server
- 权限控制
- 日志
- Trace 调用链
- Evaluation 评估
- Cache 缓存
- 部署
- 监控

以 Claude Code 这类 AI 编程工具为例，它不只是一个模型。

它背后还需要：

```text
Claude
  +
Terminal
  +
Git
  +
Filesystem
  +
Browser
  +
Memory
  +
Permission
  +
Logs
```

这些能力共同组成了它的 Harness。

所以一个 Agent 能不能真正进入开发工作流，不只取决于模型聪不聪明，还取决于它有没有可执行、可验证、可恢复的工程环境。

## Loop 和 Harness 的关系

我会把它们理解成一句话：

> Loop 是 Agent 的大脑，Harness 是 Agent 的工作环境。

更准确一点：

- Loop 运行在 Harness 之上。
- Harness 提供能力。
- Loop 使用这些能力完成任务。

关系大概是这样：

```text
Harness
│
├── Prompt
├── Model
├── Memory
├── Tools
├── Logs
├── Permissions
└── Loop
    │
    ├── Think
    ├── Tool
    ├── Observe
    ├── Reflect
    └── Finish
```

这也解释了为什么很多 Agent Demo 看起来很惊艳，但一进真实场景就不稳定。

它可能有一个不错的 Loop，能规划、能调用工具、能反思；但 Harness 太弱，没有足够的权限控制、日志、评估、缓存、部署和监控，最后仍然无法稳定交付。

反过来也一样。

如果 Harness 很完整，但 Loop 设计很差，Agent 也可能拥有很多工具，却不知道下一步该做什么，或者在错误路径上不断重复。

## 放到 AI 编程里看

假设我们要做一个自动写代码 Agent。

它的 Loop 可能是：

```text
理解需求
  ↓
生成代码
  ↓
运行测试
  ↓
测试失败
  ↓
修复代码
  ↓
重新测试
  ↓
全部通过
  ↓
结束
```

Loop 决定的是：下一步应该做什么。

但要让这条链路真的跑起来，还需要 Harness 提供环境：

- VS Code
- Terminal
- Python
- Git
- Docker
- Browser
- Filesystem
- Memory
- Logs
- Permissions

Harness 决定的是：Agent 可以使用哪些资源，以及它如何在边界内安全使用这些资源。

这也是我越来越觉得 AI 编程不是“让模型写代码”这么简单。

真正稳定的 AI 编程系统，要让 Agent 能看到真实反馈：能运行测试、能读日志、能打开页面、能操作文件、能管理 Git 状态，也能在失败时知道怎么恢复。

## Prompt、Context、Loop、Harness 的层次

这几个概念可以放在一条逐渐扩大的工程边界里看：

```text
Prompt Engineering
        │
        ▼
如何让模型回答更好
        │
──────────────────────────
Context Engineering
        │
        ▼
如何提供正确的信息
        │
──────────────────────────
Loop Engineering
        │
        ▼
Agent 如何不断思考、执行、观察、反思
        │
──────────────────────────
Harness Engineering
        │
        ▼
如何把模型、工具、权限、日志、部署等组成完整系统
```

Prompt 解决“怎么问”。

Context 解决“模型知道什么”。

Loop 解决“Agent 下一步做什么”。

Harness 解决“Agent 能在什么环境里做”。

## 一个对比表

| 工程方向 | 核心关注点 | 解决的问题 |
| --- | --- | --- |
| Prompt Engineering | 提示词设计 | 如何让模型回答得更好？ |
| Context Engineering | 上下文管理 | 如何给模型提供正确的信息？ |
| Loop Engineering | 执行循环 | Agent 如何一步一步完成任务？ |
| Harness Engineering | 系统编排 | 如何为 Agent 搭建完整、安全、可扩展的运行环境？ |

## 结语

理解 Loop 和 Harness 的区别，对做 AI Agent 特别重要。

很多时候，我们看到 Agent 失败，会下意识觉得是模型不够强、提示词不够好、上下文不够多。

但真实问题可能是：Loop 没有设计好，Agent 不知道什么时候继续、什么时候停止、什么时候重新规划；或者 Harness 没有搭好，Agent 没有工具、没有权限边界、没有日志、没有评估、没有失败恢复。

最后可以用一句话记住：

> Prompt 决定怎么问，Context 决定知道什么，Loop 决定下一步做什么，Harness 决定 Agent 能做什么。
