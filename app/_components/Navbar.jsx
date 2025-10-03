'use client';

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Moon, Search, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { NewsContext } from '@/Context/NewsContext';

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { setNews } = useContext(NewsContext);
  const [query, setQuery] = useState('');

  const fetchNewsWithQuery = async () => {
    if (query.trim() === '') return;
    try {
      const res = await fetch(
        `/api/everything-with-query?query=${encodeURIComponent(query.trim())}`
      );
      const data = await res.json();
      setNews(data.articles);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className="flex flex-wrap items-center justify-between gap-4 p-3 md:p-4 shadow-md">
        <Link
          href={'/'}
          className="font-bold text-xl sm:text-2xl whitespace-nowrap"
        >
          <span className="text-green-700">News</span> App
        </Link>

        <div className="flex items-center gap-2 border px-3 py-2 rounded-md w-full sm:w-auto sm:flex-1 sm:max-w-md order-3 sm:order-2">
          <input
            type="text"
            placeholder="search..."
            className="border-0 w-full outline-none text-base sm:text-lg md:text-xl bg-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search
            className="cursor-pointer text-green-700 flex-shrink-0"
            size={20}
          />
        </div>

        <Button className="order-2 sm:order-3" variant={'ghost'}>
          <div className="w-5 h-5" />
        </Button>
      </nav>
    );
  }

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 p-3 md:p-4 shadow-md sticky top-0 bg-white dark:bg-black z-40">
      <Link
        href={'/'}
        className="font-bold text-xl sm:text-2xl whitespace-nowrap"
      >
        <span className="text-green-700">News</span> App
      </Link>

      <div className="flex items-center gap-2 border px-3 py-2 rounded-md w-full sm:w-auto sm:flex-1 sm:max-w-md order-3 sm:order-2">
        <input
          type="text"
          placeholder="search..."
          className="border-0 w-full outline-none text-base sm:text-lg md:text-xl bg-transparent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Search
          className="cursor-pointer text-green-700 flex-shrink-0"
          size={20}
          onClick={() => {
            document.getElementById('news')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            fetchNewsWithQuery();
          }}
        />
      </div>

      <Button
        className="order-2 sm:order-3"
        variant={'ghost'}
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
      </Button>
    </nav>
  );
};

export default Navbar;
