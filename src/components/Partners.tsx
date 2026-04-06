const partners = [
    'redis', 'Octopus Deploy', 'accenture', 'Raspberry Pi', 'brave', 'DRATA', 'unicef', 'Befin', 'DECATHLON', 'Raycast', 'AMETEK'
];

const Partners = () => {
    return (
        <div className="bg-black py-4 md:py-6 border-t border-b border-white/5 overflow-hidden">
            <div className="flex gap-12 md:gap-[100px] items-center whitespace-nowrap animate-scroll w-max">
                {partners.map((partner, index) => (
                    <div key={index} className="text-white opacity-50 font-bold text-[0.8rem] uppercase tracking-[0.2em] hover:opacity-100 hover:text-neon transition-all duration-500 cursor-default">
                        {partner}
                    </div>
                ))}
                {partners.map((partner, index) => (
                    <div key={`dup-${index}`} className="text-white opacity-50 font-bold text-[0.8rem] uppercase tracking-[0.2em] hover:opacity-100 hover:text-neon transition-all duration-500 cursor-default">
                        {partner}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
