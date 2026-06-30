'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import TechTag from '@/components/ui/TechTag';
import { featuredProjects, otherProjects } from '@/lib/data';

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="transition-colors duration-200 hover:text-[var(--accent)]"
      style={{ color: 'var(--text-muted)' }}
    >
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto">
      <SectionHeading number="03" title="Things I've built" />

      {/* Featured Projects */}
      <div className="space-y-20 mb-24">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`flex flex-col ${i % 2 === 1 ? 'items-end text-right' : 'items-start'}`}>
              <p className="text-xs font-mono mb-2" style={{ color: 'var(--accent)' }}>
                Featured Project
              </p>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-(--accent) transition-colors duration-200"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <div
                className="relative z-10 p-6 rounded-lg mb-5 max-w-xl"
                style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}
              >
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
              </div>
              <div className={`flex flex-wrap gap-2 mb-4 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                {project.tech.map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </div>
              <div className={`flex gap-4 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                <IconLink href={project.github} label="GitHub">
                  <GitHubIcon />
                </IconLink>
                <IconLink href={project.external} label="Live site">
                  <ExternalIcon />
                </IconLink>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      <motion.h3
        className="text-center text-sm font-mono mb-10"
        style={{ color: 'var(--text-primary)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Other Noteworthy Projects
      </motion.h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map((project, i) => (
          <motion.div
            key={project.title}
            className="p-6 rounded-lg flex flex-col h-full transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex justify-between items-start mb-4">
              <span style={{ color: 'var(--accent)' }}>
                <FolderIcon />
              </span>
              <div className="flex gap-3">
                <IconLink href={project.github} label="GitHub">
                  <GitHubIcon />
                </IconLink>
                <IconLink href={project.external} label="Live site">
                  <ExternalIcon />
                </IconLink>
              </div>
            </div>
            <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h4>
            <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
