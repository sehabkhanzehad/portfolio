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

**Built with ❤️ using Next.js by Sk Zehad**
