export type Project = {
    slug: string
    name: string
    type: "office" | "personal"
    company?: string
    url?: string
    logo?: string
    role: string[]
    description: string
    skills: string[]
}

const projects: Project[] = [
    {
        slug: "lancepilot",
        name: "Lancepilot",
        type: "office",
        company: "Lancepilot Ltd.",
        url: "https://lancepilot.com",
        logo: "https://lancepilot.com/images/logo-icon.svg",
        role: [
            "Developed secure RESTful APIs features.",
            "Develop user billing management with stripe SDK.",
            "Handled SaaS architecture, Third party API integrations.",
            "Implemented RBAC and multi-workspace architecture",
            "Designed monolithic architecture",
            "Coordinated with frontend and QA team",
        ],
        description:
            "World's first Meta-compliant WhatsApp cold outreach tool with 97% open rate. A comprehensive SaaS platform for WhatsApp marketing automation, campaign management, and analytics.",
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
            "Monolithic Architecture",
        ],
    },
    {
        slug: "pilgrim-frontend",
        name: "Pilgrim & Accounts Management System (Frontend)",
        type: "personal",
        company: "MS Raj Travels",
        url: "https://accounts.msrajtravels.com",
        logo: "https://accounts.msrajtravels.com/logo.png",
        role: [
            "Full Frontend Developer (Designed and developed the entire user interface, implemented responsive layouts, integrated APIs, and ensured cross-browser compatibility)",
            "Managed state management, authentication flows, and multi-language support",
            "Deployed and maintained the production application",
        ],
        description:
            "A modern, responsive web application for managing financial operations, including bank accounts, bills, borrowings, employee data, and analytics dashboards for a pilgrimage travel agency, streamlining administrative workflows and providing real-time insights.",
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
            "Microservices Architecture",
        ],
    },
    {
        slug: "pilgrim-backend",
        name: "Pilgrim & Accounts Management System (Backend)",
        type: "personal",
        company: "MS Raj Travels",
        url: "https://api.msrajtravels.com",
        role: [
            "Full Backend Developer (Built and maintained the REST API, handled database design, implemented authentication, and optimized performance)",
            "Developed analytics endpoints, transaction processing, and modular routing",
            "Ensured API security, scalability, and production deployment",
        ],
        description:
            "A robust REST API developed to power the operational backend of a pilgrimage travel service, handling pilgrim registrations, package management, financial transactions, and analytics, ensuring secure and efficient data processing for Hajj and Umrah services.",
        skills: ["Laravel 12", "PHP 8.2", "Laravel Sanctum", "Laravel Telescope", "Composer", "MySQL", "REST API", "Microservices Architecture"],
    },
    {
        slug: "subsavely",
        name: "Subsavely",
        type: "personal",
        company: "Personal Project",
        url: "https://subsavely.com",
        logo: "https://ph-files.imgix.net/2944ffcf-9c53-40cc-80a7-80f4465b978b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&frame=1&dpr=2",
        role: ["Full Stack Developer", "Designed and implemented subscription tracking features", "Integrated multi-tenant architecture"],
        description:
            "Subscription tracking and management SaaS platform. Helps users manage multiple subscriptions, track spending, and receive renewal notifications.",
        skills: ["Laravel", "REST API", "Multitenancy", "PostgreSQL", "Redis", "Blade", "Tailwind CSS"],
    },
    {
        slug: "start-startups",
        name: "Start Startups",
        type: "personal",
        company: "Personal Project",
        url: "https://stratstartups.com",
        role: ["Full Stack Developer", "Built founder matching and resource directory", "Implemented community features"],
        description:
            "Platform connecting startup founders with resources, mentors, and funding opportunities. Community-driven ecosystem for early-stage startups.",
        skills: ["Laravel", "REST API", "PostgreSQL", "Blade", "Tailwind CSS"],
    },
    {
        slug: "ms-raj-travels",
        name: "M/S Raj Travels",
        type: "office",
        company: "M/S Raj Travels",
        url: "https://msrajtravels.com",
        role: ["Full Stack Developer", "Developed booking system and pilgrim management", "Implemented multi-language support"],
        description:
            "Government-approved Hajj and Umrah travel agency platform. Complete booking system with package management, pilgrim registration, and visa processing.",
        skills: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript", "HTML & CSS"],
    },
]

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug)
}

export default projects
