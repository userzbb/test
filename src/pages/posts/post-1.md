---
title: '我的第一篇博客文章'
pubDate: 2025-11-23
description: '这是我 Astro 博客的第一篇文章。'
author: 'zizimiku'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["astro", "blogging", "learning in public"]
---

# 我的第一篇博客文章

 发表于：2025-11-23

 欢迎来到我学习关于 Astro 的新博客！在这里，我将分享我建立新网站的学习历程。

 ## 我做了什么

 1. **安装 Astro**：首先，我创建了一个新的 Astro 项目并设置好了我的在线账号。
   - 安装Astro `npm create astro@latest`
   - 启动服务 `npm run dev`

 2. **制作页面**：然后我学习了如何通过创建新的 `.astro` 文件并将它们保存在 `src/pages/` 文件夹里来制作页面。
    - 使用layouts简化代码
    - 编写MySiteLayout.astro
        ```HTML
        ---
        interface Props {
        title?: string;
        description?: string;
        publishDate?: string;
        viewCount?: number;
        }
        const { title, description = "Astro Site", publishDate, viewCount = 0 } = Astro.props;
        ---
        <html lang="zh-cn">
        <head>
            <link rel="icon" type ="image/svg+xml" href="/favicon.svg" />
            <meta name="viewport" content="width=device-width" />
            <meta name="generator" content = {Astro.generator} >

            <meta charset="UTF-8">
            <meta name="description" content={description}>
            <title>{title}</title>
        </head>
        <body>
                <a href="/">首页</a>
                <a href="/about/">关于</a>
                <a href="/blog/">博客</a>

            <header>
            <p>Published on {publishDate}</p>
            <p>Viewed by {viewCount} folks</p>
            </header>

            <main>
            <slot />
            </main>

        </body>


        </html>
        ```
    - 编写BlogPostLayout.astro
        ```html
            ---
        // 1. `frontmatter` prop 提供了访问 frontmatter 和其他数据的能力
        const { frontmatter } = Astro.props;
        ---
        <html>
        <head>
            <!-- 添加其他 Head 元素，例如样式和 meta 标签。 -->
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta charset="utf-8">
            <title>{frontmatter.title}</title>
        </head>
        <body>
            <!-- 添加其他 UI 组件，例如通用的头部和页脚。 -->
            <h1>{frontmatter.title} by {frontmatter.author}</h1>
            <!-- 2. 渲染的 HTML 将被传入默认插槽。 -->
            <slot />
            <p>写于: {frontmatter.date}</p>
        </body>
        </html>
            
        ```

 3. **发表博客文章**：这是我的第一篇博客文章！我现在有用 Astro 编写的页面和用 Markdown 写的文章！

 ## 下一步计划

 1. 我将完成 Astro 教程，同时学习[web开发](https://developer.mozilla.org/zh-CN/docs/Learn_web_development)
 2. 完善我的网站