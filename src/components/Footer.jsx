import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const links = [
  { id: 'about',    label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact' },
];

const socials = [
  { icon: Mail,      href: 'mailto:nuugrahaaa@gmail.com',         label: 'Email' },
  { icon: Github,    href: 'https://github.com/rizkyyilman',      label: 'GitHub' },
  { icon: Linkedin,  href: 'https://linkedin.com/in/rizkyyilman', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/rizkyyilman',   label: 'Instagram' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 overflow-hidden"
      style={{ background: 'var(--charcoal-800)', borderTop: '1px solid rgba(212,175,55,0.1)' }}
    >
      <div className="orb orb-gold" style={{ width: 400, height: 400, top: '-50%', left: '30%', opacity: 0.15 }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl text-gold mb-1">Rizky Ilman</h3>
            <p className="text-xs font-mono-dm mb-3" style={{ color: 'var(--text-muted)' }}>
              S1 Sistem Informasi · UPN "Veteran" Jawa Timur
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Fresh graduate yang antusias dalam pengembangan web dan data science. Terbuka untuk peluang baru.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300"
                  style={{
                    background: 'rgba(212,175,55,0.06)',
                    border: '1px solid rgba(212,175,55,0.15)',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--gold-400)';
                    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)';
                    e.currentTarget.style.background = 'rgba(212,175,55,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)';
                    e.currentTarget.style.background = 'rgba(212,175,55,0.06)';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="section-label mb-5" style={{ fontSize: '0.65rem' }}>Navigation</p>
            <div className="space-y-3">
              {links.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sm transition-all duration-300"
                  style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'Inter, sans-serif' }}
                  onMouseEnter={e => { e.target.style.color = 'var(--gold-400)'; e.target.style.paddingLeft = '8px'; }}
                  onMouseLeave={e => { e.target.style.color = 'var(--text-muted)'; e.target.style.paddingLeft = '0'; }}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="section-label mb-5" style={{ fontSize: '0.65rem' }}>Get In Touch</p>
            <div className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <p>Sidoarjo, Jawa Timur, Indonesia</p>
              <a
                href="mailto:nuugrahaaa@gmail.com"
                className="block transition-colors duration-300 font-mono-dm text-xs"
                style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold-400)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                nuugrahaaa@gmail.com
              </a>
              <p>Open for full-time & freelance opportunities</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            <span>© {year} Made with</span>
            <motion.div animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Heart size={13} style={{ color: 'var(--gold-400)', fill: 'var(--gold-400)' }} />
            </motion.div>
            <span>by <span style={{ color: 'var(--gold-400)' }}>Rizky Ilman</span></span>
          </div>

          <motion.button
            whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.2)',
              borderRadius: '9999px',
              padding: '0.5rem 1.25rem',
              color: 'var(--gold-400)',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.14)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(212,175,55,0.08)'}
          >
            <ArrowUp size={14} />
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}