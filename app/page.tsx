"use client"

import { useEffect, useRef, useState } from "react"
import Nav from "../components/Nav"
import Intro from "../components/Intro"
import Work from "../components/Work"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Connect from "../components/Connect"
import Footer from "../components/Footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -40% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative" suppressHydrationWarning>
      <Nav activeSection={activeSection} />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <Intro ref={(el) => { sectionsRef.current[0] = el }} />
        <Work ref={(el) => { sectionsRef.current[1] = el }} />
        <Skills ref={(el) => { sectionsRef.current[2] = el }} />
        <Projects ref={(el) => { sectionsRef.current[3] = el }} />
        <Connect ref={(el) => { sectionsRef.current[4] = el }} />
        <Footer />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
