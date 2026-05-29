'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
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
        id: 'tripnroll',
        title: 'Trip N Roll Travel',
        subtitle: 'Ticketing Platform',
        category: 'IT Projects',
        description:
            'Next-generation travel and booking platform designed for seamless customer experiences.',
        image: '/tripnroll.png',
        link: 'https://tripnrolltravel.com/',
    },

    {
        id: 'bihar-sahu-sabha',
        title: 'Bihar Sahu Sabha',
        subtitle: 'Community Platform',
        category: 'IT Projects',
        description:
            'Digital platform developed to connect, engage, and empower members of the Bihar Sahu community.',
        image: '/bihar-sahu-sabha.png',
        link: '#',
    },

    {
        id: 'kamlee',
        title: 'Kamlee',
        subtitle: 'White Label Solution',
        category: 'White Labels',
        description:
            'Custom white-label digital solution built for businesses looking to launch and scale under their own brand.',
        image: '/kamlee.png',
        link: '#',
    },
];

const categories = ['Fintech', 'IT Projects', 'White Labels'];

const Businesses = () => {
    return (
        <section
            className="pt-[40px] px-6 md:px-[60px] bg-black"
            id="businesses"
        >
            <div className="mx-auto w-full">
                <div className="mb-16">
                    <span className="text-neon text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.3em] block mb-4">
                        Portfolio
                    </span>

                    <h2 className="text-3xl md:text-[3.5rem] font-bold leading-tight uppercase text-white">
                        Impactful <span className="text-neon">Creations</span>
                    </h2>
                </div>

                {categories.map((category) => {
                    const categoryProjects = projects.filter(
                        (project) => project.category === category
                    );

                    return (
                        <div key={category} className="mb-20">
                            <h3 className="text-2xl md:text-4xl font-bold uppercase text-white mb-8">
                                <span className="text-neon">{category}</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                                {categoryProjects.map((project, idx) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: idx * 0.1,
                                        }}
                                        className="group"
                                    >
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="block relative"
                                        >
                                            <div className="aspect-[4/3] bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden relative group-hover:border-neon/30 transition-all duration-500">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                                <div className="absolute top-4 md:top-6 right-4 md:right-6 text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md">
                                                        <span className="text-lg md:text-xl">
                                                            ↗
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 space-y-2">
                                                <h3 className="text-xl font-bold tracking-widest text-white group-hover:text-neon transition-colors">
                                                    {project.title}
                                                </h3>

                                                <span className="text-[0.6rem] text-neon uppercase tracking-[0.2em] font-medium">
                                                    {project.subtitle}
                                                </span>

                                                <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    );
                })}

                <div className="flex justify-center pt-8">
                    <motion.div
                        className="px-10 py-4 border border-neon/30 rounded-full flex items-center justify-center text-center cursor-pointer hover:bg-neon hover:text-black transition-all group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-[0.7rem] uppercase tracking-[0.2em] font-bold">
                            View Full Project Archive ↗
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Businesses;