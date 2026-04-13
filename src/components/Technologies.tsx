const technologies = [
    'Python', 'NextJS','ReactJS', 'TypeScript', 'Tailwind CSS', 'NodeJS', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL', 'AWS', 'Gunicorn', 'Nginx'
];

const Technologies = () => {
    return (
        <div className="bg-black py-6 border-t border-b border-white/5 overflow-hidden">
            <div className="flex gap-12 md:gap-[100px] items-center whitespace-nowrap animate-scroll w-max">
                {technologies.map((tech, index) => (
                    <div key={index} className="text-white opacity-50 font-bold text-[0.8rem] uppercase tracking-[0.2em] hover:opacity-100 hover:text-neon transition-all duration-500 cursor-default">
                        {tech}
                    </div>
                ))}
                {technologies.map((tech, index) => (
                    <div key={`dup-${index}`} className="text-white opacity-50 font-bold text-[0.8rem] uppercase tracking-[0.2em] hover:opacity-100 hover:text-neon transition-all duration-500 cursor-default">
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
