'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ComparisonToggle = () => {
    const nodes: { label: string; top: string; left?: string; right?: string; color?: string }[] = [
        { label: 'SYSTEM AUDIT', top: '20%', left: '10%' },
        { label: 'INFRASTRUCTURE AS CODE', top: '45%', left: '5%' },
        { label: 'DATA STREAM AGGREGATION', top: '75%', left: '10%' },
        { label: 'AUTONOMOUS SCALING', top: '20%', right: '10%' },
        { label: 'PREDICTIVE MAINTENANCE', top: '45%', right: '5%' },
        { label: 'EDGE DEPLOYMENT', top: '75%', right: '10%' },
    ];

    const paths = [
        { d: "M 150 110 C 350 110 400 275 500 275", side: 'left' },
        { d: "M 100 248 C 300 248 400 275 500 275", side: 'left' },
        { d: "M 150 412 C 350 412 400 275 500 275", side: 'left' },
        { d: "M 500 275 C 600 275 650 110 850 110", side: 'right' },
        { d: "M 500 275 C 600 275 700 248 900 248", side: 'right' },
        { d: "M 500 275 C 600 275 650 412 850 412", side: 'right' },
    ];

    return (
        <section className="px-[60px] bg-black relative overflow-hidden min-h-[600px] flex items-center justify-center">
            <div className="mx-auto relative z-10 w-full">
                <div className="text-center mt-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-neon text-[0.8rem] uppercase tracking-[0.4em] mb-4 font-medium"
                    >
                        The Engineering Evolution
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        CommHawk <span className="text-white/70 font-light italic">Synapse</span>
                    </motion.h2>
                </div>

                <div className="relative h-[550px] w-full">
                    {/* Central Logo Box */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="w-44 h-44 border border-neon/30 rounded-[2.5rem] flex items-center justify-center bg-black/80 backdrop-blur-xl relative shadow-[0_0_100px_rgba(0,243,255,0.15)] group hover:border-neon/60 transition-colors duration-500"
                        >
                            <div className="relative w-28 h-28 transform group-hover:scale-110 transition-transform duration-500">
                                <Image
                                    src="/logo-trans.png"
                                    alt="CommHawk Logo"
                                    fill
                                    className="object-contain brightness-150"
                                />
                            </div>

                            {/* Inner pulse */}
                            <motion.div
                                className="absolute inset-0 rounded-[2.5rem] border border-neon/50"
                                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <div className="absolute inset-0 rounded-[2.5rem] bg-neon/5" />
                        </motion.div>
                    </div>

                    {/* SVGs */}
                    <svg viewBox="0 0 1000 550" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <defs>
                            <filter id="synapseGlow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feFlood floodColor="var(--neon)" floodOpacity="0.5" result="color" />
                                <feComposite in="color" in2="blur" operator="in" result="glow" />
                                <feMerge>
                                    <feMergeNode in="glow" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <g filter="url(#synapseGlow)">
                            {/* Connective Synapse Path: Left To Right Through Center */}
                            {paths.map((path, idx) => (
                                <g key={idx}>
                                    <motion.path
                                        d={path.d}
                                        stroke="var(--neon)"
                                        strokeWidth="1.5"
                                        strokeOpacity={0.25}
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeInOut" }}
                                    />
                                    {/* Junction Nodes */}
                                    <motion.circle
                                        cx={path.side === 'left' ? 350 : 650}
                                        cy={idx % 2 === 0 ? 110 + (idx * 20) : 275}
                                        r="2"
                                        fill="var(--neon)"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 0.6 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.2 + idx * 0.05 }}
                                    />
                                </g>
                            ))}
                        </g>

                        {/* Particle Stream */}
                        {paths.map((path, pIdx) => (
                            [...Array(2)].map((_, i) => (
                                <motion.circle
                                    key={`pip-${pIdx}-${i}`}
                                    r="1.5"
                                    className="fill-white shadow-[0_0_8px_#fff]"
                                    animate={{
                                        offsetDistance: ["0%", "100%"],
                                        opacity: [0, 1, 1, 0]
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: (pIdx * 0.5) + (i * 2)
                                    }}
                                    style={{
                                        offsetPath: `path("${path.d}")`,
                                    }}
                                />
                            ))
                        ))}
                    </svg>

                    {/* Node Labels */}
                    {nodes.map((node, idx) => (
                        <motion.div
                            key={idx}
                            style={{
                                top: node.top,
                                left: node.left,
                                right: node.right,
                                position: 'absolute',
                            }}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="px-6 py-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md z-30 hover:border-neon/50 hover:bg-black/60 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse shadow-[0_0_8px_var(--neon)]" />
                                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/90 group-hover:text-white transition-colors">
                                    {node.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[800px] blur-[150px] rounded-full bg-neon/10 pointer-events-none" />
        </section>
    );
};

export default ComparisonToggle;
