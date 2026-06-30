'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { experienceData } from '@/lib/data';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const active = experienceData[activeTab];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto">
      <SectionHeading number="02" title="Where I've worked" />

      <div className="flex flex-col lg:flex-row gap-0 lg:gap-8">
        {/* Tab list */}
        <div
          className="flex lg:flex-col overflow-x-auto lg:overflow-visible shrink-0 border-b lg:border-b-0 lg:border-l"
          style={{ borderColor: 'var(--border)' }}
        >
          {experienceData.map((exp, i) => (
            <button
              key={`${exp.company}-${exp.role}`}
              onClick={() => setActiveTab(i)}
              className="relative px-5 py-3 text-sm font-mono whitespace-nowrap text-left transition-colors duration-200"
              style={{
                color: activeTab === i ? 'var(--accent)' : 'var(--text-muted)',
                backgroundColor:
                  activeTab === i ? 'color-mix(in srgb, var(--accent) 8%, transparent)' : 'transparent',
              }}
            >
              {activeTab === i && (
                <motion.div
                  layoutId="tab-bar"
                  className="absolute left-0 top-0 bottom-0 w-0.5 hidden lg:block"
                  style={{ backgroundColor: 'var(--accent)' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pt-6 lg:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                {active.role}{' '}
                <span style={{ color: 'var(--accent)' }}>@ {active.company}</span>
              </h3>
              <p className="text-sm font-mono mb-6" style={{ color: 'var(--text-muted)' }}>
                {active.startDate} — {active.endDate}
              </p>
              <ul className="space-y-3">
                {active.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }}>▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
