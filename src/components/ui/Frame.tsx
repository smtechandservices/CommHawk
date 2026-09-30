'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// Small "+" marker drawn where frame lines intersect.
export const Crosshair = ({ className = '' }: { className?: string }) => (
    <span aria-hidden className={`pointer-events-none absolute z-20 h-[13px] w-[13px] ${className}`}>
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink" />
        <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-ink" />
    </span>
);

/**
 * Full-width section with a bottom divider, wrapped around a centred
 * 1324px column that carries the vertical frame lines and crosshairs.
 */
export const Section = ({
    id,
    children,
    className = '',
    innerClassName = '',
    divider = true,
}: {
    id?: string;
    children: ReactNode;
    className?: string;
    innerClassName?: string;
    divider?: boolean;
}) => (
    <section id={id} className={`relative ${divider ? 'border-b border-line' : ''} ${className}`}>
        <div className="relative mx-auto max-w-[1324px] border-x border-line">
            <div className={`relative ${innerClassName}`}>{children}</div>
            {divider && (
                <>
                    <Crosshair className="-bottom-[7px] -left-[7px] hidden xl:block" />
                    <Crosshair className="-bottom-[7px] -right-[7px] hidden xl:block" />
                </>
            )}
        </div>
    </section>
);

export const Eyebrow = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <span className={`block text-[0.95rem] text-body ${className}`}>{children}</span>
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
 * Two-tone display heading: `title` in ink, `muted` on the next line in grey.
 * Words blur/fade in when scrolled into view.
 */
export const Heading = ({
    title,
    muted,
    as = 'h2',
    align = 'left',
    size = 'lg',
    className = '',
}: {
    title: string;
    muted?: string;
    as?: 'h1' | 'h2';
    align?: 'left' | 'center';
    size?: 'xl' | 'lg' | 'md';
    className?: string;
}) => {
    const Tag = as === 'h1' ? motion.h1 : motion.h2;
    const sizes = {
        xl: 'text-[2.6rem] sm:text-[3.6rem] lg:text-[4.4rem] leading-[1.05]',
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
            <Words text={title} offset={0} className="text-ink" />
            {muted && (
                <>
                    <br />
                    <Words text={muted} offset={titleCount} className="text-subtle" />
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
