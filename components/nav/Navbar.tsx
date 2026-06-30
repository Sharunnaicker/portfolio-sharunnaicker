"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/lib/constants";

interface NavbarProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function Navbar({ isMenuOpen, onMenuToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      setVisible(current < lastScrollY || current < 50);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div
        className="flex items-center justify-between h-16 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--bg-primary) 85%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="Scroll to top"
        >
          <svg width="18" height="26" viewBox="0 0 60 80" fill="none">
            <path
              d="M46 14 C46 14, 14 11, 14 28 C14 45, 46 41, 46 58 C46 74, 14 70, 14 70"
              stroke="var(--accent)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span
            className="text-xs font-mono tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            sharun naicker
          </span>
        </button>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden sm:inline-flex transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden sm:inline-flex transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            download="Sharun-Naicker-Resume.pdf"
            className="hidden sm:inline-flex items-center px-4 py-1.5 text-sm font-mono rounded transition-colors duration-200"
            style={{
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--accent) 10%, transparent)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Download Resume
          </a>
          <ThemeToggle />
          <button
            onClick={onMenuToggle}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5 ml-1"
          >
            <motion.span
              className="w-5 h-px block rounded-full"
              style={{ backgroundColor: "var(--text-primary)" }}
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="w-5 h-px block rounded-full"
              style={{ backgroundColor: "var(--text-primary)" }}
              animate={
                isMenuOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="w-5 h-px block rounded-full"
              style={{ backgroundColor: "var(--text-primary)" }}
              animate={
                isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
