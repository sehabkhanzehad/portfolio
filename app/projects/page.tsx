"use client"

import Link from "next/link"
import projects from "@/lib/projects"

export default function ProjectsPage() {
    return (
        <div className="min-h-screen py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-3xl sm:text-4xl font-light tracking-tight">All Projects</h1>
                        <p className="text-muted-foreground/60 text-sm max-w-lg">
                            Complete list of production live projects I've built.
                        </p>
                    </div>

                    {/* Projects Grid (3-column cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="h-80 p-6 rounded-lg border border-border/20 bg-background/80 flex flex-col group"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="w-10 h-10 shrink-0">
                                        {project.logo ? (
                                            <img src={project.logo} alt={`${project.name} logo`} className="w-10 h-10 rounded-md object-contain border border-border/20" />
                                        ) : (
                                            <div className="w-10 h-10 rounded-md bg-muted/20 flex items-center justify-center text-foreground/50 font-semibold text-xs">
                                                {project.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()}
                                            </div>
                                        )}
                                    </div>
                                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${project.type === 'office' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'}`}>
                                        {project.type === 'office' ? 'Professional' : 'Personal'}
                                    </span>
                                </div>

                                <div className="flex-1 flex flex-col space-y-2">
                                    <h3 className="text-lg font-semibold tracking-tight text-foreground leading-tight">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.skills.slice(0, 6).map((tag) => (
                                            <span key={tag} className="px-3 py-1.5 text-xs text-foreground/80 rounded-full bg-muted/30 border border-border/40">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}