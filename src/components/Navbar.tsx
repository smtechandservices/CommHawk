'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Image from 'next/image';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      className="absolute top-0 left-0 w-full z-[1000] py-6 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center px-6 md:px-[60px] mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/logo-trans.png"
              alt="CommHawk Logo"
              fill
              className="object-contain brightness-150"
            />
          </div>
          <span className="text-xl font-bold tracking-[0.2em] text-white">
            COMMHAWK
          </span>
        </Link>
        <ul className="hidden md:flex gap-12">
          {['Services', 'Work', 'About', 'Connect'].map((item) => (
            <li key={item}>
              <Link
                href={`/#${item.toLowerCase()}`}
                className="text-[0.8rem] uppercase tracking-widest font-medium text-white/80 hover:text-neon transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 z-[1100]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[1050] flex flex-col items-center justify-center gap-10 md:hidden"
            >
              {['Services', 'Work', 'About Us', 'Connect'].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl uppercase tracking-[0.3em] font-bold text-white hover:text-neon transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-10"
              >
                <div className="w-12 h-[1px] bg-neon/50 mx-auto mb-6" />
                <p className="text-[0.6rem] text-white/40 tracking-[0.4em] uppercase">CommHawk Solutions</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
