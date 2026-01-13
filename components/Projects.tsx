"use client"

import { forwardRef } from "react"

const Projects = forwardRef<HTMLElement>((props, ref) => {
    const projects = [
        {
            name: "Lancepilot",
            type: "office",
            company: "Lancepilot Ltd.",
            url: "https://lancepilot.com",
            role: [
                "Developed secure RESTful APIs features.",
                "Develop user billing management with stripe SDK.",
                "Handled SaaS architecture, Third party API integrations.",
                "Implemented RBAC and multi-workspace architecture",
                "Designed monolithic architecture",
                "Coordinated with frontend and QA team"
            ],
            description: "World's first Meta-compliant WhatsApp cold outreach tool with 97% open rate. A comprehensive SaaS platform for WhatsApp marketing automation, campaign management, and analytics.",
            skills: [
                "Laravel",
                "REST API",
                "React",
                "InertiaJs",
                "Tailwind CSS",
                "SaaS Architecture",
                "Multitenancy",
                "RBAC",
                "Stripe",
                "PostgreSQL",
                "Redis",
                "AWS",
                "Laravel Cloud",
                "Monolithic Architecture"
            ]
        },
        {
            name: "Pilgrim & Accounts Management System (Frontend)",
            type: "personal",
            company: "MS Raj Travels",
            url: "https://accounts.msrajtravels.com",
            role: [
                "Full Frontend Developer (Designed and developed the entire user interface, implemented responsive layouts, integrated APIs, and ensured cross-browser compatibility)",
                "Managed state management, authentication flows, and multi-language support",
                "Deployed and maintained the production application"
            ],
            description: "A modern, responsive web application for managing financial operations, including bank accounts, bills, borrowings, employee data, and analytics dashboards for a pilgrimage travel agency, streamlining administrative workflows and providing real-time insights.",
            skills: [
                "React 19",
                "Vite",
                "Tailwind CSS",
                "Shadcn UI",
                "Radix UI",
                "TanStack React Query",
                "Axios",
                "i18next",
                "React Router DOM",
                "React Hook Form",
                "Zod",
                "Lucide React",
                "Microservices Architecture"
            ]
        },
        {
            name: "Pilgrim & Accounts Management System (Backend)",
            type: "personal",
            company: "MS Raj Travels",
            url: "https://api.msrajtravels.com",
            role: [
                "Full Backend Developer (Built and maintained the REST API, handled database design, implemented authentication, and optimized performance)",
                "Developed analytics endpoints, transaction processing, and modular routing",
                "Ensured API security, scalability, and production deployment"
            ],
            description: "A robust REST API developed to power the operational backend of a pilgrimage travel service, handling pilgrim registrations, package management, financial transactions, and analytics, ensuring secure and efficient data processing for Hajj and Umrah services.",
            skills: [
                "Laravel 12",
                "PHP 8.2",
                "Laravel Sanctum",
                "Laravel Telescope",
                "Composer",
                "MySQL",
                "REST API",
                "Microservices Architecture"
            ]
        },
        // {
        //     name: "Subsavely",
        //     type: "personal",
        //     company: "Personal Project",
        //     url: "https://subsavely.com",
        //     description: "Subscription tracking and management SaaS platform. Helps users manage multiple subscriptions, track spending, and receive renewal notifications.",
        //     features: [
        //         "Multi-tenant subscription tracking",
        //         "Automated renewal notifications",
        //         "Spending analytics and insights",
        //         "Multiple workspace support",
        //         "Secure payment integration"
        //     ],
        //     skills: [
        //         "Laravel",
        //         "REST API",
        //         "Multitenancy",
        //         "PostgreSQL",
        //         "Redis",
        //         "Blade",
        //         "Tailwind CSS"
        //     ]
        // },
        // {
        //     name: "Start Startups",
        //     type: "personal",
        //     company: "Personal Project",
        //     url: "https://stratstartups.com",
        //     description: "Platform connecting startup founders with resources, mentors, and funding opportunities. Community-driven ecosystem for early-stage startups.",
        //     features: [
        //         "Founder profile and matching system",
        //         "Resource directory and guides",
        //         "Community engagement tools",
        //         "Content management system"
        //     ],
        //     skills: [
        //         "Laravel",
        //         "REST API",
        //         "PostgreSQL",
        //         "Blade",
        //         "Tailwind CSS"
        //     ]
        // },
        // {
        //     name: "M/S Raj Travels",
        //     type: "office",
        //     company: "M/S Raj Travels",
        //     url: "https://msrajtravels.com",
        //     description: "Government-approved Hajj and Umrah travel agency platform. Complete booking system with package management, pilgrim registration, and visa processing.",
        //     features: [
        //         "Hajj & Umrah package management",
        //         "Pilgrim registration and documentation",
        //         "Multi-language support (Bengali/English)",
        //         "Payment and booking system",
        //         "Administrative dashboard"
        //     ],
        //     skills: [
        //         "Laravel",
        //         "PHP",
        //         "MySQL",
        //         "Blade",
        //         "JavaScript",
        //         "HTML & CSS"
        //     ]
        // }
    ]

    return (
        <section
            id="projects"
            ref={ref}
            className="min-h-screen py-8 sm:py-12"
        >
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Featured Projects</h2>
                    <p className="text-muted-foreground/60 text-sm max-w-lg">
                        Real-world SaaS applications and platforms built with production-grade architecture
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.name}
                            className="opacity-0 translate-y-6 animate-[fadeInUp_0.5s_ease-out_forwards]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="group relative">
                                <div className="relative p-8 sm:p-10 rounded-2xl bg-muted/5 hover:bg-muted/10 transition-all duration-300 shadow-sm hover:shadow-md">
                                    <div className="space-y-4">
                                        {/* Header */}
                                        <div className="space-y-2">
                                            <div className="flex items-start justify-between gap-4">
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-2xl sm:text-3xl font-light tracking-tight hover:text-foreground/70 transition-colors inline-flex items-center gap-2.5 group/link"
                                                >
                                                    {project.name}
                                                    <svg className="w-5 h-5 opacity-30 group-hover/link:opacity-60 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                                <span className={`px-3 py-1.5 text-xs font-medium rounded-full shrink-0 ${project.type === 'office'
                                                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                                    : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                                                    }`}>
                                                    {project.type === 'office' ? 'Professional' : 'Personal'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Overview */}
                                        <div className="space-y-2">
                                            <h4 className="text-[11px] font-semibold text-foreground/60 uppercase tracking-widest">
                                                Overview
                                            </h4>
                                            <p className="text-sm text-muted-foreground/80 leading-relaxed font-light">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Role - Clean & Minimal */}
                                        <div className="space-y-2">
                                            <h4 className="text-[11px] font-semibold text-foreground/60 uppercase tracking-widest">
                                                My Role
                                            </h4>
                                            <ul className="space-y-2">
                                                {project.role.map((roleItem, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-sm text-foreground/85 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.65rem] before:w-1.5 before:h-1.5 before:bg-foreground/30 before:rounded-full"
                                                    >
                                                        {roleItem}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack - Minimal */}
                                        <div className="space-y-3 pt-2">
                                            <div className="flex flex-wrap gap-2">
                                                {project.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-1.5 text-xs text-foreground/80 rounded-full bg-muted/30 border border-border/40 hover:bg-muted/50 hover:text-foreground hover:scale-105 transition-all duration-300 cursor-default"
                                                        style={{
                                                            animationDelay: `${index * 0.1 + skillIndex * 0.02}s`,
                                                            opacity: 0,
                                                            animation: 'fadeInUp 0.4s ease-out forwards'
                                                        }}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})

Projects.displayName = "Projects"

export default Projects
