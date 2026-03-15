import { useState, useEffect, useCallback } from 'react';
import { Command } from 'cmdk';
import { Search, Moon, Sun, Home, Github, X } from 'lucide-react';

/**
 * Search result item interface
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
 * Command Palette Component
 * Triggered by Cmd+K / Ctrl+K, supports searching articles and built-in commands
 */
interface CommandPaletteProps {
  items: SearchItem[];
}

export default function CommandPalette({ items }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Listen for keyboard shortcuts
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

  // Handle command execution
  const handleSelect = useCallback((item: SearchItem) => {
    if (item.type === 'command') {
      // Execute built-in commands
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
      // Navigate to article page
      window.location.href = item.url;
    }
    setOpen(false);
  }, []);

  // Built-in commands list
  const commands: SearchItem[] = [
    {
      title: 'Toggle Theme',
      url: 'toggle-theme',
      description: 'Switch between dark and light mode',
      tags: ['Settings'],
      type: 'command',
    },
    {
      title: 'Go Home',
      url: 'go-home',
      description: 'Return to homepage',
      tags: ['Navigation'],
      type: 'command',
    },
    {
      title: 'GitHub Repository',
      url: 'https://github.com',
      description: 'Visit GitHub repository',
      tags: ['External Link'],
      type: 'command',
    },
    {
      title: 'RSS Feed',
      url: '/rss.xml',
      description: 'Subscribe to RSS feed',
      tags: ['Subscribe'],
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
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Command Palette */}
      <div className="absolute top-[10%] sm:top-1/4 left-1/2 -translate-x-1/2 w-[95%] sm:w-full max-w-xl px-2 sm:px-0">
        <Command
          className="glass rounded-xl overflow-hidden glow-cyan"
          shouldFilter={true}
        >
          {/* Search Input */}
          <div className="flex items-center border-b border-slate-200 dark:border-slate-700 px-4">
            <Search className="w-5 h-5 text-slate-400" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search articles or run commands..."
              className="flex-1 px-3 py-4 bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
            />
            <button onClick={() => setOpen(false)} className="p-1">
              <X className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Results List */}
          <Command.List className="max-h-[50vh] sm:max-h-[400px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-slate-500">
              No results found
            </Command.Empty>

            {/* Built-in Commands Group */}
            {!search && (
              <Command.Group heading="Commands" className="mb-2">
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

            {/* Articles List */}
            {filteredItems.some((item) => item.type === 'article') && (
              <Command.Group heading="Articles" className="mb-2">
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

          {/* Footer Hints */}
          <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 flex items-center gap-4">
            <span className="hidden sm:inline">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700">↑↓</kbd> Navigate
            </span>
            <span className="hidden sm:inline">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700">↵</kbd> Select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 hidden sm:inline">esc</kbd>
              <span className="sm:hidden">Tap to select</span>
            </span>
          </div>
        </Command>
      </div>
    </div>
  );
}
