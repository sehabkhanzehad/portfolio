# Minimalist Portfolio (Sk Zehad)

A clean, modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark/light theme support.

## ✨ Features

- **Minimalist Design** - Clean typography with Geist font and strategic use of whitespace
- **Responsive Layout** - Mobile-first design that works on all devices
- **Theme Toggle** - Seamless dark/light mode switching
- **Smooth Animations** - Subtle scroll-triggered animations and hover effects
- **Modern Stack** - Built with Next.js 15, TypeScript, and Tailwind CSS

## 🚀 Built With

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

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

> Note: This project uses `next-themes` and defaults to the visitor's system theme (Light/Dark/System).

## 🎨 Customization

The portfolio is designed to be easily customizable:

- Update personal information in `app/page.tsx`
- Modify colors and styling in `app/globals.css`
- Add or remove sections as needed

## 📄 License

Open source and available under the [MIT License](LICENSE).

---

## 🔧 Recent Refactor

- Consolidated theme provider into `components/ThemeProvider.tsx` and removed the unused `components/theme-provider.tsx` file.
- Removed an unused `Thoughts` import from `app/page.tsx` (the `components/Thoughts.tsx` file is still present if you want the section later).
- Updated site metadata and README to reflect the current project owner and conventions.

## 🧹 Linting & Type Checking

This project includes ESLint + TypeScript checks to keep code consistent and catch common errors early. Use the steps below to run and fix linting issues locally.

Recommended commands (pnpm):

- Install linting dependencies (only needed once):

  pnpm add -D eslint eslint-config-next @typescript-eslint/parser @typescript-eslint/eslint-plugin

- Run ESLint (autofix where possible) — recommended (targets source folders to avoid scanning build artifacts):

  pnpm run lint:fix

- Run ESLint (check only, no fixes):

  pnpm run lint

- Run Next.js built-in lint (optional):

  pnpm run lint:next

- Run TypeScript check (no emit):

  pnpm run typecheck

Notes:
- `pnpm run lint` and `pnpm run lint:fix` are scoped to `components/`, `app/` and `lib/` to avoid scanning `.next/` build artifacts which can cause rule-not-found errors.
- If you see `ESLintIgnoreWarning: The " .eslintignore " file is no longer supported`, it is safe to ignore — we also configured ignores in `eslint.config.cjs` to prevent linting build artifacts.
- If ESLint reports missing rules or plugins, run the install command shown earlier to ensure dev dependencies are installed.



Common fixes & troubleshooting:

- If ESLint complains that a rule or plugin is missing, install the needed dev dependency (see the install command above).
- If the linter appears to scan build artifacts (like `.next/`), add `--ignore-pattern "**/.next/**"` or add entries in `.eslintignore`.
- When ESLint reports "defined but never used", remove the unused import or variable, or prefix unused function args with `_` to silence the rule.
- If you see strange flat-config errors with ESLint v9, ensure an `eslint.config.cjs` or `.eslintrc.cjs` is present at the project root.
- To reset the lint cache: delete `.eslintcache` and re-run the lint command.

How I ran lint in this repository:

- I installed dev dependencies with `pnpm` and ran the autofix command above. ESLint flagged an unused import in `components/Connect.tsx` which I removed.

**Built with ❤️ using Next.js by Sk Zehad**
