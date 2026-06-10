# Blog Content

Put Markdown posts under category folders:

```text
content/blog/
  ai-programming/
    my-post.md
```

Each post supports frontmatter:

```md
---
title: "文章标题"
description: "文章摘要"
date: "2026-06-09"
category: "AI 编程"
tags:
  - Codex
  - Agentic Coding
---

# 文章标题

正文内容...
```

The public URL is generated from the folder name and file name:

```text
/blog/ai-programming/my-post
```
