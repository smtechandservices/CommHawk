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
        description:
            'Custom digital solution built for businesses looking to launch and scale.',
        image: '/kaamlee.png',
        link: 'https://kaamlee.in/',
    },
    {
        id: 'befin',
        title: 'BeFin',
        subtitle: 'Financial Literacy',
        category: 'Fintech',
        description:
            'Gamified platform helping every generation grow smarter with money and achieve financial independence.',
        image: '/befin.webp',
        link: 'https://thebefin.com/',
    },

    {
        id: 'maytri-erp',
        title: 'Maytri ERP',
        subtitle: 'Enterprise Solutions',
        category: 'IT Projects',
        description:
            'Industrial-grade ERP system for comprehensive resource planning and management.',
        image: '/erp.png',
        link: 'https://maytri.netlify.app/',
    },

    {
        id: 'mrflyb2b',
        title: 'MrFlyB2B',
        subtitle: 'Ticketing Platform',
        category: 'IT Projects',
        description:
            'Next-generation travel and booking platform designed for seamless customer experiences.',
        image: '/tripnroll.png',
        link: 'https://mrflyb2b.com/',
    },

    {
        id: 'bihar-sahu-sabha',
        title: 'Bihar Sahu Sabha',
        subtitle: 'Community Platform',
        category: 'IT Projects',
        description:
            'Digital platform developed to connect, engage, and empower members of the Bihar Sahu community.',
        image: '/bihar-sahu-sabha.png',
        link: 'https://www.bihartailiksahusabha.com/',
    },
];

type Project = (typeof projects)[number];

const ProjectCard = ({ project, index, wide }: { project: Project; index: number; wide: boolean }) => {
    const hasLink = project.link !== '#';
    const Wrapper = hasLink ? 'a' : 'div';

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={wide ? 'lg:col-span-3' : 'lg:col-span-2'}
        >
            <Wrapper
                {...(hasLink ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex h-full flex-col border border-line bg-surface transition-colors duration-300 hover:border-[#CCCCCC]"
            >
                <div className="bg-grid relative overflow-hidden border-b border-line px-6 pt-6 sm:px-8 sm:pt-8">
                    <span className="absolute left-4 top-4 z-10 bg-line-soft px-2 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-ink">
                        {project.category}
                    </span>
                    {hasLink && (
                        <span className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center border border-line bg-surface text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            <ArrowUpRight size={15} />
                        </span>
                    )}
                    <div className={`relative mx-auto mt-6 overflow-hidden border border-b-0 border-line bg-surface shadow-[0_20px_40px_-24px_rgba(26,26,26,0.35)] transition-transform duration-500 group-hover:-translate-y-1 ${wide ? 'aspect-[16/8]' : 'aspect-[4/3]'}`}>
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                            className="object-cover object-top"
                        />
                    </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-[1.35rem] font-medium tracking-[-0.02em] text-ink">{project.title}</h3>
                        <span className="text-sm text-subtle">{project.subtitle}</span>
                    </div>
                    <p className="text-[0.95rem] leading-relaxed text-body">{project.description}</p>
                </div>
            </Wrapper>
        </motion.div>
    );
};

const Businesses = () => {
    return (
        <Section id="businesses" innerClassName="px-5 py-20 md:px-8 md:py-28">
            <div className="mb-14 text-center md:mb-16">
                <Eyebrow className="mb-4">Portfolio</Eyebrow>
                <Heading title="Impactful creations" muted="shipped for real businesses" align="center" />
                <p className="mx-auto mt-6 max-w-[600px] text-[1.05rem] leading-relaxed text-body">
                    Products we have designed, engineered, and launched across fintech, enterprise,
                    travel, and community platforms.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-6">
                {projects.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} index={idx} wide={idx < 2} />
                ))}
            </div>
        </Section>
    );
};

export default Businesses;
