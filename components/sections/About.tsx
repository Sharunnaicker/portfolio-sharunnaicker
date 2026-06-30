'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutData } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto">
      <SectionHeading number="01" title="About me" />

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <motion.div
          className="lg:col-span-2 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {aboutData.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {p}
            </p>
          ))}

          <div className="pt-4">
            <p className="text-sm font-mono mb-4" style={{ color: 'var(--text-primary)' }}>
              Technologies I work with:
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4">
              {aboutData.technologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-sm font-mono"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span style={{ color: 'var(--accent)' }}>▸</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div
            className="relative rounded-lg overflow-hidden w-full aspect-square"
            style={{ border: '1px solid var(--border)' }}
          >
            <Image
              src={aboutData.photo}
              alt="Sharun Naicker"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{ backgroundColor: 'var(--accent)' }}
            />
          </div>
          <div
            className="absolute -bottom-2 -right-2 w-full h-full rounded-lg -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            style={{ border: '1px solid var(--accent)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
