import { Section, Eyebrow, Heading, FadeIn } from '@/components/ui/Frame';

const steps = [
    { title: 'Discover', body: 'We learn your business, users, and goals, then define scope, timeline, and success metrics.' },
    { title: 'Design', body: 'Wireframes and clickable prototypes so you see and shape the product before a line of code.' },
    { title: 'Build', body: 'Clean, scalable engineering in short cycles, with regular demos and full transparency.' },
    { title: 'Launch & Scale', body: 'Secure deployment, monitoring, and ongoing support as your product and traffic grow.' },
];

const Process = () => (
    <Section tone="dark" className="overflow-hidden" innerClassName="px-5 py-16 md:px-8 md:py-24">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent/25 blur-[150px]" />
        <div className="relative mb-10 md:mb-12">
            <Eyebrow className="mb-4">How we work</Eyebrow>
            <Heading title="From idea to" muted="live product" size="xl" tone="dark" />
        </div>
        <div className="relative grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-4">
            {steps.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.08} className="group bg-navy-deep p-7 transition-colors duration-300 hover:bg-navy md:p-8">
                    <span className="font-display text-[3rem] font-medium leading-none tracking-[-0.05em] text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mb-3 mt-6 font-display text-[1.5rem] font-medium tracking-[-0.02em] text-white">{s.title}</h3>
                    <p className="text-[0.95rem] leading-relaxed text-white/60">{s.body}</p>
                </FadeIn>
            ))}
        </div>
    </Section>
);

export default Process;
