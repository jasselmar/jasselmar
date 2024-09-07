import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jorgemar.me',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://jorgemar.me/tennibot',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://jorgemar.me/hsf-app',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}
