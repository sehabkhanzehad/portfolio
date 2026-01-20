import { notFound } from "next/navigation"
import Link from "next/link"
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
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        {project.logo ? (
                            <img src={project.logo} alt={`${project.name} logo`} className="w-16 h-16 rounded-md object-cover border border-border/20" />
                        ) : (
                            <div className="w-16 h-16 rounded-md bg-muted/20 flex items-center justify-center text-foreground/50 font-semibold">
                                {project.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()}
                            </div>
                        )}

                        <div className="flex-1">
                            <div className="flex items-center justify-between gap-4">
                                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{project.name}</h1>
                                <span className={`px-3 py-1.5 text-xs font-medium rounded-full shrink-0 ${project.type === 'office'
                                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                    : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                                    }`}>
                                    {project.type === 'office' ? 'Professional' : 'Personal'}
                                </span>
                            </div>

                            {project.company && <p className="text-sm text-muted-foreground/80 mt-1">{project.company}</p>}

                            <p className="mt-3 text-sm text-muted-foreground/80 leading-relaxed max-w-3xl">{project.description}</p>

                            <div className="mt-4 flex items-center gap-3">
                                {project.url && (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
                                        Visit site
                                    </a>
                                )}

                                <Link href="/projects" className="text-sm text-muted-foreground/70 hover:underline">Back to projects</Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-widest">My Role</h3>
                            <ul className="mt-3 space-y-2">
                                {project.role.map((r, i) => (
                                    <li key={i} className="text-sm text-foreground/85 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.85rem] before:w-1.5 before:h-1.5 before:bg-foreground/30 before:rounded-full">
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-widest">Tech Stack</h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.skills.map((s) => (
                                    <span key={s} className="px-3 py-1.5 text-xs text-foreground/80 rounded-full bg-muted/30 border border-border/40">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
