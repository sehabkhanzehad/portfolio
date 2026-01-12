"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Footer() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const cycleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else if (theme === "dark") {
            setTheme("system")
        } else {
            setTheme("light")
        }
    }

    const getIcon = () => {
        if (!mounted) return <Monitor className="w-4 h-4" />
        if (theme === "light") return <Sun className="w-4 h-4" />
        if (theme === "dark") return <Moon className="w-4 h-4" />
        return <Monitor className="w-4 h-4" />
    }

    return (
        <footer className="relative pt-8 pb-12 sm:pt-10 sm:pb-16">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
                <div className="space-y-2">
                    <div className="text-sm text-foreground/70">© 2026 Sk Zehad. All rights reserved.</div>
                    <div className="text-xs text-foreground/60">Built with Next.js by Sk Zehad</div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={cycleTheme}
                        className="group p-3 rounded-lg border border-border/50 hover:border-border transition-all duration-300"
                        aria-label="Toggle theme"
                    >
                        <div className="text-foreground/50 group-hover:text-foreground/70 transition-colors duration-300">
                            {getIcon()}
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    )
}