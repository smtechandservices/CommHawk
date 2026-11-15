import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Section, Eyebrow } from '@/components/ui/Frame';
import mou from '@/data/mou.json';

const names = [...mou.partners.map((p) => p.name), ...mou.colleges.map((c) => c.name)];

const MouBanner = () => {
    return (
        <Section tone="tint" innerClassName="py-12 md:py-16">
            <div className="mb-8 px-5 text-center md:px-8">
                <Eyebrow className="mb-3">MOU Partners</Eyebrow>
                <p className="font-display text-[1.6rem] font-medium tracking-[-0.02em] text-ink md:text-[2rem]">
                    Partnered with leading institutions
                </p>
            </div>

            <div className="mask-fade-x overflow-hidden">
                <ul className="animate-scroll flex w-max gap-4 hover:[animation-play-state:paused]" style={{ animationDuration: '120s' }}>
                    {[...names, ...names].map((name, i) => (
                        <li
                            key={i}
                            aria-hidden={i >= names.length}
                            className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-white px-5 py-3 text-[0.9rem] font-medium text-ink"
                        >
                            <GraduationCap size={16} className="text-accent" />
                            {name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 text-center">
                <Link href="/mou" className="btn-secondary">
                    View all MOUs <ArrowRight size={14} />
                </Link>
            </div>
        </Section>
    );
};

export default MouBanner;
