'use client';

import { motion, type Variants } from 'framer-motion';
import { heroData } from '@/lib/data';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

interface HeroProps {
  onNameHover?: (hovered: boolean) => void;
}

export default function Hero({ onNameHover }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-12 max-w-5xl mx-auto"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full pt-16"
      >
        <motion.p variants={item} className="font-mono text-sm mb-5" style={{ color: 'var(--accent)' }}>
          {heroData.greeting}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 cursor-default leading-tight"
          style={{ color: 'var(--text-primary)' }}
          onMouseEnter={() => onNameHover?.(true)}
          onMouseLeave={() => onNameHover?.(false)}
        >
          {heroData.name}
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 max-w-2xl leading-snug"
          style={{ color: 'var(--text-secondary)' }}
        >
          {heroData.tagline}
        </motion.h2>

        <motion.p
          variants={item}
          className="text-base leading-relaxed mb-10 max-w-md"
          style={{ color: 'var(--text-secondary)' }}
        >
          {heroData.description}
        </motion.p>

        <motion.div variants={item}>
          <a
            href={heroData.cta.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded font-mono text-sm transition-colors duration-300"
            style={{ color: 'var(--accent)', border: '1px solid var(--accent)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                'color-mix(in srgb, var(--accent) 12%, transparent)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            }}
          >
            {heroData.cta.text}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
