'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import SideBar from './_components/SideBar';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import News from './_components/News';
import { SidebarContext } from '@/Context/SidebarContext';
import { useState } from 'react';
import { CountryAndCategoryContext } from '@/Context/CountryAndCategoryContext';
import { NewsContext } from '@/Context/NewsContext';

export function Provider({ children, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NewsContext.Provider value={{ news, setNews }}>
        <CountryAndCategoryContext.Provider
          value={{ country, setCountry, category, setCategory }}
        >
          <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
            <Navbar />

            <SidebarProvider>
              <SideBar />
              <main>
                <SidebarTrigger className={'fixed top-0 z-50'} />
                <Hero />
                <News />
                {children}
              </main>
            </SidebarProvider>
          </SidebarContext.Provider>
        </CountryAndCategoryContext.Provider>
      </NewsContext.Provider>
    </NextThemesProvider>
  );
}
