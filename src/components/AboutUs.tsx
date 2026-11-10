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
    <Section id="about" tone="dark" className="overflow-hidden">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[140px]" />

      <div className="relative grid grid-cols-1 gap-6 px-5 pb-10 pt-16 md:grid-cols-2 md:items-end md:px-8 md:pb-12 md:pt-24">
        <div>
          <Eyebrow className="mb-4">About Us</Eyebrow>
          <Heading title="Our mission, vision" muted="& story" tone="dark" />
        </div>
        <p className="max-w-[420px] text-[1.05rem] leading-relaxed text-white/65 md:justify-self-end">
          A technology partner built on craft, transparency, and long-term thinking.
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-4 px-5 pb-16 md:grid-cols-3 md:px-8 md:pb-24">
        {pillars.map((p, i) => (
          <FadeIn
            key={p.title}
            delay={i * 0.08}
            className={`flex flex-col rounded-3xl border p-7 backdrop-blur transition-colors duration-300 ${
              p.featured
                ? 'border-accent bg-accent shadow-[0_30px_70px_-30px_rgba(255,46,147,0.8)]'
                : 'border-white/10 bg-white/[0.04] hover:border-accent/60'
            }`}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-[1.5rem] font-medium tracking-[-0.02em] text-white">{p.title}</h3>
              <span className={`font-mono text-xs font-semibold ${p.featured ? 'text-white/80' : 'text-accent'}`}>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <p className="mb-4 text-[1.05rem] leading-relaxed text-white">{p.lead}</p>
            <p className={`text-[0.95rem] leading-relaxed ${p.featured ? 'text-white/85' : 'text-white/60'}`}>{p.body}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
