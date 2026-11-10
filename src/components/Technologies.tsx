import { Section } from '@/components/ui/Frame';

const technologies = [
    'Python', 'NextJS', 'ReactJS', 'TypeScript', 'Tailwind CSS', 'NodeJS', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL', 'AWS', 'Gunicorn', 'Nginx'
];

const Technologies = () => {
    return (
        <Section innerClassName="border-t border-line py-10">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-subtle">Built on a battle-tested stack</p>
            <div className="mask-fade-x mx-auto max-w-[1040px] overflow-hidden">
                <div className="animate-scroll flex w-max items-center gap-3 whitespace-nowrap">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <span
                            key={index}
                            aria-hidden={index >= technologies.length}
                            className="cursor-default rounded-full border border-line bg-canvas px-5 py-2.5 font-display text-[1rem] font-medium tracking-[-0.01em] text-ink transition-colors duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
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
