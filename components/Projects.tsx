"use client"

import { forwardRef } from "react"
import Link from "next/link"
import projects from "@/lib/projects"

const Projects = forwardRef<HTMLElement>((props, ref) => {
    const featured = projects.slice(0, 3)


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
                        Real-world SaaS applications built with production-grade architecture.
                    </p>
                </div>

                {/* Featured (use shared data) */}
                <div className="space-y-4">
                    {featured.map((project, index) => (
                        <div
                            key={project.slug}
                            className="opacity-0 translate-y-6 animate-[fadeInUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >
                            <div className="group">
                                <div className="transition-all duration-300 p-5 rounded-lg ring-1 ring-border/10 bg-background/80 flex flex-col">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 shrink-0">
                                                {project.logo ? (
                                                    <img src={project.logo} alt={`${project.name} logo`} className="w-10 h-10 rounded-md object-contain border border-border/20" />
                                                ) : (
                                                    <div className="w-10 h-10 rounded-md bg-muted/20 flex items-center justify-center text-foreground/50 font-semibold text-xs">
                                                        {project.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                                                    </div>
                                                )}
                                            </div>
                                            <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${project.type === 'office' ? 'border-blue-200 text-blue-600 dark:text-blue-400' : 'border-purple-200 text-purple-600 dark:text-purple-400'}`}>
                                                {project.type === 'office' ? 'Professional' : 'Personal'}
                                            </span>
                                        </div>

                                        <div className="flex flex-col space-y-2">
                                            <a href={`/projects/${project.slug}`} className="text-xl sm:text-2xl font-semibold tracking-tight hover:text-foreground/70 transition-colors leading-tight block">{project.name}</a>
                                            <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2 text-justify">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.skills.slice(0, 6).map((tag) => (
                                                    <span key={tag} className="px-2 py-0.5 text-xs text-muted-foreground rounded-full border border-border/10">
                                                        {tag}
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

                {/* View All Projects Link */}
                <div className="text-right pt-4">
                    <Link href="/projects" className="text-sm font-medium text-foreground underline underline-offset-2 inline-flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span>See all projects</span>
                    </Link>
                </div>
            </div>
        </section>
    )
})

Projects.displayName = "Projects"

export default Projects
