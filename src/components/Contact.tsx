'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { Calendar } from 'lucide-react';

const GOOGLE_CALENDAR_LINK =
    "https://calendar.google.com/calendar/u/0/r/eventedit?text=Schedule+with+CommHawk&details=Looking+forward+to+connecting.+Feel+free+to+add+project+details+in+the+meeting+invite!&dates=";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "a1b45022-6077-4901-b0ab-7512b2d92072";

type SwalType = {
    fire: (options: {
        icon: "success" | "error" | "warning" | "info" | "question";
        title: string;
        text: string;
        confirmButtonText: string;
    }) => void;
} | undefined;

declare global {
    interface Window {
        Swal?: SwalType;
    }
}

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isFormValid = useMemo(() => {
        return name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
    }, [name, email, message]);

    return (
        <section className="pt-10 pb-6 px-6 lg:px-[60px] bg-black border-t border-white/5" id="connect">
            <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" strategy="afterInteractive" />
            <div className="w-full mx-auto">
                <div className="mb-6">
                    <span className="text-neon text-[0.7rem] uppercase tracking-[0.3em] block mb-4">Connect</span>
                    <h2 className="text-[3.5rem] font-bold leading-[1.1] uppercase text-white">
                        Let&apos;s Build the <br />
                        <span className="text-neon">Future</span> Together
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                    <form
                        className="w-full lg:col-span-7"
                        onSubmit={async (e) => {
                            e.preventDefault();

                            if (!isFormValid || isSubmitting) return;

                            setIsSubmitting(true);
                            try {
                                const formData = new FormData();
                                formData.append("access_key", WEB3FORMS_ACCESS_KEY);
                                formData.append("name", name);
                                formData.append("email", email);
                                formData.append("company", company);
                                formData.append("message", message);
                                formData.append("subject", `New Contact Form Submission from ${name}`);
                                formData.append("from_name", "CommHawk Contact Form");
                                formData.append("botcheck", "");

                                const response = await fetch("https://api.web3forms.com/submit", {
                                    method: "POST",
                                    body: formData,
                                });

                                const result: { success?: boolean; message?: string } = await response.json();

                                if (result?.success) {
                                    window.Swal?.fire({
                                        icon: "success",
                                        title: "Message Sent!",
                                        text: "Thank you! Your message has been successfully sent. We'll get back to you soon.",
                                        confirmButtonText: "OK",
                                    });
                                    setName("");
                                    setEmail("");
                                    setCompany("");
                                    setMessage("");
                                } else {
                                    console.error("Form submission error:", result);
                                    window.Swal?.fire({
                                        icon: "error",
                                        title: "Submission Failed",
                                        text: result.message || "Something went wrong. Please try again.",
                                        confirmButtonText: "OK",
                                    });
                                }
                            } catch (error: unknown) {
                                console.error("Network error:", error);
                                window.Swal?.fire({
                                    icon: "error",
                                    title: "Network Error",
                                    text: "Unable to send message. Please check your connection and try again.",
                                    confirmButtonText: "OK",
                                });
                            } finally {
                                setIsSubmitting(false);
                            }
                        }}
                    >
                        <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                        <input type="hidden" name="botcheck" value="" />

                        <div className="space-y-3">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-white/60 text-[0.6rem] uppercase tracking-widest font-bold">Your Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Jane Doe"
                                    className="bg-transparent border-b border-white/10 py-2.5 outline-none focus:border-neon transition-colors text-white text-lg font-light placeholder:text-white/40"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-white/60 text-[0.6rem] uppercase tracking-widest font-bold">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="jane@company.com"
                                    className="bg-transparent border-b border-white/10 py-2.5 outline-none focus:border-neon transition-colors text-white text-lg font-light placeholder:text-white/40"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="company" className="text-white/60 text-[0.6rem] uppercase tracking-widest font-bold">Company (Optional)</label>
                                <input
                                    type="text"
                                    id="company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="Your Company"
                                    className="bg-transparent border-b border-white/10 py-2.5 outline-none focus:border-neon transition-colors text-white text-lg font-light placeholder:text-white/40"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-white/60 text-[0.6rem] uppercase tracking-widest font-bold">Project Details *</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={2}
                                    placeholder="Tell us about your goals..."
                                    className="bg-transparent border-b border-white/10 py-2.5 outline-none focus:border-neon transition-colors text-white text-lg font-light placeholder:text-white/10 resize-none overflow-hidden"
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col sm:flex-row gap-3">
                            <motion.button
                                type="submit"
                                disabled={!isFormValid || isSubmitting}
                                className="px-8 py-3.5 bg-white text-black font-bold uppercase tracking-widest text-[0.8rem] rounded-full hover:bg-neon hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-center"
                                whileTap={{ scale: 0.95 }}
                            >
                                {isSubmitting ? "Sending..." : "Send Message ↗"}
                            </motion.button>

                            <a
                                href={GOOGLE_CALENDAR_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 border border-white/20 text-white font-bold uppercase tracking-widest text-[0.8rem] rounded-full hover:border-neon hover:text-neon transition-colors duration-300 flex items-center justify-center gap-3"
                            >
                                <Calendar size={18} strokeWidth={2.2} />
                                Schedule a Call
                            </a>
                        </div>
                    </form>

                    <div className="w-full lg:col-span-5 flex flex-col justify-between h-full pt-12 lg:pt-0">
                        <div className="space-y-5">
                            {/* Brand & Description */}
                            <div>
                                <h3 className="text-xl font-bold tracking-[0.2em] mb-2 text-white">COMMHAWK</h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-4">
                                    Leading the digital transformation with precision-engineered solutions.
                                    Built for scale, designed for excellence.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {['LinkedIn', 'Instagram', 'X'].map((social) => (
                                        <a key={social} href="#" className="px-6 py-3 border border-white/10 rounded-full text-[0.7rem] uppercase tracking-widest text-white/80 hover:border-neon hover:text-neon transition-all">
                                            {social}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Links Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-[0.6rem] uppercase tracking-widest text-white/50 mb-2.5">Navigation</h4>
                                    <ul className="space-y-3">
                                        {['Services', 'Work', 'Connect'].map(item => (
                                            <li key={item}>
                                                <a href={`#${item.toLowerCase()}`} className="text-sm text-white/80 hover:text-neon transition-colors">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[0.6rem] uppercase tracking-widest text-white/50 mb-2.5">Expertise</h4>
                                    <ul className="space-y-3">
                                        <li className="text-sm text-white/80">Web & Mobile</li>
                                        <li className="text-sm text-white/80">AI & Analytics</li>
                                        <li className="text-sm text-white/80">Cloud & DevOps</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h4 className="text-[0.6rem] uppercase tracking-widest text-white/50 mb-6">Contact</h4>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    info@commhawk.in <br />
                                    Technology Hub, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/5 mt-8 gap-3">
                    <p className="text-white/50 text-[0.7rem] uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} COMMHAWK SOLUTIONS.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[0.7rem] uppercase tracking-widest text-white/50 hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="text-[0.7rem] uppercase tracking-widest text-white/50 hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
