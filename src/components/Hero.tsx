'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Check } from 'lucide-react';
import { Section, Heading } from '@/components/ui/Frame';
import { GOOGLE_CALENDAR_LINK } from '@/lib/constants';

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
    return (
        <Section innerClassName="overflow-hidden">
            <div className="flex flex-col items-center px-5 pt-16 text-center md:pt-24">
                <Heading
                    as="h1"
                    size="xl"
                    align="center"
                    title="Engineering digital excellence"
                    className="max-w-[860px]"
                />

                <motion.p
                    className="mt-6 max-w-[640px] text-[1.05rem] leading-relaxed text-body"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease }}
                >
                    CommHawk Technologies Pvt. Ltd. is a premier technology partner specializing in high-performance
                    digital products. We help ambitious companies scale through cutting-edge
                    development and innovative AI solutions.
                </motion.p>

                <motion.div
                    className="mt-10 flex flex-col gap-3 sm:flex-row"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.7, ease }}
                >
                    <Link href="#connect" className="btn-primary">
                        Start Your Project
                    </Link>
                    <a href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <Calendar size={15} />
                        Schedule a Call
                    </a>
                </motion.div>
            </div>

            {/* Showcase visual */}
            <div className="relative mt-14 px-5 pb-16 md:mt-20 md:px-16 md:pb-24">
                <div className="bg-diamond mask-fade-b pointer-events-none absolute inset-0" />

                <motion.div
                    className="relative mx-auto max-w-[920px] border border-line bg-surface p-2 shadow-[0_30px_80px_-40px_rgba(26,26,26,0.35)]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 1, ease }}
                >
                    <div className="flex items-center gap-1.5 border-b border-line px-2 pb-2">
                        {[0, 1, 2].map((i) => (
                            <span key={i} className="h-2 w-2 rounded-full border border-subtle/60" />
                        ))}
                    </div>
                    <div className="relative mt-2 aspect-[3/2] overflow-hidden">
                        <Image
                            src="/hero-workstation.jpeg"
                            alt="CommHawk Technologies Pvt. Ltd. engineering workstation"
                            fill
                            priority
                            sizes="(min-width: 1024px) 920px, 100vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Floating status cards */}
                    <motion.div
                        className="absolute -left-2 top-[18%] hidden border border-line bg-surface px-4 py-3 text-left shadow-[0_12px_30px_-12px_rgba(26,26,26,0.25)] sm:block md:-left-12"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                        transition={{ opacity: { delay: 1.1 }, x: { delay: 1.1, duration: 0.6 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#16A34A] text-white">
                                <Check size={14} strokeWidth={3} />
                            </span>
                            <div>
                                <p className="font-display text-sm font-medium text-ink">Deployed</p>
                                <p className="text-xs text-body">Production build shipped</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute -right-2 bottom-[14%] hidden border border-line bg-surface px-4 py-3 text-left shadow-[0_12px_30px_-12px_rgba(26,26,26,0.25)] sm:block md:-right-12"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
                        transition={{ opacity: { delay: 1.3 }, x: { delay: 1.3, duration: 0.6 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
                    >
                        <p className="text-xs text-body">CI pipeline</p>
                        <p className="font-display text-lg font-medium tracking-[-0.02em] text-ink">All checks passed</p>
                        <div className="mt-2 flex items-end gap-[3px]">
                            {[6, 10, 8, 14, 12, 16, 18].map((h, i) => (
                                <span key={i} className="w-[5px] bg-ink" style={{ height: h, opacity: 0.25 + i * 0.1 }} />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
