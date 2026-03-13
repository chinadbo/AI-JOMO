import { getCollection } from 'astro:content';

/**
 * Static search index generator
 * Generates JSON with all article titles, urls, tags, descriptions at build time
 */
export async function GET() {
  // Get all articles
  const techPosts = await getCollection('tech');
  const gearPosts = await getCollection('gear');
  const essaysPosts = await getCollection('essays');
  const lifePosts = await getCollection('life');

  // Build search index
  const searchIndex = [
    ...techPosts.map((post) => ({
      title: post.data.title,
      url: `/tech/${post.id}`,
      description: post.data.description,
      tags: post.data.tags,
      type: 'article' as const,
      category: 'tech',
    })),
    ...gearPosts.map((post) => ({
      title: post.data.title,
      url: `/gear/${post.id}`,
      description: post.data.description,
      tags: post.data.tags,
      type: 'article' as const,
      category: 'gear',
    })),
    ...essaysPosts.map((post) => ({
      title: post.data.title,
      url: `/essays/${post.id}`,
      description: post.data.description,
      tags: post.data.tags,
      type: 'article' as const,
      category: 'essays',
    })),
    ...lifePosts.map((post) => ({
      title: post.data.title,
      url: `/life/${post.id}`,
      description: post.data.description,
      tags: post.data.tags,
      type: 'article' as const,
      category: 'life',
    })),
  ];

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
