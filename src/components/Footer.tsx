const Footer = () => {
    return (
        <footer className="py-20 px-[60px] border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    <div className="max-w-sm">
                        <h3 className="text-xl font-bold tracking-[0.2em] mb-6">COMMHAWK</h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-4">
                            Leading the digital transformation with precision-engineered solutions.
                            Built for scale, designed for excellence.
                        </p>
                        <p className="text-white/20 text-[0.7rem] uppercase tracking-widest leading-relaxed">
                            info@commhawk.in <br />
                            Technology Hub, India
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-[0.6rem] uppercase tracking-widest text-white/30 mb-6">Navigation</h4>
                            <ul className="space-y-3">
                                {['Services', 'Work', 'Connect'].map(item => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase()}`} className="text-sm text-white/60 hover:text-neon transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[0.6rem] uppercase tracking-widest text-white/30 mb-6">Expertise</h4>
                            <ul className="space-y-3">
                                <li className="text-sm text-white/60">Web & Mobile</li>
                                <li className="text-sm text-white/60">AI & Analytics</li>
                                <li className="text-sm text-white/60">Cloud & DevOps</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
                    <p className="text-white/20 text-[0.7rem] uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} COMMHAWK SOLUTIONS.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[0.7rem] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="text-[0.7rem] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
