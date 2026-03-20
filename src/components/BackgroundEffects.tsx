'use client';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            <motion.div
                className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-neon/5 blur-[100px] rounded-full"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ willChange: 'transform' }}
            />
            <motion.div
                className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-neon/3 blur-[120px] rounded-full"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ willChange: 'transform' }}
            />
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(189,253,1,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(189,253,1,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute inset-0 bg-radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)" />
        </div>
    );
};

export default BackgroundEffects;
