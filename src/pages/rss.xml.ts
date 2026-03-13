import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

/**
 * RSS Feed Generator
 * Combines tech and gear collections
 */
export async function GET() {
  // Get all articles
  const techPosts = await getCollection('tech');
  const gearPosts = await getCollection('gear');

  // Merge and sort by date
  const allPosts = [...techPosts, ...gearPosts]
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  // Site configuration
  const siteUrl = 'https://your-domain.com';

  return rss({
    title: "Ioodu's Blog - Tech & Gear",
    description: 'A blog about programming, architecture, AI, and gear reviews.',
    site: siteUrl,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${post.collection}/${post.id}/`,
    })),
    customData: `<language>en-US</language>`,
  });
}
