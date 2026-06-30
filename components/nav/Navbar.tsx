"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";

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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-1.5 text-sm font-mono rounded transition-colors duration-200"
            style={{
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--accent) 10%, transparent)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Resume
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
