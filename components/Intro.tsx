"use client"

import { forwardRef } from "react"

const Intro = forwardRef<HTMLElement>((props, ref) => {
    const intro = {
        firstName: "Sk",
        lastName: "Zehad",
        title: "Software Developer",
        description: "Building scalable, modern web applications with Laravel and React—focused on clean code and elegant solutions.",
        location: "Bangladesh",
        company: {
            name: "Lancepilot Ltd.",
            url: "https://lancepilot.com"
        },
        focusSkills: ["Laravel", "PHP", "REST API", "SaaS", "Multitenancy", "RBAC", "MySQL", "PostgreSQL", "JavaScript", "React"],
    };

    return (
        <header
            id="intro"
            ref={ref}
            className="min-h-screen flex lg:items-center items-start opacity-0 relative overflow-hidden"
        >
            {/* Animated gradient orbs */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-br from-foreground/3 to-transparent rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: '4s' }}></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-tr from-foreground/2 to-transparent rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: '6s', animationDelay: '1s' }}></div>

            <div className="grid lg:grid-cols-5 gap-16 sm:gap-20 w-full relative z-10">
                <div className="lg:col-span-3 space-y-6 sm:space-y-8">
                    {/* Greeting */}
                    <div className="opacity-0 translate-y-4 animate-[fadeInUp_0.5s_ease-out_0.1s_forwards]">
                        <div className="flex items-baseline gap-3">
                            <span className="text-sm sm:text-base text-muted-foreground/70 font-light tracking-wide">Hi there, I'm</span>
                            <div className="h-px w-8 bg-linear-to-r from-muted-foreground/30 to-transparent self-center"></div>
                        </div>
                    </div>

                    {/* Name */}
                    <div className="space-y-2">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
                            {intro.firstName}
                        </h1>
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
                            <span className="bg-linear-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                                {intro.lastName}
                            </span>
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 max-w-xl opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]">
                        <div className="h-px w-16 bg-linear-to-r from-foreground/40 to-transparent"></div>
                        <p className="text-lg sm:text-xl text-muted-foreground/90 leading-relaxed font-light">
                            {intro.description}
                        </p>

                        {/* Status & Location */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                            <div className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-all duration-300">
                                <div className="relative">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
                                </div>
                                <span className="text-sm text-green-500/90 font-medium">Available for work</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="font-medium text-foreground/80">{intro.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2 flex flex-col justify-center space-y-10 sm:space-y-12 mt-8 lg:mt-0">
                    {/* Currently Working */}
                    <div className="opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_0.9s_forwards]">
                        <div className="group relative">
                            <div className="absolute -inset-4 bg-linear-to-r from-foreground/3 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                            <div className="relative space-y-5">
                                <div className="flex items-center gap-2">
                                    <div className="h-px flex-1 bg-linear-to-r from-border/60 to-transparent"></div>
                                    <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground/60 uppercase">Currently</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="text-xl font-light text-foreground tracking-tight">{intro.title}</div>
                                    <a
                                        href={intro.company.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group/link"
                                    >
                                        <span className="text-sm">@{intro.company.name}</span>
                                        <svg className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <div className="text-xs text-muted-foreground/60 font-mono">2024 — Present</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Focus Skills */}
                    <div className="opacity-0 translate-y-6 animate-[fadeInUp_0.6s_ease-out_1.1s_forwards]">
                        <div className="space-y-5">
                            <div className="flex items-center gap-2">
                                <div className="h-px flex-1 bg-linear-to-r from-border/60 to-transparent"></div>
                                <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground/60 uppercase">Focus</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {intro.focusSkills.map((skill, index) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-xs text-foreground/80 rounded-full bg-muted/30 border border-border/40 hover:bg-muted/50 hover:text-foreground hover:scale-105 transition-all duration-300 cursor-default opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]"
                                        style={{ animationDelay: `${1.3 + index * 0.04}s` }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
})

Intro.displayName = "Intro"

export default Intro