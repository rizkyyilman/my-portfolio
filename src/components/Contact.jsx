import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Instagram, MapPin, Send, MessageCircle } from 'lucide-react';

// ── Real contact info from CV ─────────────────────────────────────────────────
const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'nuugrahaaa@gmail.com',
    link: 'mailto:nuugrahaaa@gmail.com',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'linkedin.com/in/rizkyyilman',
    link: 'https://linkedin.com/in/rizkyyilman',
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'github.com/rizkyyilman',
    link: 'https://github.com/rizkyyilman',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    description: '@rizkyyilman',
    link: 'https://instagram.com/rizkyyilman',
  },
];

// ── Hook ──────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Main Component ────────────────────────────────────────────────────────────
export function Contact() {
  const [sectionRef, inView] = useInView(0.1);
  const [focused, setFocused] = useState(null);

  const inputStyle = (name) => ({
    width: '100%',
    padding: '0.875rem 1.25rem',
    background: focused === name ? 'rgba(212,175,55,0.04)' : 'rgba(10,10,15,0.6)',
    border: `1px solid ${focused === name ? 'rgba(212,175,55,0.4)' : 'rgba(255,255,255,0.07)'}`,
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: focused === name ? '0 0 0 3px rgba(212,175,55,0.06)' : 'none',
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--charcoal-900) 0%, var(--charcoal-800) 60%, var(--charcoal-900) 100%)' }}
    >
      <div className="orb orb-gold"   style={{ width: 500, height: 500, top: 0,     right: '-10%', opacity: 0.3 }} />
      <div className="orb orb-silver" style={{ width: 400, height: 400, bottom: 0,  left: '-10%',  opacity: 0.4 }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="section-label mb-3">03 — Contact</p>
          <h2 className="font-display text-5xl md:text-6xl" style={{ color: 'var(--text-primary)' }}>
            Mari <span className="text-gold">Berkolaborasi</span>
          </h2>
          <div className="divider-gold mt-4" />
          <p className="mt-5 max-w-lg" style={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
            Saya terbuka untuk peluang kerja, proyek baru, kolaborasi kreatif, maupun sekadar berbincang tentang teknologi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-4"
          >
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.title}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.09 }}
                whileHover={{ x: 5 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                  textDecoration: 'none', padding: '1.25rem 1.5rem',
                  background: 'rgba(22,22,34,0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  borderRadius: '14px',
                  transition: 'all 0.35s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.45)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)'}
              >
                <div className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: 'var(--gold-400)' }}
                >
                  <method.icon size={18} />
                </div>
                <div>
                  <div className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>{method.title}</div>
                  <div className="text-sm font-mono-dm" style={{ color: 'var(--text-muted)' }}>{method.description}</div>
                </div>
              </motion.a>
            ))}

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-card p-5 flex items-center gap-4 mt-2"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: 'var(--gold-400)' }}
              >
                <MapPin size={18} />
              </div>
              <div>
                <div className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                  Sidoarjo / Surabaya, Jawa Timur, Indonesia
                </div>
                <div className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  Terbuka untuk remote & on-site
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle size={18} style={{ color: 'var(--gold-400)' }} />
              <h3 className="font-display text-2xl" style={{ color: 'var(--text-primary)' }}>Kirim Pesan</h3>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.78rem', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
                    Nama
                  </label>
                  <input type="text" placeholder="Nama Anda"
                    style={inputStyle('nama')}
                    onFocus={() => setFocused('nama')} onBlur={() => setFocused(null)} />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.78rem', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
                    Email
                  </label>
                  <input type="email" placeholder="email@example.com"
                    style={inputStyle('email')}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.78rem', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
                  Subject
                </label>
                <input type="text" placeholder="Topik diskusi"
                  style={inputStyle('subject')}
                  onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)} />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.78rem', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
                  Pesan
                </label>
                <textarea rows={5} placeholder="Ceritakan tentang proyek, peluang kerja, atau ide Anda..."
                  style={{ ...inputStyle('pesan'), resize: 'none' }}
                  onFocus={() => setFocused('pesan')} onBlur={() => setFocused(null)} />
              </div>

              <motion.button type="submit"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="btn-gold w-full justify-center mt-2"
              >
                <Send size={15} />
                Kirim Pesan
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}