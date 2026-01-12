"use client"

import { forwardRef } from "react"

const Work = forwardRef<HTMLElement>((props, ref) => {
    const jobs = [
        {
            role: "Software Developer",
            company: "Lancepilot Ltd.",
            period: "2024 — Present",
            points: [
                "Develop scalable SaaS backends using Laravel",
                "Implement multi-tenant & white-label architectures",
                "Integrate Stripe billing (subscriptions, trials, payments)",
                "Build secure, API-first systems with RBAC",
                "Optimize databases & performance for production workloads"
            ],
            tech: ["Laravel", "REST API", "SaaS", "Multitenancy", "Stripe", "PostgreSQL", "Redis"]
        },
        {
            role: "Software Developer (Remote)",
            company: "R&D Global Nest",
            period: "2024",
            points: [
                "Build and maintain RESTful APIs",
                "Optimize database design & queries",
                "Debug and resolve backend system issues"
            ],
            tech: ["Laravel", "REST API", "MySQL/PostgreSQL"]
        },
        {
            role: "IT Operator",
            company: "M/S Raj Travels",
            period: "2021 — 2023",
            points: [
                "Managed IT infrastructure & systems",
                "Provided technical support and issue resolution",
                "Ensured system stability & data reliability"
            ],
            tech: []
        }
    ]

    return (
        <section
            id="work"
            ref={ref}
            className="min-h-screen py-20 sm:py-32 opacity-0"
        >
            <div className="space-y-12 sm:space-y-16">
                <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>

                <div className="relative max-w-4xl">
                    {/* Timeline line - highlighted */}
                    <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-foreground/40 via-foreground/20 to-transparent hidden sm:block"></div>

                    <div className="space-y-0">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="relative sm:ml-12 opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease-out_forwards]"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Timeline dot - vertically centered with job title */}
                                <div className="absolute -left-[3.25rem] top-[2.75rem] w-2.5 h-2.5 bg-foreground rounded-full hidden sm:block ring-4 ring-background"></div>

                                {/* Job card */}
                                <div className="p-6 sm:p-8 border-b border-border/20 last:border-b-0">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-5">
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                                                {job.role}
                                            </h3>
                                            <div className="text-muted-foreground/80 text-sm mt-1">{job.company}</div>
                                        </div>
                                        <div className="text-xs text-muted-foreground/60 font-mono tracking-wider uppercase">
                                            {job.period}
                                        </div>
                                    </div>

                                    <ul className="space-y-2.5 mb-6">
                                        {job.points.map((point, i) => (
                                            <li key={i} className="text-muted-foreground text-sm leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-muted-foreground/40 before:rounded-full">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    {job.tech.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {job.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1.5 text-xs text-foreground/80 rounded-full bg-muted/30 border border-border/40 hover:bg-muted/50 hover:text-foreground transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
})

Work.displayName = "Work"

export default Work