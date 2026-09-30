'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import { Section, Eyebrow, Heading, FadeIn } from '@/components/ui/Frame';
import GeometricShapes from '@/components/ui/GeometricShapes';
import { CONTACT_EMAIL } from '@/lib/constants';
import { Plus, Minus, MapPin, Clock, ArrowRight, Zap, Users, Globe, Rocket, Code2, ShieldCheck } from 'lucide-react';
import openingsData from './openings.json';

const openings = openingsData;

const values = [
  {
    icon: Rocket,
    title: 'Ship with Ambition',
    description: 'We set high bars and clear them. Every project is an opportunity to raise the standard of what great software looks like.',
  },
  {
    icon: Users,
    title: 'Team First',
    description: 'Brilliant individuals make great teams, and great teams make outstanding products. We invest in each other relentlessly.',
  },
  {
    icon: Globe,
    title: 'Remote Friendly',
    description: 'Talent is distributed worldwide. We support remote-friendly arrangements and build a culture that values outcomes over face-time.',
  },
  {
    icon: Zap,
    title: 'Move Fast Responsibly',
    description: 'Speed matters but so does quality and security. We shorten feedback loops without cutting corners.',
  },
  {
    icon: Code2,
    title: 'Craft Over Commodity',
    description: 'We are engineers and designers who care deeply about the work. We write code we are proud of and build products that matter.',
  },
  {
    icon: ShieldCheck,
    title: 'Radical Transparency',
    description: 'Open communication, honest feedback, and shared context make us stronger. No politics, no silos.',
  },
];

// Derive unique filter options from data
const allDepartments = ['All', ...Array.from(new Set(openingsData.map((j) => j.department)))];
const allTypes = ['All', ...Array.from(new Set(openingsData.map((j) => j.type)))];

export default function CareersPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deptFilter, setDeptFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredOpenings = openings.filter((job) => {
    const deptMatch = deptFilter === 'All' || job.department === deptFilter;
    const typeMatch = typeFilter === 'All' || job.type === typeFilter;
    return deptMatch && typeMatch;
  });

  const clearFilters = () => { setDeptFilter('All'); setTypeFilter('All'); setExpandedId(null); };

  const chip = (active: boolean) =>
    `px-3 py-1.5 text-[0.8rem] border transition-colors duration-200 ${
      active ? 'bg-ink text-white border-ink' : 'bg-surface border-line text-body hover:border-[#CCCCCC] hover:text-ink'
    }`;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <Section innerClassName="overflow-hidden">
        <div className="bg-diamond pointer-events-none absolute inset-x-0 bottom-0 h-1/2 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className="relative flex flex-col items-center px-5 pb-20 pt-16 text-center md:pb-24 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 border border-line bg-surface px-3 py-1.5 text-sm text-body"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#16A34A]" />
            We&apos;re hiring
          </motion.div>

          <Heading as="h1" size="xl" align="center" title="Build the future" muted="with us" />

          <motion.p
            className="mt-6 max-w-[640px] text-[1.05rem] leading-relaxed text-body"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            CommHawk Technologies Pvt. Ltd. is an elite team of engineers, designers, and strategists
            building digital products that define the next generation of technology.
            If you obsess over craft and love solving hard problems you belong here.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            <a href="#openings" className="btn-primary">
              See Open Roles <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* ── Stats strip ─────────────────────────────────────────── */}
      <Section>
        <div className="grid grid-cols-3 gap-px bg-line">
          {[
            { value: '✓', label: 'Remote friendly' },
            { value: openings.length > 0 ? openings.length : 'Soon', label: openings.length > 0 ? 'Open positions' : 'Hiring soon' },
            { value: '∞', label: 'Growth ceiling' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center bg-canvas px-3 py-10 md:py-12">
              <span className="font-display text-[2rem] font-medium tracking-[-0.04em] text-ink md:text-[3rem]">{stat.value}</span>
              <span className="mt-1 text-center text-xs text-body md:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Values ─────────────────────────────────────────────── */}
      <Section>
        <div className="grid grid-cols-1 gap-6 px-5 pb-14 pt-20 md:grid-cols-2 md:items-end md:px-8 md:pb-16 md:pt-28">
          <div>
            <Eyebrow className="mb-4">Culture</Eyebrow>
            <Heading title="How we" muted="work" />
          </div>
          <p className="max-w-[420px] text-[1.05rem] leading-relaxed text-body md:justify-self-end">
            The principles that shape how we build, collaborate, and grow together.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={(i % 3) * 0.08} className="bg-canvas px-5 py-10 md:px-8">
              <div className="mb-6 flex h-10 w-10 items-center justify-center border border-line bg-surface">
                <v.icon size={18} className="text-ink" strokeWidth={1.6} />
              </div>
              <h3 className="mb-3 font-display text-[1.25rem] font-medium tracking-[-0.02em] text-ink">{v.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-body">{v.description}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── Open Roles ─────────────────────────────────────────── */}
      <Section id="openings" innerClassName="px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow className="mb-4">Opportunities</Eyebrow>
            <Heading title="Open" muted="positions" />
            <p className="mt-6 max-w-[360px] text-[1.05rem] leading-relaxed text-body">
              Find a role that fits and apply directly by email.
            </p>

            {openings.length > 0 && (
              <div className="mt-10 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {allDepartments.map((dept) => (
                    <button key={dept} onClick={() => { setDeptFilter(dept); setExpandedId(null); }} className={chip(deptFilter === dept)}>
                      {dept}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTypes.map((type) => (
                    <button key={type} onClick={() => { setTypeFilter(type); setExpandedId(null); }} className={chip(typeFilter === type)}>
                      {type}
                    </button>
                  ))}
                </div>
                {(deptFilter !== 'All' || typeFilter !== 'All') && (
                  <button onClick={clearFilters} className="text-sm text-subtle transition-colors hover:text-ink">
                    Clear filters ×
                  </button>
                )}
              </div>
            )}
          </div>

          <div>
            {openings.length === 0 ? (
              <div className="flex flex-col items-center border border-line bg-surface px-6 py-16 text-center">
                <h3 className="mb-3 font-display text-[1.5rem] font-medium tracking-[-0.02em] text-ink">Hiring soon</h3>
                <p className="max-w-sm text-[0.95rem] leading-relaxed text-body">
                  We don&apos;t have any open roles right now, but we&apos;re always growing.
                  Send us your CV we&apos;d love to keep in touch.
                </p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary mt-8">
                  Get in Touch <ArrowRight size={13} />
                </a>
              </div>
            ) : filteredOpenings.length === 0 ? (
              <div className="flex flex-col items-center border border-line bg-surface px-6 py-14 text-center">
                <p className="mb-4 text-body">No roles match your filters</p>
                <button onClick={clearFilters} className="btn-secondary">Clear filters</button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {filteredOpenings.map((job, i) => {
                  const open = expandedId === job.id;
                  return (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      className={`border bg-surface transition-colors duration-300 ${open ? 'border-[#CCCCCC]' : 'border-line hover:border-[#CCCCCC]'}`}
                    >
                      <button
                        className="flex w-full items-start gap-4 px-5 py-6 text-left md:px-6"
                        onClick={() => toggle(job.id)}
                        aria-expanded={open}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-subtle">
                            <span>{job.department}</span>
                            <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                          </div>
                          <h3 className="font-display text-[1.3rem] font-medium tracking-[-0.02em] text-ink">{job.title}</h3>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {job.tags.map((tag) => (
                              <span key={tag} className="bg-line-soft px-2 py-0.5 text-xs text-body">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <span className="mt-1 text-ink">{open ? <Minus size={20} /> : <Plus size={20} />}</span>
                      </button>

                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            key="body"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-1 gap-8 border-t border-line px-5 pb-8 pt-6 md:grid-cols-2 md:px-6">
                              <div>
                                <p className="mb-6 text-[0.95rem] leading-relaxed text-body">{job.description}</p>
                                <h4 className="mb-3 text-sm font-medium text-ink">Responsibilities</h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((r) => (
                                    <li key={r} className="flex items-start gap-2.5 text-sm text-body">
                                      <span className="mt-2 h-1 w-1 flex-shrink-0 bg-ink" />
                                      {r}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="mb-3 text-sm font-medium text-ink">Requirements</h4>
                                <ul className="mb-8 space-y-2">
                                  {job.requirements.map((r) => (
                                    <li key={r} className="flex items-start gap-2.5 text-sm text-body">
                                      <span className="mt-2 h-1 w-1 flex-shrink-0 bg-ink" />
                                      {r}
                                    </li>
                                  ))}
                                </ul>
                                <a href={`mailto:${CONTACT_EMAIL}?subject=Application: ${job.title}`} className="btn-primary">
                                  Apply Now <ArrowRight size={13} />
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* ── Catch-all CTA ────────────────────────────────────────── */}
      <Section innerClassName="overflow-hidden">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="relative px-5 py-20 md:px-8 md:py-24">
            <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
            <Heading title="Don't see" muted="your role?" size="lg" className="relative" />
            <p className="relative mt-6 max-w-[420px] text-[1.05rem] leading-relaxed text-body">
              We are always on the lookout for exceptional talent. Send us a note
              about what you want to build, we read every message.
            </p>
            <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/#connect" className="btn-primary">
                Reach Out <ArrowRight size={14} />
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary">
                Email Your CV
              </a>
            </div>
          </div>
          <div className="hidden justify-center py-12 md:flex">
            <GeometricShapes className="h-[300px] w-[300px]" />
          </div>
        </div>
      </Section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
