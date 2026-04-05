'use client';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 'befin',
        title: 'Befin',
        description: 'Our company provides complete website development services. We help from the beginning stage like planning and designing the website to building it and launching it online.',
    },
    {
        id: 'commhawk',
        title: 'CommHawk',
    },
    {
        id: 'designs',
        title: 'Designs',
    }
];

const Work = () => {
    return (
        <section className="pt-[80px] px-[60px] bg-black" id="work">
            <div className="mx-auto">
                <div className="mb-12">
                    <span className="text-neon text-[0.7rem] uppercase tracking-[0.3em] block mb-4">Portfolio</span>
                    <h2 className="text-[3.5rem] font-bold leading-tight uppercase text-white">Impactful <span className="text-neon">Creations</span></h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <motion.div
                        className="group relative aspect-[16/10] bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden cursor-pointer"
                        whileHover={{ y: -10 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-10 left-10 z-10">
                            <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">{projects[0].title}</h3>
                            <p className="text-white/70 text-sm max-w-xs">{projects[0].description?.slice(0, 100)}...</p>
                        </div>
                        <div className="absolute top-10 right-10 text-white/50 group-hover:text-neon transition-colors">
                            <span className="text-4xl">↗</span>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {projects.slice(1).map((project, idx) => (
                            <motion.div
                                key={project.id}
                                className="group relative aspect-square bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center cursor-pointer overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="text-lg font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-all">
                                    {project.title}
                                </span>
                            </motion.div>
                        ))}
                        <motion.div
                            className="aspect-square border border-neon/30 rounded-full flex items-center justify-center text-center cursor-pointer hover:bg-neon hover:text-black transition-all group"
                        >
                            <span className="text-[0.7rem] uppercase tracking-[0.2em] font-bold">
                                View Full <br /> Archive ↗
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
