"use client"

import { forwardRef } from "react"

const Work = forwardRef<HTMLElement>((props, ref) => {
    const jobs = [
        {
            role: "Software Developer",
            company: "Lancepilot Ltd.",
            url: "https://lancepilot.com",
            location: "Dhaka, Bangladesh",
            period: "2024 — Present",
            points: [
                "Build and scale SaaS platforms with Laravel using API-first architecture and multitenancy",
                "Develop white-label solutions with custom domain mapping and RBAC",
                "Integrate Stripe billing, OAuth authentication, and payment webhooks",
                "Implement real-time features with WebSockets, Pusher, and Laravel Reverb",
                "Build webhook integrations for third-party services and event-driven systems",
                "Deploy applications on Laravel Cloud, Forge, and AWS with storage configuration",
                "Optimize PostgreSQL & MySQL for performance and efficient query execution",
                "Handle production deployments, bug fixes, and performance optimization",
                "Collaborate on product launches including Product Hunt campaigns"
            ],
            tech: ["Laravel", "PHP", "REST API", "SaaS", "Multitenancy", "Custom Domains", "Stripe", "WebSockets", "Pusher", "Laravel Reverb", "Webhooks", "PostgreSQL", "MySQL", "Redis", "Laravel Cloud", "Forge", "AWS"]
        },
        {
            role: "Software Developer (Remote)",
            company: "Research & Development Global Nest",
            url: "https://www.facebook.com/rndglobalnest",
            location: "Dhaka, Bangladesh",
            period: "2024",
            points: [
                "Developed web applications using Laravel and PHP",
                "Worked on backend and frontend using Blade, JavaScript, HTML, and CSS",
                "Designed and optimized MySQL databases",
                "Fixed bugs, improved stability, and resolved application-level issues",
                "Maintained and enhanced existing systems for performance and reliability"
            ],
            tech: ["Laravel", "PHP", "Blade", "JavaScript", "HTML", "CSS", "MySQL"]
        },
        {
            role: "IT Operator",
            company: "M/S Raj Travels",
            url: "https://msrajtravels.com",
            location: "Chapainawabganj, Bangladesh",
            period: "2021 — 2023",
            points: [
                "Managed IT systems and office infrastructure",
                "Worked on Hajj pilgrim registration, pre-registration, visa processing, and data management",
                "Supported technical operations, accounts systems, and reporting",
                "Provided continuous technical support and troubleshooting",
                "Earned management recognition for reliability and problem-solving"
            ],
            tech: []
        }
    ]

    return (
        <section
            id="work"
            ref={ref}
            className="min-h-screen py-8 sm:py-12 opacity-0"
        >
            <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>

                <div className="relative max-w-4xl">
                    {/* Timeline line - highlighted */}
                    <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-foreground/40 via-foreground/20 to-transparent hidden sm:block"></div>

                    <div className="space-y-0">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="relative sm:ml-12 opacity-0 translate-y-6 animate-[fadeInUp_0.5s_ease-out_forwards]"
                                style={{ animationDelay: `${index * 0.15}s` }}
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
                                            <div className="text-muted-foreground/80 text-sm mt-1">
                                                <a
                                                    href={job.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1"
                                                >
                                                    {job.company}
                                                    <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                                {" · "}<span className="text-muted-foreground/60">{job.location}</span>
                                            </div>
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
                                            {job.tech.map((tech, techIndex) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1.5 text-xs text-foreground/80 rounded-full bg-muted/30 border border-border/40 hover:bg-muted/50 hover:text-foreground hover:scale-105 transition-all duration-300 opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]"
                                                    style={{ animationDelay: `${index * 0.15 + techIndex * 0.03}s` }}
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