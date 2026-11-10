import Image from 'next/image';
import { Section, Eyebrow } from '@/components/ui/Frame';

const recognition = [
    { name: 'Bihar', logo: '/bihar.webp' },
    { name: 'MSME', logo: '/msme.png' },
    { name: 'Startup India', logo: '/StartupIndia.png' },
    { name: 'Startup Bihar', logo: '/StartupBihar.png' }
];

const RecognisedBy = () => {
    return (
        <Section innerClassName="px-5 py-14 md:px-8 md:py-20">
            <div className="mb-8 text-center">
                <Eyebrow className="mb-3">Trusted & Recognised</Eyebrow>
                <p className="font-display text-[1.6rem] font-medium tracking-[-0.02em] text-ink md:text-[2rem]">Officially recognised by</p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {recognition.map((item) => (
                    <div
                        key={item.name}
                        className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-line bg-canvas px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white hover:shadow-[0_24px_50px_-28px_rgba(255,46,147,0.5)]"
                    >
                        <div className="relative h-16 w-full max-w-[170px] md:h-20">
                            <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                sizes="200px"
                                className="object-contain grayscale transition duration-500 group-hover:grayscale-0"
                            />
                        </div>
                        <span className="text-sm font-medium text-body">{item.name}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default RecognisedBy;
