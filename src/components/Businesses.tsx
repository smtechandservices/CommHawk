'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Section, Eyebrow, Heading } from '@/components/ui/Frame';

const projects = [
    {
        id: 'kaamlee',
        title: 'Kaamlee',
        subtitle: 'Digital Solution',
        category: 'IT Projects',
        description: 'Custom digital solution built for businesses looking to launch and scale.',
        image: '/kaamlee.png',
        link: 'https://kaamlee.in/',
    },
    {
        id: 'befin',
        title: 'BeFin',
        subtitle: 'Financial Literacy',
        category: 'Fintech',
        description: 'Gamified platform helping every generation grow smarter with money and achieve financial independence.',
        image: '/befin.webp',
        link: 'https://thebefin.com/',
    },
    {
        id: 'maytri-erp',
        title: 'Maytri ERP',
        subtitle: 'Enterprise Solutions',
        category: 'IT Projects',
        description: 'Industrial-grade ERP system for comprehensive resource planning and management.',
        image: '/erp.png',
        link: 'https://maytri.netlify.app/',
    },
    {
        id: 'mrflyb2b',
        title: 'MrFlyB2B',
        subtitle: 'Ticketing Platform',
        category: 'IT Projects',
        description: 'Next-generation travel and booking platform designed for seamless customer experiences.',
        image: '/tripnroll.png',
        link: 'https://mrflyb2b.com/',
    },
    {
        id: 'bihar-sahu-sabha',
        title: 'Bihar Sahu Sabha',
        subtitle: 'Community Platform',
        category: 'IT Projects',
        description: 'Digital platform developed to connect, engage, and empower members of the Bihar Sahu community.',
        image: '/bihar-sahu-sabha.png',
        link: 'https://www.bihartailiksahusabha.com/',
    },
];

const themes = [
    { card: 'bg-navy', text: 'text-white', sub: 'text-white/65', chip: 'bg-accent text-white' },
    { card: 'bg-accent-soft', text: 'text-ink', sub: 'text-body', chip: 'bg-navy text-white' },
    { card: 'bg-[#E6EDFA]', text: 'text-ink', sub: 'text-body', chip: 'bg-navy text-white' },
];

type Project = (typeof projects)[number];

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
    const t = themes[index % themes.length];
    const flip = index % 2 === 1;

    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`group grid grid-cols-1 items-center gap-8 rounded-[1.5rem] p-4 md:gap-10 md:rounded-[2rem] md:p-8 lg:grid-cols-12 ${t.card}`}
        >
            <div className={`relative overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-30px_rgba(10,31,68,0.6)] lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[16/9.5]">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 700px, 100vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                </div>
            </div>

            <div className={`flex flex-col lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
                <div className="mb-4 flex items-center gap-3">
                    <span className={`font-display text-sm font-semibold ${t.sub}`}>{String(index + 1).padStart(2, '0')}</span>
                    <span className={`rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] ${t.chip}`}>{project.category}</span>
                </div>
                <h3 className={`font-display text-[2rem] font-medium leading-[1.05] tracking-[-0.04em] md:text-[2.6rem] ${t.text}`}>{project.title}</h3>
                <p className="mt-2 text-sm font-semibold text-accent">{project.subtitle}</p>
                <p className={`mt-4 max-w-[420px] text-[1rem] leading-relaxed ${t.sub}`}>{project.description}</p>
                <span className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${t.text}`}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                        <ArrowUpRight size={18} />
                    </span>
                    View live project
                </span>
            </div>
        </motion.a>
    );
};

const Businesses = () => {
    return (
        <Section id="businesses" tone="tint" innerClassName="px-5 py-16 md:px-8 md:py-24">
            <div className="mb-10 grid grid-cols-1 items-end gap-5 md:mb-14 md:grid-cols-12">
                <div className="md:col-span-8">
                    <Eyebrow className="mb-4">Selected work</Eyebrow>
                    <Heading title="Impactful creations" muted="shipped for real businesses" size="xl" />
                </div>
                <p className="text-[1.05rem] leading-relaxed text-body md:col-span-4">
                    Products we have designed, engineered, and launched across fintech, enterprise,
                    travel, and community platforms.
                </p>
            </div>

            <div className="flex flex-col gap-5">
                {projects.map((project, idx) => (
                    <ProjectRow key={project.id} project={project} index={idx} />
                ))}
            </div>
        </Section>
    );
};

export default Businesses;
