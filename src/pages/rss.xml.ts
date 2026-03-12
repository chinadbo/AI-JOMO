import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

/**
 * RSS Feed 生成器
 * 合并 tech 和 gear 两个集合
 */
export async function GET() {
  // 获取所有文章
  const techPosts = await getCollection('tech');
  const gearPosts = await getCollection('gear');

  // 合并并按日期排序
  const allPosts = [...techPosts, ...gearPosts]
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  // 站点配置
  const siteUrl = 'https://your-domain.com';

  return rss({
    title: 'AI Jomo - 技术博客',
    description: 'AI Jomo 的技术博客 - 探索编程、架构与生活',
    site: siteUrl,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${post.collection}/${post.id}/`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
