import { useState, useEffect, useCallback } from 'react';
import { Command } from 'cmdk';
import { Search, Moon, Sun, Home, Github, X } from 'lucide-react';

/**
 * 搜索结果项接口
 */
interface SearchItem {
  title: string;
  url: string;
  description: string;
  tags: string[];
  type: 'article' | 'command';
  category?: string;
}

/**
 * 命令面板组件
 * 通过 Cmd+K / Ctrl+K 唤起，支持搜索文章和内置命令
 */
interface CommandPaletteProps {
  items: SearchItem[];
}

export default function CommandPalette({ items }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  // 监听键盘快捷键
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // 处理命令执行
  const handleSelect = useCallback((item: SearchItem) => {
    if (item.type === 'command') {
      // 执行内置命令
      if (item.url === 'toggle-theme') {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      } else if (item.url === 'go-home') {
        window.location.href = '/';
      } else if (item.url.startsWith('https://')) {
        window.open(item.url, '_blank');
      }
    } else {
      // 跳转文章页
      window.location.href = item.url;
    }
    setOpen(false);
  }, []);

  // 内置命令列表
  const commands: SearchItem[] = [
    {
      title: '切换主题',
      url: 'toggle-theme',
      description: '在暗黑和亮色模式之间切换',
      tags: ['设置'],
      type: 'command',
    },
    {
      title: '回到首页',
      url: 'go-home',
      description: '返回网站首页',
      tags: ['导航'],
      type: 'command',
    },
    {
      title: 'GitHub 仓库',
      url: 'https://github.com',
      description: '访问 GitHub 仓库',
      tags: ['外部链接'],
      type: 'command',
    },
    {
      title: 'RSS 订阅',
      url: '/rss.xml',
      description: '订阅 RSS 动态',
      tags: ['订阅'],
      type: 'command',
    },
  ];

  const filteredItems = search
    ? [
        ...commands.filter(
          (cmd) =>
            cmd.title.toLowerCase().includes(search.toLowerCase()) ||
            cmd.description.toLowerCase().includes(search.toLowerCase())
        ),
        ...items.filter(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
        ),
      ]
    : [...commands, ...items];

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* 遮罩层 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* 命令面板 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-xl">
        <Command
          className="glass rounded-xl overflow-hidden glow-cyan"
          shouldFilter={true}
        >
          {/* 搜索输入框 */}
          <div className="flex items-center border-b border-slate-200 dark:border-slate-700 px-4">
            <Search className="w-5 h-5 text-slate-400" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="搜索文章或执行命令..."
              className="flex-1 px-3 py-4 bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
            />
            <button onClick={() => setOpen(false)} className="p-1">
              <X className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* 结果列表 */}
          <Command.List className="max-h-[400px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-slate-500">
              未找到匹配结果
            </Command.Empty>

            {/* 内置命令组 */}
            {!search && (
              <Command.Group heading="命令" className="mb-2">
                {commands.map((cmd, index) => (
                  <Command.Item
                    key={index}
                    value={cmd.title}
                    onSelect={() => handleSelect(cmd)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer data-[selected=true]:bg-cyber-cyan/20 data-[selected=true]:text-cyber-cyan text-slate-700 dark:text-slate-300"
                  >
                    {cmd.url === 'toggle-theme' ? (
                      document.documentElement.classList.contains('dark') ? (
                        <Sun className="w-4 h-4" />
                      ) : (
                        <Moon className="w-4 h-4" />
                      )
                    ) : cmd.url === 'go-home' ? (
                      <Home className="w-4 h-4" />
                    ) : cmd.url.startsWith('https://') ? (
                      <Github className="w-4 h-4" />
                    ) : (
                      <Search className="w-4 h-4" />
                    )}
                    <div>
                      <div className="font-medium">{cmd.title}</div>
                      <div className="text-xs text-slate-500">{cmd.description}</div>
                    </div>
                  </Command.Item>
                ))}
              </Command.Group>
            )}

            {/* 文章列表 */}
            {filteredItems.some((item) => item.type === 'article') && (
              <Command.Group heading="文章" className="mb-2">
                {filteredItems
                  .filter((item) => item.type === 'article')
                  .map((item, index) => (
                    <Command.Item
                      key={index}
                      value={`${item.title} ${item.tags.join(' ')}`}
                      onSelect={() => handleSelect(item)}
                      className="flex flex-col gap-1 px-3 py-2 rounded-lg cursor-pointer data-[selected=true]:bg-cyber-cyan/20 data-[selected=true]:text-cyber-cyan"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-900 dark:text-slate-100">
                          {item.title}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500">{item.description}</div>
                    </Command.Item>
                  ))}
              </Command.Group>
            )}
          </Command.List>

          {/* 底部提示 */}
          <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 flex items-center gap-4">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700">↑↓</kbd> 导航
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700">↵</kbd> 确认
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700">esc</kbd> 关闭
            </span>
          </div>
        </Command>
      </div>
    </div>
  );
}
