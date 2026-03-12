import { getCollection } from 'astro:content';

/**
 * 静态搜索索引生成器
 * 在构建时生成包含所有文章 title、url、tags、description 的 JSON
 */
export async function GET() {
  // 获取所有文章
  const techPosts = await getCollection('tech');
  const gearPosts = await getCollection('gear');

  // 构建搜索索引
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
  ];

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
