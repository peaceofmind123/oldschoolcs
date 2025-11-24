# OldSchool CS

Technical computer science blog built with Next.js (App Router), MDX, and KaTeX for LaTeX math rendering. Deployed to Vercel with CI/CD via GitHub Actions.

## Local development

1) Install dependencies:
```
npm ci
```
2) Start dev server:
```
npm run dev
```
3) Open http://localhost:3000

## Styling with Tailwind

- Tailwind CSS and the Typography plugin are configured.
- The post body uses `prose` classes for readable typography and dark mode support.

## Writing posts

- Create a new file in `content/posts/` with the `.mdx` extension, e.g. `my-post.mdx`.
- Include frontmatter:
```
---
title: "My Title"
date: "2025-01-01"
description: "Short summary"
tags:
  - algorithms
  - data-structures
---
```
- Write MDX content. Use LaTeX inline `\( a^2 + b^2 = c^2 \)` or display blocks:
```
$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$
```
- For code blocks with syntax highlighting, specify the language fence, e.g.:
````md
```ts
function greet(name: string) {
  return `Hello, ${name}`;
}
```
````

## CI/CD on Vercel

This repo includes `.github/workflows/vercel-deploy.yml` which deploys on push to `main`.

Required GitHub repository secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

How to get them:
1) Create a Vercel account and new Project linked to your GitHub repo.
2) In Vercel: Settings → General → find `ORG_ID` and `PROJECT_ID`.
3) Create a token: Settings → Tokens.
4) Add these as repository Secrets in GitHub (Settings → Secrets and variables → Actions).

On push to `main`, GitHub Actions will build and deploy to your Vercel project.

## Custom domain (GoDaddy)

After your Vercel project is set up:
1) In Vercel, go to Project → Settings → Domains → Add `oldschoolcs.com`.
2) Vercel will show DNS instructions. In GoDaddy DNS for `oldschoolcs.com`, add:
   - For apex/root: set an `A` or ALIAS/ANAME as guided by Vercel, or use the GoDaddy "Forwarding" alternative is not recommended. Vercel typically suggests `A` records to their Anycast IPs or an `ALIAS` if your DNS supports it.
   - For `www`: add a `CNAME` pointing to `cname.vercel-dns.com`.
3) Wait for DNS propagation (usually minutes, up to 24h).
4) Back in Vercel, verify domain; HTTPS is provisioned automatically.

Note: If you want `www` to be primary or to redirect `www` → apex (or vice-versa), configure redirect in Vercel Domain settings.

## RSS Feed

- RSS is available at `/rss.xml`.
- It's generated on the server from post metadata and cached for an hour.

## New post generator

Create a pre-filled MDX file with frontmatter:
```
npm run new:post -- "My Great Title" [custom-slug-optional]
```
This creates `content/posts/<slug>.mdx` with today's date and a starter template.

## Notes

- LaTeX rendering uses KaTeX; its stylesheet is imported globally in `app/layout.tsx`.
- Posts are compiled at build-time on the server via `next-mdx-remote/rsc` with `remark-math` and `rehype-katex`.
- Code blocks are highlighted with `rehype-pretty-code` using GitHub light/dark themes.


