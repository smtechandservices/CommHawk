import { Section } from '@/components/ui/Frame';

const technologies = [
    'Python', 'NextJS', 'ReactJS', 'TypeScript', 'Tailwind CSS', 'NodeJS', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL', 'AWS', 'Gunicorn', 'Nginx'
];

const Technologies = () => {
    return (
        <Section innerClassName="py-14">
            <p className="mb-8 text-center text-[0.95rem] text-body">Built on a battle-tested stack</p>
            <div className="mask-fade-x mx-auto max-w-[1040px] overflow-hidden">
                <div className="animate-scroll flex w-max items-center gap-14 whitespace-nowrap">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <span
                            key={index}
                            aria-hidden={index >= technologies.length}
                            className="cursor-default font-display text-[1.35rem] font-medium tracking-[-0.02em] text-subtle transition-colors duration-300 hover:text-ink"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Technologies;
