# Personal Blog with Next.js 14 and Markdown

A modern, minimalist blog built with Next.js 14, using local markdown files for content management.

## Features

- Write content in Markdown
- Tag support
- Full-text search
- Responsive design
- Dark mode support
- SEO optimized
- RSS feed
- Sitemap generation
- Fast page loads
- Beautiful typography with Tailwind Typography

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Markdown frontmatter parsing

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/JamesMitofsky/Personal-Blog.git
cd Personal-Blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Creating Content

Add your blog posts as markdown files in the `posts` directory. Each post should have frontmatter with the following fields:

```markdown
---
title: Your Post Title
description: A brief description of your post
publishedAt: "2025-04-02T11:52:29+02:00"
author:
  name: Your Name
tags:
  - tag1
  - tag2
---

Your post content in markdown...
```

## Deployment

The blog can be deployed to any platform that supports Next.js, such as:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [DigitalOcean](https://digitalocean.com)

## License

MIT
