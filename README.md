# Minimalist Portfolio (Sk Zehad)

A clean, modern personal portfolio built with Next.js and Tailwind CSS. Designed for a minimalist, luxury aesthetic with accessible, responsive layouts and a three-way theme (Light / Dark / System).

---

## Table of contents

- [Highlights](#highlights)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Scripts & Linting](#scripts--linting)
- [Customization](#customization)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License & Credits](#license--credits)

---

## Highlights

- Minimalist luxury UI with subtle gradients and refined typography
- 3-way theme toggle (Light / Dark / System), defaults to user OS preference
- TypeScript + Tailwind CSS
- Focused, easily-editable components

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- next-themes (theme management)
- ESLint for linting

## Prerequisites

- Node.js 18+ (recommended)
- pnpm (preferred)

Install pnpm if needed:

```bash
npm install -g pnpm
```

---

## Quick Start

```bash
# Clone
git clone https://github.com/sehabkhanzehad/zehad.me2.git
cd zehad.me2

# Install
pnpm install

# Development server
pnpm dev

# Build
pnpm build
pnpm start
```

Visit http://localhost:3000

---

## Scripts & Linting

Important scripts (run with pnpm):

- pnpm dev — start development server
- pnpm build — build for production
- pnpm start — serve production build
- pnpm run lint — run ESLint checks (scoped to source folders)
- pnpm run lint:fix — run ESLint autofix where possible
- pnpm run lint:next — run Next.js builtin linter (optional)
- pnpm run typecheck — run `tsc --noEmit`

Linting notes and best practices:

- The repo uses a flat ESLint config (`eslint.config.cjs`) and a compatibility `.eslintrc.cjs`. Lint commands are scoped to `components/`, `app/`, and `lib/` to avoid scanning `.next/` build output that can cause false errors.
- If ESLint complains about missing rules ("Definition for rule 'X' was not found"), install the plugin that provides that rule, e.g.:

```bash
pnpm add -D eslint-plugin-react-hooks eslint-plugin-import
```

- To clear the lint cache: delete `.eslintcache` and re-run `pnpm run lint`.
- If you see an `ESLintIgnoreWarning` about `.eslintignore`, relax — the flat config's `ignores` already covers build artifacts in this repo.

---

## Customization

Common customization points:

- Personal info and focus skills: `components/Intro.tsx`
- Theme settings: `components/ThemeProvider.tsx`
- Site metadata (title/description): `app/layout.tsx`
- Global styles: `app/globals.css`
- Social links & contact card: `components/Connect.tsx`
- Projects & Work: `components/Projects.tsx`, `components/Work.tsx`

Tips:
- Keep component filenames PascalCase (e.g., `Footer.tsx`).
- For small UI changes prefer Tailwind utilities in the component file.

---

## Project Structure

- `app/` — Next.js routes and layout (`layout.tsx`, `page.tsx`)
- `components/` — UI components (PascalCase)
- `lib/` — utility helpers
- `public/` — static assets
- `styles/` — global CSS

---

## Troubleshooting

- Missing ESLint rule/plugin: `pnpm add -D <plugin-package>` then re-run lint.
- Unexpected files being linted (like `.next/`): ensure you run the scoped lint scripts or verify `ignores` in `eslint.config.cjs`.
- Type errors: run `pnpm run typecheck` and fix issues. Ensure `baseUrl` is set in `tsconfig.json` so path mappings work.

---

## Contributing

- Before opening a PR: run `pnpm run lint:fix` and `pnpm run typecheck`.
- Keep changes small and focused; update the README if you add new developer workflow commands.

---

## License & Credits

MIT License — see `LICENSE`.

**Built with ❤️ using Next.js by Sk Zehad**

A minimalist portfolio website built with Next.js and Tailwind CSS, featuring responsive design, theme toggle, and smooth animations.

## Features

- Clean, responsive layout
- Dark/light mode
- Smooth animations
- Built with Next.js, TypeScript, and Tailwind CSS

## Getting Started

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [v0.dev](https://v0.dev/) - AI-powered development

## 📦 Getting Started

\`\`\`bash
# Clone the repository
git clone https://github.com/sehabkhanzehad/zehad.me2.git

# Install dependencies
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

> Note: This project uses `next-themes` and defaults to the visitor's system theme (Light/Dark/System).

## 🎨 Customization

- Update content in `app/page.tsx`
- Modify styles in `app/globals.css`

## License

MIT License

Copyright (c) 2026 sehabkhanzehad

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

