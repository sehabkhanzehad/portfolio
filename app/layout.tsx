import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const siteConfig = {
  name: "Sk Zehad",
  title: "Sk Zehad - Software Developer",
  description: "Software Developer specializing in building scalable SaaS platforms with Laravel and React. Expert in multitenancy, RBAC, and cloud deployments.",
  url: "https://zehad.me", // Replace with your actual domain if different
  // ogImage: "/og-image.png", // Ensure this exists in public or use a default
  keywords: [
    "Sk Zehad",
    "Software Developer",
    "Laravel Developer",
    "React Developer",
    "SaaS Developer",
    "Full Stack Developer",
    "Bangladesh",
    "Lancepilot",
    "Web Development",
    "PHP Developer"
  ],
  links: {
    github: "https://github.com/sehabkhanzehad",
    linkedin: "https://linkedin.com/in/sehabkhanzehad",
    email: "sehabkhanzehad@gmail.com"
  }
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Sk Zehad",
      url: siteConfig.url,
    },
  ],
  creator: "Sk Zehad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    //     images: [
    //       {
    //         url: siteConfig.ogImage,
    //         width: 1200,
    //         height: 630,
    //         alt: siteConfig.name,
    //       },
    //     ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    //     images: [siteConfig.ogImage],
    creator: "@sehabkhanzehad", // If you have a twitter handle
  },
  //   icons: {
  //     icon: "/favicon.ico",
  //     shortcut: "/favicon-16x16.png",
  //     apple: "/apple-touch-icon.png",
  //   },
  manifest: `${siteConfig.url}/site.webmanifest`,
  metadataBase: new URL(siteConfig.url),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "jobTitle": "Software Developer",
    "description": siteConfig.description,
    "image": `${siteConfig.url}/placeholder-user.jpg`,
    "sameAs": [
      siteConfig.links.github,
      siteConfig.links.linkedin
    ],
    "knowsAbout": [
      "Laravel",
      "React",
      "SaaS Architecture",
      "Multitenancy",
      "PHP",
      "JavaScript",
      "PostgreSQL",
      "MySQL",
      "REST API"
    ]
  }

  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
