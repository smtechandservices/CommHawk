'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const links = [
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#businesses' },
  { name: 'About', href: '/#about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'MOUs', href: '/mou' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
    <nav className={`sticky top-0 z-[1000] w-full border-b backdrop-blur-xl transition-all ${scrolled ? 'border-line shadow-[0_8px_30px_-20px_rgba(10,31,68,0.35)]' : 'border-transparent'} ${mobileMenuOpen ? 'bg-white' : 'bg-white/85'}`}>
      <div className="relative mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 md:h-[80px] md:px-8">
        <Link href="/" aria-label="CommHawk Technologies Pvt. Ltd. home" className="flex items-center gap-2.5">
          <div className="relative h-8 w-8">
            <Image
              src="/logo-mark.png"
              alt="CommHawk Technologies Pvt. Ltd. logo"
              fill
              sizes="32px"
              className="object-contain"
            />
          </div>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.25rem] font-semibold tracking-[-0.03em] text-ink">CommHawk</span>
            <span className="mt-1 text-[0.68rem] tracking-[0.02em] text-body">Technologies Pvt. Ltd.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-[0.9rem] font-medium text-body transition-colors hover:text-accent">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/#connect" className="btn-primary hidden md:inline-flex">
          Start a Project
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="z-[1100] p-2 text-ink md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

    </nav>

      {/* Mobile Menu Overlay — kept outside <nav>, whose backdrop-filter would otherwise trap `position: fixed` inside the 72px bar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-[1050] flex flex-col overflow-y-auto bg-canvas px-5 pb-10 md:hidden"
          >
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="shrink-0 border-b border-line py-5 font-display text-2xl tracking-[-0.02em] text-ink"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/#connect" onClick={() => setMobileMenuOpen(false)} className="btn-primary mt-8 w-full shrink-0">
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
