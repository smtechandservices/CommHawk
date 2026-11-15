'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { Calendar, Mail } from 'lucide-react';
import { Section, Eyebrow, Heading } from '@/components/ui/Frame';
import { GOOGLE_CALENDAR_LINK, CONTACT_EMAIL, WEB3FORMS_ACCESS_KEY } from '@/lib/constants';


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

const inputClass =
    "w-full rounded-xl border border-line bg-canvas px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-subtle focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";
const labelClass = "mb-2 block text-sm font-medium text-ink";

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
        <Section id="connect">
            <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" strategy="afterInteractive" />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative px-5 pb-10 pt-16 md:px-8 lg:py-24">
                    <div className="relative">
                        <Eyebrow className="mb-4">Connect</Eyebrow>
                        <Heading title="Let's build the future" muted="together" />
                        <p className="mt-6 max-w-[440px] text-[1.05rem] leading-relaxed text-body">
                            Tell us about your product, timeline, and goals. We&apos;ll get back to you
                            with next steps, or book a call directly.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <Calendar size={15} />
                                Schedule a Call
                            </a>
                            <a href="mailto:commhawktechnologies@gmail.com" className="btn-secondary">
                                <Mail size={15} />
                                Email Us
                            </a>
                        </div>

                        <div className="mt-8 space-y-3 border-t border-line pt-8 text-[0.95rem] text-body">
                            <p className="flex items-center gap-3"><Mail size={16} className="text-accent" /> commhawktechnologies@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="px-5 pb-16 md:px-8 lg:py-24">
                    <form
                        className="rounded-3xl border border-line bg-white p-6 shadow-[0_40px_80px_-40px_rgba(10,31,68,0.35)] md:p-8"
                        onSubmit={async (e) => {
                            e.preventDefault();

                            if (!isFormValid || isSubmitting) return;

                            if (!WEB3FORMS_ACCESS_KEY) {
                                console.error("WEB3FORMS_ACCESS_KEY is not set in src/lib/constants.ts");
                                window.Swal?.fire({
                                    icon: "error",
                                    title: "Form unavailable",
                                    text: `The contact form isn't configured right now. Please email us at ${CONTACT_EMAIL}.`,
                                    confirmButtonText: "OK",
                                });
                                return;
                            }

                            setIsSubmitting(true);
                            try {
                                const formData = new FormData();
                                formData.append("access_key", WEB3FORMS_ACCESS_KEY);
                                formData.append("name", name);
                                formData.append("email", email);
                                formData.append("company", company);
                                formData.append("message", message);
                                formData.append("subject", `New Contact Form Submission from ${name}`);
                                formData.append("from_name", "CommHawk Technologies Pvt. Ltd. Contact Form");
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

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className={labelClass}>Your name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Jane Doe"
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className={labelClass}>Email address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="jane@company.com"
                                    className={inputClass}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className={labelClass}>Company (optional)</label>
                                <input
                                    type="text"
                                    id="company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="Your Company"
                                    className={inputClass}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className={labelClass}>Project details *</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={5}
                                    placeholder="Tell us about your goals..."
                                    className={`${inputClass} resize-none`}
                                ></textarea>
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            className="btn-primary mt-6 w-full"
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </motion.button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
