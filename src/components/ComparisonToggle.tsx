'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ComparisonToggle = () => {
    const [isWithCommHawk, setIsWithCommHawk] = useState(true);

    const nodesWith: { label: string; top: string; left?: string; right?: string; color?: string }[] = [
        { label: 'SYSTEM AUDIT', top: '20%', left: '10%' },
        { label: 'INFRASTRUCTURE AS CODE', top: '45%', left: '5%' },
        { label: 'DATA STREAM AGGREGATION', top: '75%', left: '10%' },
        { label: 'AUTONOMOUS SCALING', top: '20%', right: '10%' },
        { label: 'PREDICTIVE MAINTENANCE', top: '45%', right: '5%' },
        { label: 'EDGE DEPLOYMENT', top: '75%', right: '10%' },
    ];

    const nodesWithout: { label: string; top: string; left?: string; right?: string; color?: string }[] = [
        { label: 'STAGNANT ARCHITECTURE', top: '35%', left: '20%', color: 'text-red-500' },
        { label: 'ZERO DEPLOYMENT FLOW', top: '35%', right: '20%', color: 'text-red-500' },
        { label: 'MANUAL OVERHEAD', top: '65%', left: '15%', color: 'text-white/40' },
        { label: 'SYSTEM FRAGMENTATION', top: '65%', right: '15%', color: 'text-red-500' },
    ];

    // Systematic Path mapping for "With" state
    const paths = [
        { d: "M 150 110 C 350 110 400 275 500 275", side: 'left' },
        { d: "M 100 248 C 300 248 400 275 500 275", side: 'left' },
        { d: "M 150 412 C 350 412 400 275 500 275", side: 'left' },
        { d: "M 500 275 C 600 275 650 110 850 110", side: 'right' },
        { d: "M 500 275 C 600 275 700 248 900 248", side: 'right' },
        { d: "M 500 275 C 600 275 650 412 850 412", side: 'right' },
    ];

    return (
        <section className="py-[120px] px-[60px] bg-black relative overflow-hidden min-h-[850px]">
            <div className="max-w-6xl mx-auto relative z-10 h-full">
                <div className="flex flex-col items-center text-center mb-10">
                    <p className="text-white/40 text-[0.8rem] uppercase tracking-widest mb-4">The Engineering Evolution</p>
                    <div className="flex items-center gap-6 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
                        <span className={`text-[0.65rem] uppercase tracking-widest px-6 py-2 transition-all cursor-default ${!isWithCommHawk ? 'text-white opacity-100' : 'text-white/40'}`}>
                            Legacy Stack
                        </span>
                        <div
                            className={`w-14 h-7 rounded-full relative cursor-pointer transition-colors duration-500 ${isWithCommHawk ? 'bg-neon shadow-[0_0_20px_var(--neon)]' : 'bg-red-500/50'}`}
                            onClick={() => setIsWithCommHawk(!isWithCommHawk)}
                        >
                            <motion.div
                                className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-lg"
                                animate={{ x: isWithCommHawk ? 30 : 4 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </div>
                        <span className={`text-[0.65rem] uppercase tracking-widest px-6 py-2 transition-all cursor-default ${isWithCommHawk ? 'text-white opacity-100 font-bold' : 'text-white/40'}`}>
                            CommHawk Synapse
                        </span>
                    </div>
                </div>

                <div className="relative h-[600px] w-full mt-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isWithCommHawk ? 'with' : 'without'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            {/* Central Logo Box */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <motion.div
                                    className={`w-44 h-44 border rounded-[2rem] flex items-center justify-center bg-black relative shadow-[0_0_100px_rgba(0,0,0,0.8)] transition-colors duration-700 ${isWithCommHawk ? 'border-neon/30' : 'border-red-500/10'}`}
                                >
                                    {isWithCommHawk ? (
                                        <div className="relative w-28 h-28">
                                            <Image
                                                src="/commhawk logo final.png"
                                                alt="CommHawk Logo"
                                                fill
                                                className="object-contain brightness-150"
                                            />
                                        </div>
                                    ) : (
                                        <div className="relative w-28 h-28 opacity-10 grayscale blur-[3px]">
                                            <Image
                                                src="/commhawk logo final.png"
                                                alt="CommHawk Logo"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                    {/* Inner pulse */}
                                    {isWithCommHawk && (
                                        <motion.div
                                            className="absolute inset-0 rounded-[2rem] border border-neon/50"
                                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />
                                    )}
                                    <div className={`absolute inset-0 rounded-[2rem] opacity-20 ${isWithCommHawk ? 'bg-neon/10' : 'bg-red-500/5'}`} />
                                </motion.div>
                            </div>

                            {/* SVGs */}
                            <svg viewBox="0 0 1000 550" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                                <defs>
                                    {/* Simple, efficient glow */}
                                    <filter id="synapseGlow" x="-10%" y="-10%" width="120%" height="120%">
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in="SourceGraphic" operator="over" />
                                    </filter>
                                </defs>
                                {isWithCommHawk ? (
                                    <g filter="url(#synapseGlow)">
                                        {/* Horizontal Spine Lines */}
                                        {[...Array(5)].map((_, i) => (
                                            <motion.line
                                                key={`spine-${i}`}
                                                x1="100" y1={200 + i * 40} x2="900" y2={200 + i * 40}
                                                stroke="var(--neon)" strokeWidth="0.5" strokeOpacity="0.05"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 2 }}
                                            />
                                        ))}

                                        {/* Connective Synapse Path: Left To Right Through Center */}
                                        {paths.map((path, idx) => (
                                            <g key={idx}>
                                                <motion.path
                                                    d={path.d}
                                                    stroke="var(--neon)"
                                                    strokeWidth="1"
                                                    strokeOpacity={0.2}
                                                    fill="none"
                                                    initial={{ pathLength: 0 }}
                                                    whileInView={{ pathLength: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: idx * 0.05 }}
                                                />
                                                {/* Junction Nodes */}
                                                <motion.circle
                                                    cx={path.side === 'left' ? 350 : 650}
                                                    cy={idx % 2 === 0 ? 110 + (idx * 20) : 275}
                                                    r="1.2" fill="var(--neon)" fillOpacity="0.3"
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 1 }}
                                                />
                                            </g>
                                        ))}
                                        {/* Central Junction Dots */}
                                        {[...Array(4)].map((_, i) => (
                                            <circle key={i} cx={420} cy={220 + i * 40} r="1.5" fill="var(--neon)" fillOpacity="0.3" />
                                        ))}
                                        {[...Array(4)].map((_, i) => (
                                            <circle key={i} cx={580} cy={220 + i * 40} r="1.5" fill="var(--neon)" fillOpacity="0.3" />
                                        ))}
                                    </g>
                                ) : (
                                    <g>
                                        {[...Array(8)].map((_, i) => (
                                            <motion.path
                                                key={i}
                                                d={`M 100 ${50 + i * 60} C 300 ${275 + (i - 4) * 20} 700 ${275 - (i - 4) * 20} 900 ${50 + i * 60}`}
                                                stroke="#ef4444"
                                                strokeWidth="0.8"
                                                strokeOpacity="0.015"
                                                fill="none"
                                            />
                                        ))}
                                    </g>
                                )}
                            </svg>

                            {/* Node Labels */}
                            {(isWithCommHawk ? nodesWith : nodesWithout).map((node, idx) => (
                                <motion.div
                                    key={idx}
                                    style={{
                                        top: node.top,
                                        left: node.left,
                                        right: node.right,
                                        position: 'absolute',
                                        transform: 'translateZ(0)'
                                    }}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`px-5 py-2 rounded-xl border z-30 transition-all duration-500 ${isWithCommHawk ? 'bg-[#0a0a0a] border-white/10 hover:border-neon/40 shadow-lg' : 'bg-red-950/20 border-red-500/10'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`text-[0.6rem] font-black uppercase tracking-[0.3em] ${node.color || (isWithCommHawk ? 'text-white/90' : 'text-white/20')}`}>
                                            {node.label}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Pips for "With" state */}
                            {isWithCommHawk && (
                                <div className="absolute inset-0 pointer-events-none z-40" style={{ transform: 'translateZ(0)' }}>
                                    {paths.map((path, pIdx) => (
                                        [...Array(2)].map((_, i) => (
                                            <motion.div
                                                key={`${pIdx}-${i}`}
                                                className="w-1 h-1 bg-white rounded-full shadow-[0_0_6px_#fff]"
                                                animate={{
                                                    offsetDistance: ["0%", "100%"],
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: (pIdx * 0.8) + (i * 2)
                                                }}
                                                style={{
                                                    offsetPath: `path("${path.d}")`,
                                                    willChange: 'transform'
                                                }}
                                            />
                                        ))
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Background Effects */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] blur-[180px] rounded-full transition-colors duration-1000 ${isWithCommHawk ? 'bg-neon/10' : 'bg-red-500/5'}`} />
        </section>
    );
};

export default ComparisonToggle;
