"use client"

import Link from "next/link"
import { forwardRef } from "react"
import {
    Github,
    Linkedin, Mail, MessageCircle, Instagram, Twitter, ExternalLink
} from "lucide-react"

const Connect = forwardRef<HTMLElement>((props, ref) => {
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/sehabkhanzehad",
            Icon: Github
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/sehabkhanzehad",
            Icon: Linkedin
        },
        {
            name: "Twitter",
            url: "https://twitter.com/sehabkhanzehad",
            Icon: Twitter
        },
        {
            name: "Instagram",
            url: "https://instagram.com/sehabkhanzehad",
            Icon: Instagram
        },
    ]

    return (
        <section id="connect" ref={ref} className="py-12 sm:py-16 opacity-0">
            <div className="space-y-8 sm:space-y-10">
                {/* Header */}
                <div className="opacity-0 translate-y-6 animate-[fadeInUp_0.5s_ease-out_0.1s_forwards]">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-gradient-to-r from-foreground/40 to-transparent" />
                            <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground/60 uppercase">Connect</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
                            Let's Create{" "}
                            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                                Together
                            </span>
                        </h2>
                    </div>
                </div>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-3 opacity-0 translate-y-6 animate-[fadeInUp_0.5s_ease-out_0.3s_forwards]">
                    {/* Email Card */}
                    <Link
                        href="mailto:sehabkhanzehad@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/30 hover:border-foreground/30 hover:bg-card/50 transition-all duration-300 p-5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors">
                                <Mail className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="flex-1 min-w-0 space-y-1">
                                <div className="text-xs text-muted-foreground/60 font-mono uppercase tracking-wider">Email</div>
                                <div className="text-sm sm:text-base font-medium text-foreground/90 group-hover:text-foreground truncate transition-colors">
                                    sehabkhanzehad@gmail.com
                                </div>
                            </div>

                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0 mt-1" />
                        </div>
                    </Link>

                    {/* WhatsApp Card */}
                    <Link
                        href="https://wa.me/8801744646344"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/30 hover:border-foreground/30 hover:bg-card/50 transition-all duration-300 p-5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors">
                                <MessageCircle className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="flex-1 min-w-0 space-y-1">
                                <div className="text-xs text-muted-foreground/60 font-mono uppercase tracking-wider">WhatsApp</div>
                                <div className="text-sm sm:text-base font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                                    +880 1744 646344
                                </div>
                            </div>

                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0 mt-1" />
                        </div>
                    </Link>
                </div>

                {/* Social Links */}
                <div className="space-y-5 opacity-0 translate-y-6 animate-[fadeInUp_0.5s_ease-out_0.5s_forwards]">
                    <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
                        <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground/60 uppercase">Elsewhere</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-border/60 to-transparent" />
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                        {socialLinks.map((social, index) => (
                            <Link
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                title={social.name}
                                className="group relative w-11 h-11 rounded-full border border-border/40 bg-card/30 hover:border-foreground/30 hover:bg-card/50 flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]"
                                style={{ animationDelay: `${0.7 + index * 0.05}s` }}
                            >
                                <social.Icon className="w-[18px] h-[18px] opacity-60 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
})

Connect.displayName = "Connect"

export default Connect