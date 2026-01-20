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
        "slug": "lancepilot-api-v3",
        "name": "Lancepilot API v3",
        "type": "office",
        "company": "Lancepilot Ltd.",
        "url": "https://api.lancepilot.com",
        "logo": "https://lancepilot.com/images/logo-icon.svg",
        "role": [
            "Designed and developed comprehensive RESTful API v3 with 60+ endpoints covering workspaces, contacts, messaging, templates, billing, and user management.",
            "Implemented multi-workspace architecture with RBAC and partner permissions.",
            "Integrated WhatsApp Business API for cold outreach messaging (text, image, audio, video, document).",
            "Built secure authentication with Bearer tokens and proper error handling (401, 422, 404 responses).",
            "Developed OpenAPI 3.1.0 specification with detailed schemas, parameters, and responses.",
            "Created full API documentation using Mintlify for interactive, searchable docs with examples.",
            "Deployed and managed API on production infrastructure with monitoring and optimization.",
            "Performed extensive bug fixing, performance optimization, and maintenance post-deployment.",
            "Coordinated with frontend and QA teams for seamless integration and testing."
        ],
        "description": "Complete API v3 development for Lancepilot's WhatsApp marketing automation platform. Features multi-workspace support, contact management, automated messaging, template handling, billing integration, and comprehensive documentation. Served as the backbone for the SaaS platform's frontend and third-party integrations.",
        "skills": [
            "REST API Design",
            "OpenAPI 3.1.0",
            "Laravel",
            "PHP",
            "API Deployment",
            "Multi-tenancy",
            "WhatsApp Business API",
            "RBAC",
            "Mintlify Documentation",
            "PostgreSQL",
            "Redis",
            "AWS/Laravel Cloud",
            "API Optimization",
            "Bug Fixing",
            "Team Coordination"
        ]
    },
    {
        "slug": "linbox",
        "name": "Linbox",
        "type": "office",
        "company": "Lancepilot Ltd.",
        "url": "https://play.google.com/store/apps/details?id=com.lancepilot.linbox",
        "logo": "https://play-lh.googleusercontent.com/RGDjKoYk5j_1eBrzO5ZppYjXr9ewmBh31WdMjI_PV4zpg1VBOfHywfx35xqgf4dkZxA=w480-h960-rw",
        "role": [
            "Developed dedicated RESTful API for mobile applications with 50+ endpoints optimized for real-time WhatsApp messaging.",
            "Implemented push notification system using Expo SDK for cross-platform mobile alerts.",
            "Integrated Pusher for real-time authentication and live updates in mobile inbox.",
            "Built mobile-specific features: contact pinning, message search, bulk operations, and offline-capable endpoints.",
            "Designed mobile-optimized contact management with labels, tags, notes, translations, and quick replies.",
            "Developed secure authentication with Sanctum tokens and mobile-only access controls.",
            "Implemented workspace selection and multi-tenancy support for mobile users.",
            "Added template message sending and conversation cost tracking for mobile campaigns.",
            "Ensured mobile API performance with efficient queries, caching, and minimal payload sizes.",
            "Coordinated mobile API deployment, testing with mobile teams, and post-launch optimizations."
        ],
        "description": "Custom API backend for Lancepilot's mobile apps, enabling real-time WhatsApp cold outreach on-the-go. Features push notifications, live messaging, contact management, and campaign tools tailored for mobile UX. Supports iOS/Android apps with Expo and Pusher integrations for seamless user experience.",
        "skills": [
            "Mobile API Development",
            "REST API Design",
            "Laravel",
            "PHP",
            "Expo SDK",
            "Pusher",
            "Real-time Messaging",
            "Push Notifications",
            "Sanctum Authentication",
            "Mobile Optimization",
            "WhatsApp Business API",
            "PostgreSQL",
            "Redis",
            "AWS/Laravel Cloud",
            "Cross-platform Development"
        ]
    },
    {
        slug: "startstartups-backend",
        name: "StartStartups",
        type: "office",
        company: "StartStartups",
        url: "https://www.startstartups.com",
        logo: "https://play-lh.googleusercontent.com/iRNMcTZ96eTf8Y_4THQIPtAzbBCXwmfDB1Lhf-7K8yclhGuWHhqds3eu-N3_mvxO5k-yjk49_VWj_aPw60tl=w480-h960-rw",
        role: ["Developed full backend for SaaS crowdfunding platform using Laravel 12.", "Designed comprehensive database schema with 40+ tables including users, products, orders, subscriptions, wallets, and transactions.", "Implemented secure RESTful APIs with Laravel Sanctum authentication.", "Integrated Stripe payment gateway for subscriptions, orders, and billing management.", "Built RBAC system with admin, staff, and user roles.", "Implemented file management with AWS S3 integration for attachments and media.", "Developed coupon system, reward points, and wallet functionality.", "Created support ticket system with replies and notifications.", "Optimized performance with Redis caching and background jobs.", "Managed deployment and monitoring on Laravel Cloud.", "Fixed bugs and optimized code for scalability.", "Coordinated with frontend team for API integration."],
        description: "StartStartups is the world's first SaaS crowdfunding platform, empowering non-technical founders to launch white-labeled SaaS products for just $99. The backend handles user management, product funding campaigns, secure payments, subscriptions, and comprehensive SaaS operations.",
        skills: ["Laravel", "PHP 8.2", "REST API", "Laravel Sanctum", "Stripe SDK", "PostgreSQL", "Redis", "AWS S3", "Laravel Telescope", "RBAC", "SaaS Architecture", "Database Design", "API Development", "Payment Integration", "Cloud Deployment", "Code Optimization", "Background Jobs", "Caching", "File Management", "Notification System"]
    },
    {
        slug: "startstartups-mobile-api",
        name: "StartStartups Mobile API",
        type: "office",
        company: "StartStartups",
        url: "https://play.google.com/store/apps/details?id=com.lancepilot.startstartups",
        logo: "https://play-lh.googleusercontent.com/iRNMcTZ96eTf8Y_4THQIPtAzbBCXwmfDB1Lhf-7K8yclhGuWHhqds3eu-N3_mvxO5k-yjk49_VWj_aPw60tl=w480-h960-rw",
        role: ["Developed comprehensive mobile API for SaaS crowdfunding platform.", "Implemented authentication system with Google OAuth and Sanctum tokens.", "Built product browsing APIs for ready, funding, and development products.", "Created detailed product APIs including info, media, reviews, descriptions, FAQs, contributors, timelines, and comments.", "Developed user management APIs for profile, orders, subscriptions, and wallet.", "Integrated cart and checkout functionality with coupon application.", "Implemented notification system for mobile users.", "Built review and comment systems with upvoting.", "Developed billing and payment method management.", "Ensured mobile-specific middleware and security.", "Optimized APIs for mobile performance and data efficiency.", "Coordinated with mobile app team for seamless integration."],
        description: "Mobile API backend for StartStartups platform, providing full mobile app functionality for browsing SaaS products, managing investments, subscriptions, and user interactions on crowdfunding campaigns.",
        skills: ["Laravel", "REST API", "Mobile API Development", "Laravel Sanctum", "Google OAuth", "API Optimization", "User Authentication", "Product Management", "E-commerce APIs", "Notification APIs", "Review Systems", "Cart and Checkout", "Subscription Management", "Mobile Middleware", "Data Serialization", "API Security"]
    },
    {
        slug: "subsavely",
        name: "Subsavely",
        type: "office",
        company: "Lancepilot Ltd.",
        url: "https://www.producthunt.com/products/subsavely",
        logo: "https://ph-files.imgix.net/2944ffcf-9c53-40cc-80a7-80f4465b978b.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&frame=1&dpr=2",
        role: [
            "Led backend development for a multi-tenant SaaS subscription management platform using Laravel 11.",
            "Designed and implemented RESTful APIs with Sanctum authentication, supporting user subscriptions, payments, and real-time notifications.",
            "Integrated third-party services including Stripe for payments, AWS S3 for storage, Pusher for real-time features, and MailerSend for email.",
            "Developed complex database schema with RBAC, multi-tenancy (agencies/workspaces), and relationships for subscriptions, plans, and invoices.",
            "Optimized for performance with caching, queues, and monitoring via Laravel Telescope, ensuring scalability for growing user bases.",
            "Handled security, bug fixes, and feature additions like webhooks, activity logging, and custom domains."
        ],
        description: "Subsavely is a comprehensive subscription tracking SaaS that helps users manage and optimize their external service subscriptions, featuring multi-tenancy, payment integrations, and real-time updates.",
        skills: [
            "Laravel",
            "PHP",
            "REST APIs",
            "Stripe Integration",
            "AWS S3",
            "Pusher",
            "PostgreSQL",
            "Redis",
            "RBAC",
            "Multi-tenancy",
            "Laravel Sanctum",
            "Queues & Caching",
            "Laravel Telescope"
        ]
    },
    {
        slug: "raj-travels",
        name: "M/S Raj Travels Website",
        type: "personal",
        company: "M/S Raj Travels",
        url: "https://www.msrajtravels.com",
        logo: "https://accounts.msrajtravels.com/logo.png",
        role: ["Developed a modern, SEO-optimized website for a Hajj and Umrah travel agency using Next.js 16, TypeScript, and Tailwind CSS.", "Implemented multi-language support (English and Bengali) with internationalization.", "Integrated comprehensive SEO features including meta tags, structured data, sitemaps, and social media optimization.", "Built responsive UI components with dark/light theme support using Radix UI and Tailwind CSS.", "Configured deployment on Vercel with analytics integration.", "Ensured mobile-first design and performance optimizations like lazy loading and code splitting."],
        description: "A comprehensive website for M/S Raj Travels, Bangladesh's leading Hajj and Umrah travel agency, featuring package listings, service information, team profiles, and contact forms with full SEO optimization.",
        skills: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SEO Optimization", "Internationalization (i18n)", "Vercel", "Radix UI", "React Hook Form", "Zod", "Responsive Design"]
    },
    {
        slug: "pilgrim-backend",
        name: "Pilgrim & Accounts Management System (Backend)",
        type: "personal",
        company: "MS Raj Travels",
        url: "https://api.msrajtravels.com",
        logo: "https://accounts.msrajtravels.com/logo.png",
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
]

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug)
}

export default projects
