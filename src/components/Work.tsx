'use client';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 'befin',
        title: 'Befin',
        description:
            'Our company provides complete website development services. We help from planning and design to building and launching.',
        image: 'befin.png',
    },
    {
        id: 'commhawk',
        title: 'CommHawk',
    },
    {
        id: 'designs',
        title: 'Designs',
    },
];

const Work = () => {
    return (
        <section className="py-[120px] px-[60px] bg-black" id="work">
            <div className="max-w-7xl mx-auto">

                <div className="mb-[80px]">
                    <span className="text-neon text-[0.7rem] uppercase tracking-[0.3em] block mb-4">
                        Portfolio
                    </span>
                    <h2 className="text-[3.5rem] font-bold leading-tight uppercase text-white">
                        Impactful <span className="text-neon">Creations</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h3 className="text-4xl font-bold text-white mb-6">
                            {projects[0].title}
                        </h3>
                        <p className="text-white/60 text-lg leading-relaxed mb-8">
                            {projects[0].description}
                        </p>

                        <button className="px-6 py-3 bg-neon text-black font-semibold rounded-full hover:scale-105 transition">
                            View Case Study →
                        </button>
                    </div>

                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.03 }}
                    >
                        <img
                            src={projects[0].image}
                            alt="Befin"
                            className="w-full h-auto object-contain mix-blend-lighten opacity-90"
                        />

                        <div className="absolute inset-0 bg-gradient-to-tr from-neon/10 to-transparent pointer-events-none" />
                    </motion.div>

                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {projects.slice(1).map((project) => (
                        <motion.div
                            key={project.id}
                            className="aspect-square bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-lg font-bold uppercase tracking-widest text-white/40 hover:text-white transition">
                                {project.title}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Work;