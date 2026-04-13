'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BackgroundEffects from '@/components/BackgroundEffects';
import ScrollToTop from '@/components/ScrollToTop';
import { ChevronDown, MapPin, Clock, ArrowRight, Zap, Users, Globe, Rocket, Code2, ShieldCheck } from 'lucide-react';
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

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-[110px] sm:pt-[130px] md:pt-[150px] pb-16 md:pb-24 px-5 sm:px-8 md:px-[60px] flex flex-col items-center text-center">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] md:h-[400px] bg-neon/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-neon/30 rounded-full bg-neon/5 text-neon text-[0.65rem] sm:text-[0.7rem] tracking-[0.2em] uppercase mb-6 sm:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          We&apos;re Hiring
        </motion.div>

        <motion.h1
          className="text-[2.4rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] uppercase text-white mb-5 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Build the <span className="text-neon">Future</span>
          <br />
          With Us
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl md:max-w-2xl leading-relaxed mb-8 md:mb-10 px-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          CommHawk is an elite team of engineers, designers, and strategists
          building digital products that define the next generation of technology.
          If you obsess over craft and love solving hard problems you belong here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <a
            href="#openings"
            className="px-8 sm:px-10 py-3.5 sm:py-4 bg-neon text-black font-bold uppercase tracking-widest text-[0.7rem] sm:text-[0.75rem] rounded-full hover:bg-white transition-colors duration-300 inline-flex items-center gap-2"
          >
            See Open Roles <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-14 md:mt-20 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-xs sm:max-w-lg md:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          {[
            { value: '✓', label: 'Remote Friendly' },
            { value: openings.length > 0 ? openings.length : 'Soon', label: openings.length > 0 ? 'Open Positions' : 'Hiring Soon' },
            { value: '∞', label: 'Growth Ceiling' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon mb-1">{stat.value}</span>
              <span className="text-[0.55rem] sm:text-[0.65rem] md:text-[0.7rem] uppercase tracking-widest text-white/50 text-center">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Values ─────────────────────────────────────────────── */}
      <section className="relative border-t border-white/10 py-16 md:py-24 px-5 sm:px-8 md:px-[60px]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-[20%] w-[400px] h-[200px] bg-neon/10 blur-[100px] rounded-full" />
        </div>
        <div className="mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-neon text-xs uppercase tracking-[0.3em] block mb-3">Culture</span>
            <h2 className="text-2xl sm:text-3xl md:text-[2.8rem] font-bold uppercase tracking-tight text-white">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group border border-white/10 bg-gradient-to-br from-black via-[#0a0a0a] to-neutral-900/60 rounded-2xl p-5 md:p-7 hover:border-neon/40 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-neon/20 transition-colors duration-300">
                  <v.icon size={20} className="text-neon" />
                </div>
                <h3 className="text-white font-bold text-sm md:text-base uppercase tracking-wider mb-2 md:mb-3">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ─────────────────────────────────────────── */}
      <section id="openings" className="border-t border-white/10 py-16 md:py-24 px-5 sm:px-8 md:px-[60px]">
        <div className="mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-neon text-xs uppercase tracking-[0.3em] block mb-3">Opportunities</span>
            <h2 className="text-2xl sm:text-3xl md:text-[2.8rem] font-bold uppercase tracking-tight text-white">
              Open Positions
            </h2>
          </div>

          {openings.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center py-16 md:py-20 border border-white/10 rounded-2xl bg-gradient-to-br from-black via-[#0a0a0a] to-neutral-900/60 text-center px-6"
            >
              <div className="w-14 h-14 rounded-full border border-neon/30 bg-neon/5 flex items-center justify-center mb-6">
                <span className="w-3 h-3 rounded-full bg-neon animate-pulse" />
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-widest mb-3">Hiring Soon</h3>
              <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                We don&apos;t have any open roles right now, but we&apos;re always growing.
                Send us your CV we&apos;d love to keep in touch.
              </p>
              <a
                href="mailto:info@commhawk.in"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3 border border-neon/40 text-neon font-bold uppercase tracking-widest text-[0.7rem] rounded-full hover:bg-neon hover:text-black transition-all duration-300"
              >
                Get in Touch <ArrowRight size={13} />
              </a>
            </motion.div>
          ) : (
          <>
            {/* ── Filters ── */}
            <div className="flex flex-col gap-3 mb-6 md:mb-8">
              {/* Department + Type filters row */}
              <div className="flex flex-wrap gap-2">
                {allDepartments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => { setDeptFilter(dept); setExpandedId(null); }}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-[0.6rem] sm:text-[0.65rem] uppercase tracking-widest font-semibold border transition-all duration-200 ${
                      deptFilter === dept
                        ? 'bg-neon text-black border-neon'
                        : 'border-white/15 text-white/50 hover:border-neon/40 hover:text-neon'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
                {/* Inline separator */}
                <span className="w-[1px] self-stretch bg-white/10 mx-1 hidden sm:block" />
                {allTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => { setTypeFilter(type); setExpandedId(null); }}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-[0.6rem] sm:text-[0.65rem] uppercase tracking-widest font-semibold border transition-all duration-200 ${
                      typeFilter === type
                        ? 'bg-white/10 text-white border-white/30'
                        : 'border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Clear filters */}
              {(deptFilter !== 'All' || typeFilter !== 'All') && (
                <button
                  onClick={() => { setDeptFilter('All'); setTypeFilter('All'); setExpandedId(null); }}
                  className="self-start text-[0.6rem] sm:text-[0.65rem] uppercase tracking-widest text-white/30 hover:text-neon transition-colors"
                >
                  Clear filters ×
                </button>
              )}
            </div>

            {/* ── Job list or no-match state ── */}
            {filteredOpenings.length === 0 ? (
              <motion.div
                key="no-match"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-14 border border-white/10 rounded-2xl text-center px-6"
              >
                <p className="text-white/40 text-sm uppercase tracking-widest mb-4">No roles match your filters</p>
                <button
                  onClick={() => { setDeptFilter('All'); setTypeFilter('All'); }}
                  className="text-[0.65rem] uppercase tracking-widest text-neon hover:text-white transition-colors"
                >
                  Clear filters
                </button>
              </motion.div>
            ) : (
            <div className="flex flex-col gap-3 md:gap-4">
              {filteredOpenings.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    expandedId === job.id
                      ? 'border-neon/50 bg-gradient-to-br from-neon/5 via-black to-black'
                      : 'border-white/10 bg-gradient-to-br from-black via-[#0a0a0a] to-neutral-900/60 hover:border-white/20'
                  }`}
                >
                  {/* Row header */}
                  <button
                    className="w-full text-left px-4 sm:px-6 md:px-8 py-5 md:py-6 flex items-start sm:items-center gap-3 sm:gap-4"
                    onClick={() => toggle(job.id)}
                    aria-expanded={expandedId === job.id}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                        <span className="text-[0.6rem] sm:text-[0.65rem] text-neon uppercase tracking-[0.25em] font-semibold">
                          {job.department}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="flex items-center gap-1 text-[0.6rem] sm:text-[0.65rem] text-white/50 uppercase tracking-widest">
                          <MapPin size={9} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-[0.6rem] sm:text-[0.65rem] text-white/50 uppercase tracking-widest">
                          <Clock size={9} /> {job.type}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-base sm:text-lg md:text-xl tracking-tight">{job.title}</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 sm:px-2.5 py-0.5 rounded-full text-[0.55rem] sm:text-[0.6rem] uppercase tracking-wider border border-white/10 text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-neon flex-shrink-0 mt-0.5"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  {/* Expanded body */}
                  <AnimatePresence initial={false}>
                    {expandedId === job.id && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8 border-t border-white/10 pt-5 md:pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                          <div>
                            <p className="text-white/70 text-sm leading-relaxed mb-5 md:mb-6">{job.description}</p>
                            <h4 className="text-neon text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.25em] font-semibold mb-3">
                              Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((r) => (
                                <li key={r} className="flex items-start gap-2 text-white/70 text-sm">
                                  <span className="mt-1.5 w-1 h-1 rounded-full bg-neon flex-shrink-0" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-neon text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.25em] font-semibold mb-3">
                              Requirements
                            </h4>
                            <ul className="space-y-2 mb-6 md:mb-8">
                              {job.requirements.map((r) => (
                                <li key={r} className="flex items-start gap-2 text-white/70 text-sm">
                                  <span className="mt-1.5 w-1 h-1 rounded-full bg-neon flex-shrink-0" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                            <a
                              href={`mailto:info@commhawk.in?subject=Application: ${job.title}`}
                              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-neon text-black font-bold uppercase tracking-widest text-[0.65rem] sm:text-[0.7rem] rounded-full hover:bg-white transition-colors duration-300"
                            >
                              Apply Now <ArrowRight size={13} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            )}
          </>
          )}
        </div>
      </section>

      {/* ── Catch-all CTA ────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-16 md:py-24 px-5 sm:px-8 md:px-[60px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[200px] md:h-[300px] bg-neon/10 blur-[100px] rounded-full" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-[2.8rem] font-bold uppercase tracking-tight text-white mb-4 md:mb-5">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
            We are always on the lookout for exceptional talent. Send us a note
            about what you want to build, we read every message.
          </p>
          <a
            href="/#connect"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 border border-neon/40 text-neon font-bold uppercase tracking-widest text-[0.7rem] sm:text-[0.75rem] rounded-full hover:bg-neon hover:text-black transition-all duration-300"
          >
            Reach Out <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ── Footer strip ─────────────────────────────────────────── */}
      <footer className="border-t border-white/10 py-6 md:py-8 px-5 sm:px-8 md:px-[60px] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <Link href="/" className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/40 hover:text-neon transition-colors">
          ← Back to Home
        </Link>
        <p className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.3em] text-white/25">
          © {new Date().getFullYear()} CommHawk. All rights reserved.
        </p>
      </footer>
      <ScrollToTop />
    </main>
  );
}
