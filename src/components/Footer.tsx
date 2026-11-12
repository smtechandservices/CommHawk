import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/Frame';
import { GOOGLE_CALENDAR_LINK } from '@/lib/constants';

const company = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#businesses' },
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'MOUs', href: '/mou' },
];

const expertise = ['Web & Mobile', 'AI & Analytics', 'Cloud & DevOps'];

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
);

const Footer = () => {
    return (
        <footer>
            <Section tone="dark" className="overflow-hidden" innerClassName="px-5 pt-12 md:px-8 md:pt-14">
                <div className="pointer-events-none absolute -right-32 -top-20 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[130px]" />
                <div className="relative grid grid-cols-2 gap-10 md:grid-cols-12">
                    <div className="col-span-2 md:col-span-5">
                        <Link href="/" className="flex items-center gap-2.5">
                            <div className="relative h-10 w-10 rounded-xl bg-white p-1.5">
                                <Image src="/logo-mark.png" alt="CommHawk Technologies Pvt. Ltd. logo" fill sizes="36px" className="object-contain" />
                            </div>
                            <span className="flex flex-col leading-none">
                                <span className="font-display text-[1.6rem] font-semibold tracking-[-0.03em] text-white">CommHawk</span>
                                <span className="mt-1.5 text-[0.8rem] tracking-[0.02em] text-white/65">Technologies Pvt. Ltd.</span>
                            </span>
                        </Link>
                        <p className="mt-5 max-w-[340px] text-[0.95rem] leading-relaxed text-white/65">
                            Leading the digital transformation with precision-engineered solutions.
                            Built for scale, designed for excellence.
                        </p>
                        <a
                            href="https://www.linkedin.com/company/commhawk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="CommHawk Technologies Pvt. Ltd. on LinkedIn"
                            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:text-accent"
                        >
                            <LinkedInIcon />
                        </a>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="mb-5 font-display text-[1.25rem] font-medium tracking-[-0.02em] text-white">Company</h4>
                        <ul className="space-y-3">
                            {company.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-white/65 transition-colors hover:text-accent">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="mb-5 font-display text-[1.25rem] font-medium tracking-[-0.02em] text-white">Expertise</h4>
                        <ul className="space-y-3">
                            {expertise.map((item) => (
                                <li key={item} className="text-sm text-white/65">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-3">
                        <h4 className="mb-5 font-display text-[1.25rem] font-medium tracking-[-0.02em] text-white">Contact</h4>
                        <p className="text-sm leading-relaxed text-white/65">
                            <a href="mailto:commhawktechnologies@gmail.com" className="transition-colors hover:text-accent">
                                commhawktechnologies@gmail.com
                            </a>
                        </p>
                        <address className="mt-3 max-w-[280px] text-sm not-italic leading-relaxed text-white/65">
                            2nd Floor, Kanti Factory Rd, near Bank of Baroda, New Colony,
                            Mahatma Gandhi Nagar, Kankarbagh, Patna, Bihar 800020, India
                        </address>
                        <a href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">
                            Schedule a Call
                        </a>
                    </div>
                </div>

                <div className="relative mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row">
                    <p className="text-sm text-white/65">&copy; {new Date().getFullYear()} CommHawk Technologies Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="text-sm text-white/65 transition-colors hover:text-accent">Privacy Policy</a>
                        <a href="#" className="text-sm text-white/65 transition-colors hover:text-accent">Terms of Service</a>
                    </div>
                </div>
            </Section>
        </footer>
    );
};

export default Footer;
