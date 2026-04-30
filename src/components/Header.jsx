import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about',    label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact',  label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled
          ? 'rgba(10, 10, 15, 0.88)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(24px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(212,175,55,0.1)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="text-gold font-display text-xl tracking-wide"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Rizky<span style={{ color: 'var(--text-muted)', fontWeight: 300 }}> Ilman</span>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex btn-ghost text-sm"
          >
            Let's Talk
          </motion.button>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.93 }}
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--text-primary)', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen
                ? <motion.span key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                    <X size={22} />
                  </motion.span>
                : <motion.span key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} />
                  </motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(10, 10, 15, 0.95)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(212,175,55,0.1)',
            }}
          >
            <div className="max-w-6xl mx-auto px-6 py-6 space-y-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={e => { e.target.style.color = 'var(--gold-400)'; e.target.style.background = 'rgba(212,175,55,0.05)'; }}
                  onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)'; e.target.style.background = 'none'; }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-4">
                <button onClick={() => scrollToSection('contact')} className="btn-gold w-full justify-center text-sm">
                  Let's Talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}