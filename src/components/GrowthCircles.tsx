'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DESKTOP_SERVICES = [
    { label: 'INFRASTRUCTURE AS CODE', angle: -140, x: -320, y: -180 },
    { label: 'AUTONOMOUS AGENTS', angle: -40, x: 320, y: -180 },
    { label: 'REAL-TIME ANALYTICS', angle: 20, x: 350, y: 100 },
    { label: 'CLOUD-NATIVE SCALING', angle: 90, x: 0, y: 320 },
    { label: 'ENTERPRISE SECURITY', angle: 160, x: -350, y: 100 },
];

const MOBILE_SERVICES = [
    { label: 'INFRASTRUCTURE AS CODE', angle: -110, x: 0, y: -360 },
    { label: 'AUTONOMOUS AGENTS', angle: -70, x: 0, y: -260 },
    { label: 'REAL-TIME ANALYTICS', angle: 60, x: 0, y: 260 },
    { label: 'CLOUD-NATIVE SCALING', angle: 90, x: 0, y: 360 },
    { label: 'ENTERPRISE SECURITY', angle: 120, x: 0, y: 460 },
];

const HubVisualization = ({ services, isMobile }: { services: any[], isMobile: boolean }) => {
    const center = { x: isMobile ? 200 : 400, y: isMobile ? 500 : 400 };
    const startRadius = isMobile ? 100 : 150;
    const viewBox = isMobile ? "0 0 400 1000" : "0 0 800 800";

    return (
        <div className={`relative w-full flex items-center justify-center ${isMobile ? 'h-[1000px] max-w-[400px]' : 'max-w-[800px] aspect-square scale-90 lg:scale-100 transition-transform duration-500'}`}>
            {/* Background radial glow */}
            <div className="absolute inset-0 bg-neon/5 blur-[120px] rounded-full" />

            {/* Synapse/Nerve Lines */}
            <svg viewBox={viewBox} className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
                <defs>
                    <filter id={`nerveGlow-${isMobile ? 'm' : 'd'}`}>
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in="SourceGraphic" operator="over" />
                    </filter>
                </defs>
                <g filter={`url(#nerveGlow-${isMobile ? 'm' : 'd'})`}>
                    {services.map((service, i) => {
                        const startX = center.x + Math.cos(service.angle * Math.PI / 180) * startRadius;
                        const startY = center.y + Math.sin(service.angle * Math.PI / 180) * startRadius;
                        const endX = center.x + service.x;
                        const endY = center.y + service.y;

                        // Orthogonal path with rounding
                        const midX = startX + (endX - startX) * (isMobile ? 0.3 : 0.6);

                        return (
                            <g key={i}>
                                <motion.path
                                    d={`M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`}
                                    stroke="var(--neon)"
                                    strokeWidth="0.8"
                                    strokeOpacity="0.15"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: i * 0.1 }}
                                />
                                <motion.circle
                                    cx={endX} cy={endY} r="2"
                                    fill="var(--neon)"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.5 + i * 0.1 }}
                                />
                                {/* Moving pips */}
                                <motion.circle
                                    r="1" fill="white"
                                    animate={{
                                        offsetDistance: ["0%", "100%"],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.8, ease: "linear" }}
                                    style={{
                                        offsetPath: `path("M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}")`,
                                        willChange: 'transform'
                                    }}
                                />
                            </g>
                        );
                    })}
                </g>
            </svg>

            {/* Concentric Rings */}
            <svg viewBox="0 0 500 500" className="w-full h-full absolute animate-spin-slow-reverse overflow-visible pointer-events-none" style={{ width: isMobile ? '70%' : '100%', height: isMobile ? '70%' : '100%' }}>
                <defs>
                    <path id="outerCircle" d="M 250, 250 m -220, 0 a 220, 220 0 1, 1 440, 0 a 220, 220 0 1, 1 -440, 0" />
                    <path id="middleCircle" d="M 250, 250 m -160, 0 a 160, 160 0 1, 1 320, 0 a 160, 160 0 1, 1 -320, 0" />
                    <path id="innerCircle" d="M 250, 250 m -100, 0 a 100, 100 0 1, 1 200, 0 a 100, 100 0 1, 1 -200, 0" />
                </defs>

                <circle cx="250" cy="250" r="220" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <text className="text-[10px] uppercase tracking-[0.5em] fill-white/10 font-black">
                    <textPath href="#outerCircle" startOffset="0%">
                        • SYSTEM ARCHITECTURE • DATA ENGINEERING • AI INTEGRATION • FULL-STACK • SYSTEM ARCHITECTURE
                    </textPath>
                </text>

                <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <text className="text-[9px] uppercase tracking-[0.4em] fill-white/20 font-black">
                    <textPath href="#middleCircle" startOffset="0%">
                        • DEV OPS • CI/CD • CLOUD NATIVE • MICROSERVICES • DEV OPS • CI/CD • CLOUD NATIVE
                    </textPath>
                </text>

                <circle cx="250" cy="250" r="100" fill="none" stroke="var(--neon)" strokeOpacity="0.1" strokeWidth="1" />
                <text className="text-[8px] uppercase tracking-[0.4em] fill-neon/40 font-black">
                    <textPath href="#innerCircle" startOffset="0%">
                        • PERFORMANCE • SCALABILITY • SECURITY • RELIABILITY • PERFORMANCE • SCALABILITY
                    </textPath>
                </text>
            </svg>

            {/* Service Labels */}
            {services.map((service, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-[#0a0a0a] border border-white/10 px-4 py-2 rounded-xl z-20 shadow-lg"
                    style={{
                        left: isMobile ? '50%' : `calc(50% + ${service.x}px)`,
                        top: isMobile ? `calc(50% + ${service.y}px)` : `calc(50% + ${service.y}px)`,
                        transform: isMobile ? 'translate(-50%, -50%) translateZ(0)' : 'translate(-50%, -50%) translateZ(0)'
                    }}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.1 }}
                >
                    <span className="text-[0.6rem] font-black uppercase tracking-widest text-white/80 whitespace-nowrap">
                        {service.label}
                    </span>
                </motion.div>
            ))}

            {/* Logo Center */}
            <div className="relative z-30 text-center">
                <motion.div
                    className={`${isMobile ? 'w-24 h-24' : 'w-32 h-32 md:w-48 md:h-48'} mx-auto shadow-[0_0_120px_rgba(0,243,255,0.2)] rounded-full flex items-center justify-center bg-black/20`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    <Image
                        src="/logo-trans.png"
                        alt="CommHawk Logo"
                        fill
                        className="object-contain brightness-150"
                    />
                </motion.div>
            </div>
        </div>
    );
}

const GrowthCircles = () => {

    return (
        <section className="py-[80px] bg-black flex flex-col items-center justify-center overflow-hidden min-h-[1100px] md:min-h-[800px] relative">
            <div className="mb-10 text-center relative z-20">
                <span className="text-neon text-[0.7rem] uppercase tracking-[0.3em] block mb-4">Engineering Hub</span>
                <h2 className="text-[3rem] font-bold uppercase text-white tracking-tighter">Unified <span className="text-neon">Technical</span> Core</h2>
            </div>

            {/* Desktop Hub */}
            <div className="hidden md:flex w-full items-center justify-center">
                <HubVisualization services={DESKTOP_SERVICES} isMobile={false} />
            </div>

            {/* Mobile Hub */}
            <div className="flex md:hidden w-full items-center justify-center">
                <HubVisualization services={MOBILE_SERVICES} isMobile={true} />
            </div>
        </section>
    );
};

export default GrowthCircles;
