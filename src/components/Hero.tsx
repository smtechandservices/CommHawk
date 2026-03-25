'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative pt-[120px] pb-[80px] overflow-hidden px-[30px]">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16 z-10">
                <div className="text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-1.5 border border-neon/30 rounded-full bg-neon/5 text-neon text-[0.7rem] tracking-[0.2em] uppercase mb-8"
                    >
                        Innovating the Future
                    </motion.div>

                    <motion.h1
                        className="text-[5.5rem] font-bold tracking-tight leading-[1] mb-8 uppercase max-xl:text-[4.5rem] max-md:text-[3.5rem] text-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Engineering <span className="text-neon">Digital</span> Excellence
                    </motion.h1>

                    <motion.p
                        className="text-lg leading-relaxed text-white/60 mb-12 font-normal max-w-xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        CommHawk is a premier technology partner specializing in high-performance
                        digital products. We help ambitious companies scale through cutting-edge
                        development and innovative AI solutions.
                    </motion.p>

                    <motion.div
                        className="flex gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <Link
                            href="#connect"
                            className="px-10 py-4 bg-neon text-black font-bold uppercase tracking-widest text-[0.8rem] rounded-full hover:bg-white transition-colors duration-300"
                        >
                            Start Your Project
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    className="relative hidden lg:block"
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <div className="relative z-10 ">
                        <Image
                            src="/hero-workstation.png"
                            alt="Tech Environment"
                            width={800}
                            height={600}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon/10 blur-[80px] rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon/5 blur-[80px] rounded-full" />
                </motion.div>
            </div>

            <motion.div
                className="mt-20 opacity-20 hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-[1px] h-[60px] bg-gradient-to-b from-neon to-transparent mx-auto" />
            </motion.div>
        </section>
    );
};

export default Hero;
