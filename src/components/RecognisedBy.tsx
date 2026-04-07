import Image from 'next/image';

const recognition = [
    { name: 'DPIIT', logo: '/dpiit.png' },
    { name: 'Bihar', logo: '/bihar2.webp' },
    { name: 'Startup India', logo: '/StartupIndia.png' },
    { name: 'Startup Bihar', logo: '/bihar.webp' }
];

const RecognisedBy = () => {
    return (
        <section className="bg-black py-16 border-t border-b border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
                <span className="text-neon text-[0.7rem] uppercase tracking-[0.3em] block mb-4">Official Endorsements</span>
                <h2 className="text-[2.5rem] md:text-[3rem] font-bold uppercase text-white tracking-tighter">Recognised <span className="text-neon">By</span></h2>
            </div>
            
            <div className="flex gap-8 items-center whitespace-nowrap animate-scroll-reverse w-max px-4">
                {recognition.map((item, index) => (
                    <div key={index} className="relative h-32 md:h-48 w-64 md:w-72 flex items-center justify-center transition-all duration-500 hover:scale-105 group">
                        <div className="relative w-full h-full">
                            <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                className="object-contain group-hover:brightness-110 transition-all duration-300"
                            />
                        </div>
                    </div>
                ))}
                {/* Duplicate for infinite scroll */}
                {recognition.map((item, index) => (
                    <div key={`dup-${index}`} className="relative h-32 md:h-48 w-64 md:w-72 flex items-center justify-center transition-all duration-500 hover:scale-105 group">
                        <div className="relative w-full h-full">
                            <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                className="object-contain group-hover:brightness-110 transition-all duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecognisedBy;
