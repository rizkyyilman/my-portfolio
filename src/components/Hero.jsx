import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback.jsx';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Mail,     href: 'mailto:nuugrahaaa@gmail.com',         label: 'Email' },
  { icon: Github,   href: 'https://github.com/rizkyyilman',      label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/rizkyyilman', label: 'LinkedIn' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden noise-overlay"
      style={{ background: 'linear-gradient(160deg, var(--charcoal-900) 0%, var(--charcoal-800) 50%, var(--charcoal-900) 100%)' }}
    >
      {/* Ambient orbs */}
      <div className="orb orb-gold"   style={{ width: 700, height: 700, top: -200,   left: -200,  opacity: 0.6 }} />
      <div className="orb orb-silver" style={{ width: 500, height: 500, bottom: -100, right: -100, opacity: 0.8 }} />
      <div className="orb orb-gold"   style={{ width: 300, height: 300, top: '40%',  right: '10%', opacity: 0.35 }} />

      {/* Decorative grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-label mb-8"
        >
          ✦ Portfolio 2025
        </motion.p>

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-36 h-36 mx-auto mb-10 animate-float"
        >
          <svg className="profile-ring absolute inset-0 w-full h-full" viewBox="0 0 144 144" fill="none">
            <circle cx="72" cy="72" r="68" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="6 6" />
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#d4af37" stopOpacity="0.8" />
                <stop offset="50%"  stopColor="#f5e27a" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-3 rounded-full overflow-hidden animate-pulse-gold"
            style={{ border: '1px solid rgba(212,175,55,0.35)', background: 'var(--charcoal-700)' }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1675277714353-376f525d935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NTc2MDM3NjV8MA&ixlib=rb-4.1.0&q=80&w=400"
              alt="Rizky Ilman"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-gold mb-4"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 500 }}
        >
          Rizky Ilman
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="section-label text-xs">Information Systems</span>
          <span style={{ color: 'var(--gold-500)', fontSize: '0.5rem' }}>◆</span>
          <span className="section-label text-xs">Web Developer</span>
          <span style={{ color: 'var(--gold-500)', fontSize: '0.5rem' }}>◆</span>
          <span className="section-label text-xs">Data Enthusiast</span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem' }}
        >
          Passionate developer dengan latar belakang Sistem Informasi yang antusias membangun
          aplikasi web modern, mobile, dan solusi berbasis data.
        </motion.p>



        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex justify-center gap-4 mb-12"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 flex items-center justify-center rounded-full glass-card transition-all duration-300"
              style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-400)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            Lihat Proyek
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost"
          >
            Hubungi Saya
          </motion.button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="section-label" style={{ fontSize: '0.65rem', opacity: 0.6 }}>scroll</span>
          <div className="bounce-gentle" style={{ color: 'var(--gold-400)', opacity: 0.7 }}>
            <ArrowDown size={16} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}