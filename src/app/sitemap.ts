import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Your website's base URL
  const baseUrl = 'https://normsnickeri.se'

  // Current date for lastModified
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // Add more pages here in the future if needed
    // Example:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
