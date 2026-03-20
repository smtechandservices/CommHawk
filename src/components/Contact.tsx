'use client';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="py-[120px] px-[60px] bg-black" id="connect">
            <div className="max-w-7xl mx-auto">
                <div className="mb-[80px]">
                    <span className="text-neon text-[0.7rem] uppercase tracking-[0.3em] block mb-4">Connect</span>
                    <h2 className="text-[3.5rem] font-bold leading-[1.1] uppercase text-white">
                        Let&apos;s Build the <br />
                        <span className="text-neon">Future</span> Together
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <form className="w-full">
                        <div className="space-y-10">
                            <div className="flex flex-col gap-4">
                                <label htmlFor="name" className="text-white/30 text-[0.6rem] uppercase tracking-widest font-bold">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Jane Doe"
                                    className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-neon transition-colors text-white text-lg font-light placeholder:text-white/10"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label htmlFor="email" className="text-white/30 text-[0.6rem] uppercase tracking-widest font-bold">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="jane@company.com"
                                    className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-neon transition-colors text-white text-lg font-light placeholder:text-white/10"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label htmlFor="message" className="text-white/30 text-[0.6rem] uppercase tracking-widest font-bold">Project Details</label>
                                <textarea
                                    id="message"
                                    rows={1}
                                    placeholder="Tell us about your goals..."
                                    className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-neon transition-colors text-white text-lg font-light placeholder:text-white/10 resize-none overflow-hidden"
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-16">
                            <motion.button
                                type="submit"
                                className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-[0.8rem] rounded-full hover:bg-neon transition-colors duration-300"
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message ↗
                            </motion.button>
                        </div>
                    </form>

                    <div className="flex flex-col justify-between">
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-[0.6rem] uppercase tracking-widest text-white/30 mb-6">Socials</h4>
                                <div className="flex gap-4">
                                    {['LinkedIn', 'Instagram', 'X'].map((social) => (
                                        <a key={social} href="#" className="px-6 py-3 border border-white/10 rounded-full text-[0.7rem] uppercase tracking-widest text-white/60 hover:border-neon hover:text-neon transition-all">
                                            {social}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[0.6rem] uppercase tracking-widest text-white/30 mb-6">Contact</h4>
                                <p className="text-white/60 text-lg font-light">
                                    info@commhawk.in <br />
                                    commhawk <br />
                                    Technology Hub, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
