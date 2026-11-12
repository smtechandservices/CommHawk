'use client';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Handshake, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Section, Eyebrow, Heading, FadeIn } from '@/components/ui/Frame';
import mou from '@/data/mou.json';

const { partners, colleges } = mou;

export default function MouPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? colleges.filter((c) => c.name.toLowerCase().includes(q)) : colleges;
  }, [query]);

  return (
    <main className="min-h-screen">
      <Navbar />

      <Section innerClassName="overflow-hidden">
        <div className="relative flex flex-col items-center px-5 pb-16 pt-16 text-center md:pb-20 md:pt-24">
          <Heading as="h1" size="xl" align="center" title="Our MOU" muted="partners" />
          <motion.p
            className="mt-6 max-w-[640px] text-[1.05rem] leading-relaxed text-body"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            CommHawk Technologies Pvt. Ltd. partners with universities, institutes and engineering
            colleges across Bihar to bring industry training, internships and real projects to students.
          </motion.p>
          <div className="mt-10 flex gap-10 text-center">
            <div>
              <div className="font-display text-[2.4rem] font-medium text-ink">{partners.length + colleges.length}</div>
              <div className="text-sm text-body">MOU partners</div>
            </div>
            <div>
              <div className="font-display text-[2.4rem] font-medium text-ink">{colleges.length}</div>
              <div className="text-sm text-body">Engineering colleges</div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <div className="px-5 py-16 md:px-8 md:py-20">
          <Eyebrow className="mb-4">Institutional partners</Eyebrow>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {partners.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <Handshake size={22} className="text-accent" />
                  <h3 className="mt-4 font-display text-[1.2rem] font-medium text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-body">{p.type} · {p.city}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow className="mb-4">Engineering colleges</Eyebrow>
              <Heading title="Colleges across" muted="Bihar" />
            </div>
            <label className="relative block w-full md:w-80">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-subtle" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search college or city"
                aria-label="Search colleges"
                className="w-full rounded-xl border border-line bg-canvas py-3 pl-10 pr-4 text-[0.95rem] text-ink outline-none focus:border-accent focus:ring-4 focus:ring-accent/10"
              />
            </label>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <li key={c.name} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4">
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-[0.95rem] font-medium leading-snug text-ink">{c.name.slice(0, c.name.length - c.city.length - 2)}</p>
                  <p className="mt-0.5 text-sm text-body">{c.city}</p>
                </div>
              </li>
            ))}
          </ul>
          {filtered.length === 0 && <p className="mt-10 text-body">No colleges match &ldquo;{query}&rdquo;.</p>}

          <div className="mt-14 text-center">
            <Link href="/#connect" className="btn-primary">Partner with us <ArrowRight size={14} /></Link>
          </div>
        </div>
      </Section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
