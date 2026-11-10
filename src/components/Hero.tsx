'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { Section, Heading } from '@/components/ui/Frame';
import { GOOGLE_CALENDAR_LINK } from '@/lib/constants';

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
    { value: '5+', label: 'Products shipped' },
    { value: '4', label: 'Official recognitions' },
    { value: '3', label: 'Core practices' },
    { value: '13', label: 'Service lines' },
];

const Hero = () => {
    return (
        <Section tone="light" className="overflow-hidden" innerClassName="px-5 pt-10 pb-12 md:px-8 md:pt-14 md:pb-16">
            <div className="pointer-events-none absolute -right-48 -top-48 h-[560px] w-[560px] rounded-full bg-accent/15 blur-[140px]" />

            <motion.span
                className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-body shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
            >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Patna, Bihar · Startup India recognised
            </motion.span>

            <div className="relative flex flex-col gap-7">
                <Heading
                    as="h1"
                    size="2xl"
                    title="We build digital products"
                    muted="that grow businesses."
                />

                <motion.div
                    className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7, ease }}
                >
                    <p className="max-w-[560px] text-[1.05rem] leading-relaxed text-body">
                        CommHawk Technologies is a technology partner for ambitious companies. We design,
                        engineer, and launch high-performance web, mobile, and AI products.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link href="#connect" className="btn-primary">
                            Start Your Project
                            <ArrowUpRight size={16} />
                        </Link>
                        <a href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                            <Calendar size={15} />
                            Schedule a Call
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Showcase */}
            <motion.div
                className="relative mt-10 md:mt-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease }}
            >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-navy sm:aspect-[16/8] md:aspect-[21/9] md:rounded-[2rem]">
                    <Image
                        src="/hero-workstation.jpeg"
                        alt="CommHawk engineering workstation"
                        fill
                        priority
                        sizes="(min-width: 1240px) 1240px, 100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
                </div>

                {[
                    { src: '/kaamlee.png', alt: 'Kaamlee', pos: 'left-6 bottom-6 md:left-10 md:bottom-8', rot: '-rotate-3', anim: 'animate-float' },
                    { src: '/befin.webp', alt: 'BeFin', pos: 'right-6 bottom-6 md:right-10 md:bottom-8', rot: 'rotate-3', anim: 'animate-float-alt' },
                ].map((c) => (
                    <div key={c.alt} className={`absolute ${c.pos} hidden w-[26%] max-w-[240px] sm:block ${c.anim}`}>
                        <div className={`${c.rot} overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_30px_60px_-20px_rgba(10,31,68,0.55)]`}>
                            <div className="relative aspect-[4/3]">
                                <Image src={c.src} alt={c.alt} fill sizes="300px" className="object-cover object-top" />
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            <dl className="mt-10 grid grid-cols-2 border-t-2 border-navy md:mt-12 md:grid-cols-4">
                {stats.map((s, i) => (
                    <div key={s.label} className={`py-6 md:px-6 ${i > 0 ? 'md:border-l md:border-line' : ''} ${i === 0 ? 'md:pl-0' : ''}`}>
                        <dt className="font-display text-[2.4rem] font-medium leading-none tracking-[-0.04em] text-ink md:text-[3rem]">{s.value}</dt>
                        <dd className="mt-2 text-sm text-body">{s.label}</dd>
                    </div>
                ))}
            </dl>
        </Section>
    );
};

export default Hero;
