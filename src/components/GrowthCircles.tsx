'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section, Eyebrow, Heading } from '@/components/ui/Frame';

const SERVICES = [
    { label: 'Infrastructure as Code', x: 170, y: 150 },
    { label: 'Autonomous Agents', x: 830, y: 150 },
    { label: 'Real-Time Analytics', x: 860, y: 430 },
    { label: 'Cloud-Native Scaling', x: 500, y: 600 },
    { label: 'Enterprise Security', x: 140, y: 430 },
];

const RINGS = [
    { r: 250, text: '• SYSTEM ARCHITECTURE • DATA ENGINEERING • AI INTEGRATION • FULL-STACK • SYSTEM ARCHITECTURE • DATA ENGINEERING' },
    { r: 185, text: '• DEV OPS • CI/CD • CLOUD NATIVE • MICROSERVICES • DEV OPS • CI/CD • CLOUD NATIVE • MICROSERVICES' },
    { r: 120, text: '• PERFORMANCE • SCALABILITY • SECURITY • RELIABILITY • PERFORMANCE • SCALABILITY' },
];

const C = { x: 500, y: 340 };

const HubDiagram = () => (
    <div className="relative mx-auto aspect-[1000/680] w-full max-w-[1000px]">
        {/* Rotating labelled rings */}
        <svg viewBox="0 0 1000 680" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
            <defs>
                {RINGS.map((ring, i) => (
                    <path
                        key={i}
                        id={`ring-${i}`}
                        d={`M ${C.x - ring.r},${C.y} a ${ring.r},${ring.r} 0 1,1 ${ring.r * 2},0 a ${ring.r},${ring.r} 0 1,1 -${ring.r * 2},0`}
                    />
                ))}
            </defs>
            <g className="animate-spin-slow" style={{ transformOrigin: `${C.x}px ${C.y}px` }}>
                {RINGS.map((ring, i) => (
                    <g key={i}>
                        <circle cx={C.x} cy={C.y} r={ring.r} fill="none" stroke="#E6E6E6" strokeDasharray={i === 2 ? '3 5' : undefined} />
                        <text className="fill-[#B5B5B5] font-mono" style={{ fontSize: 10 - i, letterSpacing: '0.3em' }}>
                            <textPath href={`#ring-${i}`}>{ring.text}</textPath>
                        </text>
                    </g>
                ))}
            </g>

            {SERVICES.map((s, i) => {
                const d = `M ${C.x} ${C.y} L ${s.x} ${C.y + (s.y - C.y) * 0.35} L ${s.x} ${s.y}`;
                return (
                    <g key={s.label}>
                        <motion.path
                            d={d}
                            fill="none"
                            stroke="#1A1A1A"
                            strokeOpacity="0.35"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.3, delay: i * 0.1 }}
                        />
                        <circle cx={s.x} cy={C.y + (s.y - C.y) * 0.35} r="3.5" fill="#1A1A1A" />
                    </g>
                );
            })}
        </svg>

        {/* Hub */}
        <div
            className="absolute flex aspect-square w-[16%] min-w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink bg-surface shadow-[0_8px_0_0_#1A1A1A]"
            style={{ left: `${(C.x / 1000) * 100}%`, top: `${(C.y / 680) * 100}%` }}
        >
            <div className="relative h-[52%] w-[52%]">
                <Image src="/logo-mark.png" alt="CommHawk Technologies Pvt. Ltd. logo" fill sizes="120px" className="object-contain" />
            </div>
        </div>

        {/* Labels */}
        {SERVICES.map((s, i) => (
            <motion.div
                key={s.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap border border-line bg-surface px-4 py-2.5 font-display text-[0.9rem] font-medium text-ink"
                style={{ left: `${(s.x / 1000) * 100}%`, top: `${(s.y / 680) * 100}%` }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.08 }}
            >
                {s.label}
            </motion.div>
        ))}
    </div>
);

const GrowthCircles = () => {
    return (
        <Section innerClassName="overflow-hidden px-5 py-20 md:px-8 md:py-28">
            <div className="mb-12 grid grid-cols-1 items-end gap-6 md:grid-cols-2">
                <div>
                    <Eyebrow className="mb-4">Engineering Hub</Eyebrow>
                    <Heading title="Unified technical" muted="core" />
                </div>
                <p className="max-w-[420px] text-[1.05rem] leading-relaxed text-body md:justify-self-end">
                    Architecture, DevOps, data, and AI engineered as one system, so every layer
                    scales, stays secure, and performs under load.
                </p>
            </div>

            <div className="hidden md:block">
                <HubDiagram />
            </div>

            {/* Mobile: simple stacked list */}
            <div className="grid grid-cols-1 border border-line md:hidden">
                {SERVICES.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-4 border-b border-line bg-surface px-5 py-4 last:border-b-0">
                        <span className="font-mono text-[0.7rem] text-subtle">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-display text-base font-medium text-ink">{s.label}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default GrowthCircles;
