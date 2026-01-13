"use client"

import { forwardRef } from "react"

const Education = forwardRef<HTMLElement>((props, ref) => {
    const education = [
        {
            degree: "BSc in CSE (Evening Program)",
            institution: "Bangladesh University of Business & Technology – (BUBT)",
            period: "2024 — Present",
            location: "Dhaka, Bangladesh",
            details: "For Working Professionals"
        },
        {
            degree: "Diploma Engineering in Computer",
            institution: "Chapainawabganj Polytechnic Institute – (CNPI)",
            period: "2019 — 2023",
            location: "Chapainawabganj, Bangladesh",
            details: ""
        },
        {
            degree: "SSC in Science",
            institution: "Nayagola High School – (NHS)",
            period: "2019",
            location: "Chapainawabganj, Bangladesh",
            details: ""
        }
    ]

    return (
        <section
            id="education"
            ref={ref}
            className="min-h-screen py-8 sm:py-12"
        >
            <div className="space-y-12">
                <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Education</h2>

                <div className="relative max-w-4xl">
                    {/* Vertical line with luxury gradient */}
                    <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-linear-to-b from-foreground/40 via-foreground/20 to-transparent hidden sm:block"></div>

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <div
                                key={index}
                                className="relative sm:ml-12 group translate-y-3 animate-[fadeInUp_0.35s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                {/* Luxury indicator dot */}
                                <div className="absolute -left-13 top-2.5 w-2 h-2 rounded-full border border-foreground/50 bg-background group-hover:bg-foreground transition-colors duration-500 hidden sm:block"></div>

                                <div className="space-y-2">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                        <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                                            {item.degree}
                                        </h3>
                                        <span className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase">
                                            {item.period}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <div className="text-muted-foreground/80 font-light italic">
                                            {item.institution}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground/50">
                                            <span>{item.location}</span>
                                            {item.details && (
                                                <>
                                                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                                                    <span>{item.details}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
})

Education.displayName = "Education"

export default Education
