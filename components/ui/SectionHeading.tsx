'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-sm font-mono" style={{ color: 'var(--accent)' }}>
        {number}.
      </span>
      <h2 className="text-2xl font-semibold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      <div className="h-px flex-1 max-w-xs" style={{ backgroundColor: 'var(--border)' }} />
    </motion.div>
  );
}
