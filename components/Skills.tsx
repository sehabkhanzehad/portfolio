"use client"

import { forwardRef } from "react"

const Skills = forwardRef<HTMLElement>((props, ref) => {
    const skillCategories = [
        {
            title: "Backend & Architecture",
            skills: [
                "Laravel",
                "PHP",
                "REST API",
                "SaaS Architecture",
                "Multitenancy",
                "RBAC",
                "Stripe Billing",
                "OAuth & JWT",
                "Queues & Jobs",
                "Webhooks",
                "Laravel Telescope & Horizon"
            ]
        },
        {
            title: "Database & Cache",
            skills: [
                "PostgreSQL",
                "MySQL",
                "Redis",
                "Schema Design",
                "Query Optimization"
            ]
        },
        {
            title: "Cloud & Deployment",
            skills: [
                "Laravel Cloud",
                "Laravel Forge",
                "AWS Basics",
                "Storage Buckets",
                "Domain & SSL"
            ]
        },
        {
            title: "Frontend",
            skills: [
                "React",
                "JavaScript",
                "Tailwind CSS",
                "Blade",
                "HTML & CSS"
            ]
        },
        {
            title: "Tools",
            skills: [
                "Git & GitHub",
                "VS Code",
                "Postman",
                "Composer",
                "NPM",
                "TablePlus",
                "Terminal"
            ]
        }
    ]

    return (
        <section
            id="skills"
            ref={ref}
            className="min-h-screen py-8 sm:py-12 opacity-0"
        >
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-light tracking-tight">Skills & Expertise</h2>
                    <p className="text-muted-foreground/60 text-sm max-w-lg">
                        Specialized in building scalable SaaS products with modern technologies
                    </p>
                </div>

                {/* Skills Categories */}
                <div className="grid gap-8 md:grid-cols-2">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="opacity-0 translate-y-6 animate-[fadeInUp_0.5s_ease-out_forwards]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="group relative">
                                {/* Subtle background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-muted/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                <div className="relative p-6 rounded-2xl border border-border/20 hover:border-border/40 transition-all duration-300">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full"></div>
                                            <h3 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider">
                                                {category.title}
                                            </h3>
                                        </div>

                                        <div className="flex flex-wrap gap-2.5">
                                            {category.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 text-xs font-medium text-muted-foreground/90 bg-gradient-to-r from-background to-muted/20 backdrop-blur-sm rounded-full border border-border/30 hover:bg-muted/30 hover:text-foreground hover:border-border/50 hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                                                    style={{
                                                        animationDelay: `${index * 0.1 + skillIndex * 0.03}s`,
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
                    ))}
                </div>

                {/* Professional Summary */}
                <div
                    className="opacity-0 translate-y-4 animate-[fadeInUp_0.5s_ease-out_forwards]"
                    style={{ animationDelay: '0.6s' }}
                >
                    <div className="relative overflow-hidden p-8 rounded-2xl border border-border/20 bg-gradient-to-br from-muted/[0.05] via-muted/[0.02] to-transparent">
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.01] to-transparent"></div>
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-foreground/30 rounded-full"></div>
                                <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider">
                                    Core Expertise
                                </h4>
                            </div>
                            <p className="text-sm text-muted-foreground/80 leading-relaxed pl-4">
                                Full-stack SaaS development with deep expertise in Laravel ecosystem, multitenancy architecture, subscription billing systems, and production deployment. Proven track record in building scalable applications from concept to cloud infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
})

Skills.displayName = "Skills"

export default Skills
