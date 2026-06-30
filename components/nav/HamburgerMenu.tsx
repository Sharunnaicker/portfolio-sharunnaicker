'use client';

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { navItems, siteConfig } from '@/lib/constants';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.35 } },
  exit: { opacity: 0, y: -20, transition: { ease: 'easeIn', duration: 0.2 } },
};

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center"
          style={{ backgroundColor: 'var(--bg-primary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.97 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center gap-8"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                variants={itemVariants}
                onClick={() => handleNavClick(item.href)}
                className="group flex items-baseline gap-3 text-4xl sm:text-5xl font-bold"
                style={{ color: 'var(--text-primary)' }}
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <span className="text-sm font-mono" style={{ color: 'var(--accent)' }}>
                  {item.number}.
                </span>
                <span className="transition-colors duration-200 group-hover:text-[var(--accent)]">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </motion.nav>

          <motion.div
            className="absolute bottom-12 flex gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            {[
              { label: 'GitHub', href: siteConfig.github },
              { label: 'LinkedIn', href: siteConfig.linkedin },
              { label: 'Email', href: `mailto:${siteConfig.email}` },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)' }}
                className="text-xs font-mono tracking-widest uppercase transition-colors duration-200 hover:text-[var(--accent)]"
                onClick={onClose}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
