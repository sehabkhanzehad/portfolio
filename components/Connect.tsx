"use client"

import Link from "next/link"
import { forwardRef } from "react"
import {
    Github,
    Linkedin, Mail
} from "lucide-react"

// WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
)

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
            name: "WhatsApp",
            url: "https://wa.me/8801744646344",
            Icon: WhatsAppIcon
        },
    ]

    return (
        <section id="connect" ref={ref} className="py-12 sm:py-16 opacity-0">
            <div className="space-y-8 sm:space-y-10">
                {/* Header */}
                <div className="opacity-0 translate-y-6 animate-[fadeInUp_0.5s_ease-out_0.1s_forwards]">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-linear-to-r from-foreground/40 to-transparent" />
                            <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground/60 uppercase">Connect</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
                            Let's Create{" "}
                            <span className="bg-linear-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                                Together
                            </span>
                        </h2>
                    </div>
                </div>

                {/* Email Section */}
                <div className="opacity-0 translate-y-6 animate-[fadeInUp_0.5s_ease-out_0.3s_forwards]">
                    <a
                        href="mailto:sehabkhanzehad@gmail.com"
                        className="flex items-center gap-4 text-foreground hover:text-foreground/80 transition-colors"
                    >
                        <Mail className="w-6 h-6 text-muted-foreground/70" />
                        <span className="text-base font-medium">sehabkhanzehad@gmail.com</span>
                    </a>
                </div>

                {/* Social Links */}
                <div className="space-y-5 opacity-0 translate-y-6 animate-[fadeInUp_0.5s_ease-out_0.5s_forwards]">
                    <div className="flex items-center gap-3 justify-center sm:justify-start">
                        <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground/60 uppercase">Elsewhere</span>
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
                                <social.Icon className="w-4.5 h-4.5 opacity-60 group-hover:opacity-100 transition-opacity" />
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