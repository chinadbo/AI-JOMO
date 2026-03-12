/**
 * Internationalization (i18n) Configuration
 * Supports EN and ZH languages
 */

export type Language = 'en' | 'zh';

export interface Translations {
  // Navigation
  nav: {
    tech: string;
    gear: string;
    essays: string;
    life: string;
    about: string;
  };

  // Home Page
  home: {
    hero: {
      whoami: string;
      title: string;
      subtitle: string;
      stack: string;
    };
    latestArticles: string;
    viewAll: string;
    noArticles: string;
    subscribe: string;
    subscribeDesc: string;
  };

  // Tech Page
  tech: {
    title: string;
    subtitle: string;
  };

  // Essays Page
  essays: {
    title: string;
    subtitle: string;
  };

  // Life Page
  life: {
    title: string;
    subtitle: string;
  };

  // Gear Page
  gear: {
    title: string;
    subtitle: string;
    viewOn: string;
  };

  // Article
  article: {
    minRead: string;
    updated: string;
    backToHome: string;
  };

  // Footer
  footer: {
    copyright: string;
  };

  // Search
  search: {
    placeholder: string;
    noResults: string;
    commands: string;
    articles: string;
  };

  // About Page
  about: {
    title: string;
    aboutMe: string;
    techStack: string;
    contact: string;
    aboutBlog: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      tech: 'Tech',
      gear: 'Gear',
      essays: 'Essays',
      life: 'Life',
      about: 'About',
    },
    home: {
      hero: {
        whoami: 'whoami',
        title: 'Ioodu | Software Engineer | Tech Enthusiast',
        subtitle: 'Building the future with code. Focused on backend architecture, TypeScript, AI, and systems programming.',
        stack: '$STACK',
      },
      latestArticles: 'Latest Articles',
      viewAll: 'View all →',
      noArticles: 'No articles yet',
      subscribe: 'Stay Updated',
      subscribeDesc: 'Subscribe via RSS to get the latest articles',
    },
    tech: {
      title: 'Tech Articles',
      subtitle: 'Exploring programming, architecture, and the future of technology',
    },
    essays: {
      title: 'Essays',
      subtitle: 'Thoughts on technology, career, and life',
    },
    life: {
      title: 'Life',
      subtitle: 'Daily moments, hobbies, and lifestyle',
    },
    gear: {
      title: 'Gear Reviews',
      subtitle: 'EDC, gadgets, and product reviews',
      viewOn: 'View on',
    },
    article: {
      minRead: 'min read',
      updated: 'Updated',
      backToHome: 'Back to Home',
    },
    footer: {
      copyright: 'Ioodu. All rights reserved.',
    },
    search: {
      placeholder: 'Search articles or run commands...',
      noResults: 'No results found',
      commands: 'Commands',
      articles: 'Articles',
    },
    about: {
      title: 'About',
      aboutMe: 'About Me',
      techStack: 'Tech Stack',
      contact: 'Contact',
      aboutBlog: 'About This Blog',
    },
  },
  zh: {
    nav: {
      tech: '技术',
      gear: '装备',
      essays: '随笔',
      life: '生活',
      about: '关于',
    },
    home: {
      hero: {
        whoami: 'whoami',
        title: 'Ioodu | 软件工程师 | 技术爱好者',
        subtitle: '用代码构建未来。专注于后端架构、TypeScript、AI 和系统编程。',
        stack: '$技术栈',
      },
      latestArticles: '最新文章',
      viewAll: '查看全部 →',
      noArticles: '暂无文章',
      subscribe: '订阅更新',
      subscribeDesc: '通过 RSS 订阅获取最新文章',
    },
    tech: {
      title: '技术文章',
      subtitle: '探索编程、架构与技术的未来',
    },
    essays: {
      title: '随笔',
      subtitle: '关于技术、职业与生活的思考',
    },
    life: {
      title: '生活',
      subtitle: '日常瞬间、兴趣爱好与生活方式',
    },
    gear: {
      title: '装备评测',
      subtitle: 'EDC、数码装备与产品评测',
      viewOn: '查看',
    },
    article: {
      minRead: '分钟阅读',
      updated: '更新于',
      backToHome: '返回首页',
    },
    footer: {
      copyright: 'Ioodu. 保留所有权利。',
    },
    search: {
      placeholder: '搜索文章或执行命令...',
      noResults: '未找到结果',
      commands: '命令',
      articles: '文章',
    },
    about: {
      title: '关于',
      aboutMe: '关于我',
      techStack: '技术栈',
      contact: '联系方式',
      aboutBlog: '关于博客',
    },
  },
};

/**
 * Get translations based on language
 */
export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

/**
 * Detect language from browser or URL
 */
export function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  const url = new URL(window.location.href);
  const pathLang = url.pathname.split('/')[1];

  if (pathLang === 'zh') return 'zh';
  if (pathLang === 'en') return 'en';

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('zh')) return 'zh';

  return 'en';
}
