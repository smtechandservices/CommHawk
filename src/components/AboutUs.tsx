import { Section, Eyebrow, Heading, FadeIn } from '@/components/ui/Frame';

const pillars = [
  {
    title: 'Mission',
    lead: 'Empower ambitious businesses with innovative technology solutions designed for scale, impact, and exceptional user experience.',
    body: 'We are dedicated to solving real problems with creativity, collaboration, and measurable results.',
  },
  {
    title: 'Who We Are',
    lead: 'We are a collective of passionate strategists, designers, and engineers.',
    body: 'Collaboration, purpose, and trust are at the heart of every project engagement. From entrepreneurial startups to global enterprises, we are shaping the future together.',
    featured: true,
  },
  {
    title: 'Vision',
    lead: 'To lead digital transformation for tomorrow’s enterprises using modern technology, design thinking, and relentless innovation.',
    body: 'Creating benchmarks for quality, transparency, and genuine impact.',
  },
];

export default function AboutUs() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-6 px-5 pb-14 pt-20 md:grid-cols-2 md:items-end md:px-8 md:pb-16 md:pt-28">
        <div>
          <Eyebrow className="mb-4">About Us</Eyebrow>
          <Heading title="Our mission, vision" muted="& story" />
        </div>
        <p className="max-w-[420px] text-[1.05rem] leading-relaxed text-body md:justify-self-end">
          A technology partner built on craft, transparency, and long-term thinking.
        </p>
      </div>

      <div className="grid grid-cols-1 border-t border-line md:grid-cols-3">
        {pillars.map((p, i) => (
          <FadeIn
            key={p.title}
            delay={i * 0.08}
            className={`flex flex-col px-5 py-10 md:px-8 md:py-12 ${i < 2 ? 'border-b border-line md:border-b-0 md:border-r' : ''} ${p.featured ? 'bg-surface' : ''}`}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-[1.35rem] font-medium tracking-[-0.02em] text-ink">{p.title}</h3>
              <span className="font-mono text-[0.7rem] text-subtle">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <p className="mb-4 text-[1.05rem] leading-relaxed text-ink">{p.lead}</p>
            <p className="text-[0.95rem] leading-relaxed text-body">{p.body}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
