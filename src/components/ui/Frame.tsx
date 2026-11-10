'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Tone = 'light' | 'tint' | 'dark' | 'clear';

const tones: Record<Tone, string> = {
    light: 'bg-white',
    tint: 'bg-canvas',
    dark: 'bg-navy-deep text-white',
    clear: '',
};

/** Full-bleed section with a centred 1240px column. `tone` sets the background band. */
export const Section = ({
    id,
    children,
    className = '',
    innerClassName = '',
    tone = 'light',
}: {
    id?: string;
    children: ReactNode;
    className?: string;
    innerClassName?: string;
    tone?: Tone;
    divider?: boolean;
}) => (
    <section id={id} className={`relative ${tones[tone]} ${className}`}>
        <div className="relative mx-auto max-w-[1240px]">
            <div className={`relative ${innerClassName}`}>{children}</div>
        </div>
    </section>
);

export const Eyebrow = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <span className={`inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent ${className}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {children}
    </span>
);

const Words = ({ text, offset, className }: { text: string; offset: number; className: string }) => (
    <>
        {text.split(' ').map((word, i) => (
            <motion.span
                key={`${word}-${i}`}
                aria-hidden
                className={`inline-block whitespace-pre ${className}`}
                variants={{
                    hidden: { opacity: 0, y: 14, filter: 'blur(8px)' },
                    show: { opacity: 1, y: 0, filter: 'blur(0px)' },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (offset + i) * 0.05 }}
            >
                {word}{' '}
            </motion.span>
        ))}
    </>
);

/**
 * Two-tone display heading: `title` in ink (or white on dark), `muted` on the next line in muted slate.
 * Words blur/fade in when scrolled into view.
 */
export const Heading = ({
    title,
    muted,
    as = 'h2',
    align = 'left',
    size = 'lg',
    tone = 'light',
    className = '',
}: {
    title: string;
    muted?: string;
    as?: 'h1' | 'h2';
    align?: 'left' | 'center';
    size?: '2xl' | 'xl' | 'lg' | 'md';
    tone?: 'light' | 'dark';
    className?: string;
}) => {
    const Tag = as === 'h1' ? motion.h1 : motion.h2;
    const sizes = {
        '2xl': 'text-[2.8rem] sm:text-[4rem] lg:text-[4.9rem] leading-[1.02] tracking-[-0.045em]',
        xl: 'text-[2.3rem] sm:text-[3.1rem] lg:text-[3.8rem] leading-[1.05]',
        lg: 'text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.08]',
        md: 'text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.1]',
    };
    const titleCount = title.split(' ').length;

    return (
        <Tag
            aria-label={muted ? `${title} ${muted}` : title}
            className={`text-balance font-display font-medium tracking-[-0.03em] ${sizes[size]} ${align === 'center' ? 'text-center' : ''} ${className}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
        >
            <Words text={title} offset={0} className={tone === 'dark' ? 'text-white' : 'text-ink'} />
            {muted && (
                <>
                    <br />
                    <Words text={muted} offset={titleCount} className={tone === 'dark' ? 'text-white/45' : 'text-[#7B8AA8]'} />
                </>
            )}
        </Tag>
    );
};

export const FadeIn = ({
    children,
    delay = 0,
    className = '',
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);
