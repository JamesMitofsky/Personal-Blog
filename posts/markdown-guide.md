---
title: Markdown Guide
description: A quick guide to writing blog posts in markdown
publishedAt: "2025-04-02T12:00:00+02:00"
tags:
  - markdown
  - blog
image:
  src: images.png
  alt: A text editor showing markdown syntax
---

# Here we go with some type of guide

This guide will help you write blog posts using markdown. Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

## Basic Syntax

### Headers

```markdown
# H1
## H2
### H3
```

### Emphasis

```markdown
*italic* or _italic_
**bold** or __bold__
```

### Lists

```markdown
- Unordered list item
- Another item
  - Nested item

1. Ordered list item
2. Another item
   1. Nested item
```

### Links and Images

```markdown
[Link text](url)
![Alt text](image-url)
```

## Frontmatter

Each post must include frontmatter at the top of the file:

```yaml
---
title: Your Post Title
description: A brief description
publishedAt: "2025-04-02T12:00:00+02:00"
author:
  name: Your Name
tags:
  - tag1
  - tag2
image:
  src: your-image.jpg
  alt: Descriptive alt text
---
```

The `image` field is required and should point to an image file in the `public/post-images` directory.
