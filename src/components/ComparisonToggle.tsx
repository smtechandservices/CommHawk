'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, Eyebrow, Heading } from '@/components/ui/Frame';

const NODES = [
    { label: 'System Audit', x: 150, y: 90 },
    { label: 'Infrastructure as Code', x: 150, y: 260 },
    { label: 'Data Stream Aggregation', x: 150, y: 430 },
    { label: 'Autonomous Scaling', x: 850, y: 90 },
    { label: 'Predictive Maintenance', x: 850, y: 260 },
    { label: 'Edge Deployment', x: 850, y: 430 },
];

const CENTER = { x: 500, y: 260 };
const VIEW = { w: 1000, h: 520 };

// Elbow connector from a node's inner edge to the hub.
const pathFor = (n: { x: number; y: number }) => {
    const left = n.x < CENTER.x;
    const startX = left ? n.x + 110 : n.x - 110;
    const hubX = left ? CENTER.x - 90 : CENTER.x + 90;
    const midX = left ? startX + 70 : startX - 70;
    return `M ${startX} ${n.y} H ${midX} V ${CENTER.y} H ${hubX}`;
};

const HubTile = ({ size }: { size: string }) => (
    <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className={`relative flex items-center justify-center border border-ink bg-surface shadow-[0_8px_0_0_#1A1A1A] ${size}`}
    >
        <div className="relative h-[56%] w-[56%]">
            <Image src="/logo-mark.png" alt="CommHawk Technologies Pvt. Ltd. logo" fill sizes="120px" className="object-contain" />
        </div>
    </motion.div>
);

const ComparisonToggle = () => {
    return (
        <Section innerClassName="px-5 py-20 md:px-8 md:py-28">
            <div className="mb-14 text-center md:mb-16">
                <Eyebrow className="mb-4">The Engineering Evolution</Eyebrow>
                <Heading title="CommHawk Technologies Pvt. Ltd." muted="Synapse" align="center" />
            </div>

            {/* Desktop diagram */}
            <div className="relative mx-auto hidden aspect-[1000/520] w-full max-w-[1000px] md:block">
                <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
                <svg viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
                    {NODES.map((n, i) => {
                        const d = pathFor(n);
                        return (
                            <g key={n.label}>
                                <motion.path
                                    d={d}
                                    fill="none"
                                    stroke="#C4C4C4"
                                    strokeWidth="1.2"
                                    strokeDasharray="4 6"
                                    className="animate-dash"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                                />
                                <motion.circle
                                    r="3.5"
                                    fill="#1A1A1A"
                                    style={{ offsetPath: `path("${d}")` }}
                                    animate={{ offsetDistance: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                                    transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', delay: 1 + i * 0.45 }}
                                />
                            </g>
                        );
                    })}
                </svg>

                <div className="absolute" style={{ left: `${(CENTER.x / VIEW.w) * 100}%`, top: `${(CENTER.y / VIEW.h) * 100}%`, transform: 'translate(-50%, -50%)' }}>
                    <HubTile size="h-[150px] w-[150px]" />
                </div>

                {NODES.map((n, i) => (
                    <motion.div
                        key={n.label}
                        className="absolute w-[220px] -translate-x-1/2 -translate-y-1/2 border border-line bg-surface px-4 py-3 transition-colors duration-300 hover:border-ink"
                        style={{ left: `${(n.x / VIEW.w) * 100}%`, top: `${(n.y / VIEW.h) * 100}%` }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                    >
                        <span className="block font-mono text-[0.65rem] text-subtle">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-display text-[0.95rem] font-medium tracking-[-0.01em] text-ink">{n.label}</span>
                    </motion.div>
                ))}
            </div>

            {/* Mobile diagram */}
            <div className="relative mx-auto flex max-w-[360px] flex-col items-center md:hidden">
                <HubTile size="h-[110px] w-[110px]" />
                <div className="relative mt-10 w-full">
                    <div className="absolute bottom-6 left-1/2 top-[-40px] w-px -translate-x-1/2 border-l border-dashed border-[#C4C4C4]" />
                    <div className="relative flex flex-col gap-3">
                        {NODES.map((n, i) => (
                            <motion.div
                                key={n.label}
                                className="mx-auto w-full border border-line bg-surface px-4 py-3 text-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <span className="mr-2 font-mono text-[0.65rem] text-subtle">{String(i + 1).padStart(2, '0')}</span>
                                <span className="font-display text-[0.95rem] font-medium text-ink">{n.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ComparisonToggle;
