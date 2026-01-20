import { notFound } from "next/navigation"
import Link from "next/link"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"

export default async function ProjectDetail({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
    const { slug } = (await params) as { slug: string }
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen py-8 sm:py-12">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
                <div className="p-5 rounded-lg ring-1 ring-border/10 bg-background/80">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 shrink-0">
                                {project.logo ? (
                                    <img src={project.logo} alt={`${project.name} logo`} className="w-10 h-10 rounded-md object-contain border border-border/20" />
                                ) : (
                                    <div className="w-10 h-10 rounded-md bg-muted/20 flex items-center justify-center text-foreground/50 font-semibold text-xs">
                                        {project.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                                    </div>
                                )}
                            </div>
                            <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${project.type === 'office'
                                ? 'border-blue-200 text-blue-600 dark:text-blue-400'
                                : 'border-purple-200 text-purple-600 dark:text-purple-400'
                                }`}>
                                {project.type === 'office' ? 'Professional' : 'Personal'}
                            </span>
                        </div>

                        <div className="space-y-2">
                            {project.url ? (
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl font-semibold tracking-tight hover:text-foreground/70 transition-colors inline-flex items-center gap-2">
                                    {project.name}
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            ) : (
                                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">{project.name}</h1>
                            )}
                            {project.company && <p className="text-sm text-muted-foreground/80">{project.company}</p>}
                            <p className="text-sm text-muted-foreground/80 leading-relaxed">{project.description}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-widest">My Role</h3>
                            <ul className="mt-2 space-y-1">
                                {project.role.map((r, i) => (
                                    <li key={i} className="text-sm text-foreground/85 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.85rem] before:w-1.5 before:h-1.5 before:bg-foreground/30 before:rounded-full">
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-widest">Tech Stack</h3>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {project.skills.map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 text-xs text-foreground/80 rounded-full bg-muted/30 border border-border/40">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link href="/projects" className="text-sm text-foreground underline inline-flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to projects
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
