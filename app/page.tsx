'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/loader/Loader';
import Navbar from '@/components/nav/Navbar';
import HamburgerMenu from '@/components/nav/HamburgerMenu';
import { LeftSidebar, RightSidebar } from '@/components/ui/SocialSidebar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const ShapesCanvas = dynamic(() => import('@/components/background/ShapesCanvas'), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoadComplete = useCallback(() => setIsLoading(false), []);

  return (
    <>
      {/* Loading overlay */}
      <Loader onComplete={handleLoadComplete} />

      {/* Three.js background — always mounted so shapes are ready when loader fades */}
      <ShapesCanvas isMenuOpen={isMenuOpen} />

      {/* Nav + sidebars appear after loader */}
      {!isLoading && (
        <>
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setIsMenuOpen((v) => !v)}
          />
          <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          <LeftSidebar />
          <RightSidebar />
        </>
      )}

      {/* Skip-to-content */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-mono"
        style={{ backgroundColor: 'var(--accent)', color: 'white' }}
      >
        Skip to content
      </a>

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer
        className="relative z-10 py-8 text-center"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
          Designed &amp; built by Sharun
        </p>
        <p className="text-xs font-mono mt-1" style={{ color: 'var(--text-muted)' }}>
          Built with Next.js &amp; Three.js
        </p>
      </footer>
    </>
  );
}
