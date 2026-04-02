'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center px-[60px] mx-auto">
        <div className="text-xl font-bold tracking-[0.2em] text-white">
          <Link href="/">COMMHAWK</Link>
        </div>
        <ul className="flex gap-12">
          {['Services', 'Work', 'Connect'].map((item) => (
            <li key={item}>
              <Link
                href={`/#${item.toLowerCase()}`}
                className="text-[0.8rem] uppercase tracking-widest font-medium text-white/60 hover:text-neon transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
