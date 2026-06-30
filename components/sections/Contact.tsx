'use client';

import { motion } from 'framer-motion';
import { contactData } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm mb-4" style={{ color: 'var(--accent)' }}>
          04. // What&apos;s next?
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
          {contactData.heading}
        </h2>
        <p className="leading-relaxed mb-10 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {contactData.description}
        </p>
        <a
          href={contactData.cta.href}
          className="inline-flex items-center gap-2 px-8 py-4 rounded font-mono text-sm transition-colors duration-300"
          style={{ color: 'var(--accent)', border: '1px solid var(--accent)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor =
              'color-mix(in srgb, var(--accent) 12%, transparent)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
          }}
        >
          {contactData.cta.text} →
        </a>
      </motion.div>
    </section>
  );
}
