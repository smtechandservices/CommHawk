import Image from 'next/image';
import { Section } from '@/components/ui/Frame';

const recognition = [
    { name: 'Bihar', logo: '/bihar.webp' },
    { name: 'MSME', logo: '/msme.png' },
    { name: 'Startup India', logo: '/StartupIndia.png' },
    { name: 'Startup Bihar', logo: '/StartupBihar.png' }
];

const RecognisedBy = () => {
    return (
        <Section>
            <div className="border-b border-line px-5 py-10 text-center md:px-8">
                <p className="text-[0.95rem] text-body">Officially recognised by</p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
                {recognition.map((item) => (
                    <div key={item.name} className="group flex flex-col items-center justify-center gap-4 bg-canvas px-6 py-10">
                        <div className="relative h-20 w-full max-w-[200px] md:h-24">
                            <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                sizes="200px"
                                className="object-contain grayscale transition duration-500 group-hover:grayscale-0"
                            />
                        </div>
                        <span className="text-sm text-subtle">{item.name}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default RecognisedBy;
