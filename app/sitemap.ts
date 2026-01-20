import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://zehad.me',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add other pages if they exist, but this is a single page portfolio
    ]
}
