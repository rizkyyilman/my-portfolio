import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

// ── Real projects from CV ────────────────────────────────────────────────────

const projects = [
  {
    number: '01',
    title: 'Stock Prediction With GRU',
    subtitle: 'Deep Learning',
    description:
      'Model prediksi harga saham menggunakan Gated Recurrent Units (GRU) dalam deep learning. Mencakup preprocessing data, training model, evaluasi, dan teknik forecasting time-series.',
    technologies: ['Python', 'GRU / Deep Learning', 'Time-Series', 'Pandas'],
    points: [
      'Implemented data preprocessing, model training, and evaluation to predict stock prices.',
      'Applied time-series forecasting techniques to improve prediction accuracy.',
    ],
    github: '#',
    demo: '#',
    featured: true,
    year: '2024',
    status: 'Completed',
  },
  {
    number: '02',
    title: 'Health E-Commerce Website',
    subtitle: 'Web Development',
    description:
      'Platform e-commerce kesehatan dengan fokus pada pengalaman pengguna yang seamless, manajemen produk, autentikasi pengguna, dan sistem pembayaran terintegrasi.',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    points: [
      'Designed and developed a health e-commerce platform, focusing on seamless user experience.',
      'Integrated product management, user authentication, and payment systems.',
      'Optimized platform performance for fast and secure transactions.',
    ],
    github: '#',
    demo: '#',
    featured: true,
    year: '2024',
    status: 'Completed',
  },
  {
    number: '03',
    title: 'GoStudy Application',
    subtitle: 'Mobile & Web',
    description:
      'Platform kolaborasi belajar real-time untuk mahasiswa — fitur chat, pembentukan grup, dan berbagi resource belajar. Dikembangkan sebagai proyek akhir MSIB Binar Academy.',
    technologies: ['Kotlin', 'JavaScript', 'Android Studio', 'Firebase'],
    points: [
      'Built a collaborative learning platform for students to connect and study together.',
      'Implemented real-time chat, group creation, and study resource sharing features.',
      'Used Kotlin for Android front-end and JavaScript for back-end development.',
    ],
    github: '#',
    demo: '#',
    featured: false,
    year: '2023',
    status: 'Completed',
  },
];

// ── Hook ──────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index, inView }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card glass-card-hover p-8 group relative overflow-hidden flex flex-col"
    >
      {/* Number watermark */}
      <span
        className="absolute top-4 right-6 font-display select-none pointer-events-none"
        style={{ fontSize: '5rem', color: 'var(--gold-400)', opacity: 0.04, lineHeight: 1 }}
      >
        {project.number}
      </span>

      {/* Meta row */}
      <div className="flex items-start justify-between gap-3 mb-5 flex-wrap">
        <div>
          <div className="flex items-center gap-3 mb-1.5 flex-wrap">
            <span className="font-mono-dm text-xs" style={{ color: 'var(--gold-500)' }}>{project.number}</span>
            <span className="section-label" style={{ fontSize: '0.6rem' }}>{project.year}</span>
            <span
              className="px-2 py-0.5 rounded-full text-xs font-mono-dm status-completed"
              style={{ fontSize: '0.65rem' }}
            >
              {project.status}
            </span>
          </div>
          <h3 className="font-display text-2xl" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
          <p className="section-label mt-0.5" style={{ fontSize: '0.62rem', color: 'var(--gold-500)' }}>
            {project.subtitle}
          </p>
        </div>

        {project.featured && (
          <span className="text-xs px-2.5 py-1 rounded-full font-mono-dm flex-shrink-0"
            style={{ background: 'rgba(212,175,55,0.12)', color: 'var(--gold-400)', border: '1px solid rgba(212,175,55,0.25)', fontSize: '0.65rem' }}>
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mb-5 leading-relaxed flex-1" style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
        {project.description}
      </p>

      {/* Expandable bullet points */}
      {expanded && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-5 space-y-2 pl-4"
          style={{ listStyle: 'disc', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.75 }}
        >
          {project.points.map((pt, i) => <li key={i}>{pt}</li>)}
        </motion.ul>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs mb-6 self-start transition-colors duration-200"
        style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Mono, monospace', padding: 0 }}
        onMouseEnter={e => e.target.style.color = 'var(--gold-400)'}
        onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
      >
        {expanded ? '— hide details' : '+ show details'}
      </button>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-7">
        {project.technologies.map(tech => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-5 pt-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <a href={project.github} className="flex items-center gap-2 text-sm transition-all duration-300"
          style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-400)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <Github size={14} /> Source
        </a>
        <a href={project.demo} className="flex items-center gap-1.5 text-sm font-medium transition-all duration-300"
          style={{ color: 'var(--gold-400)', textDecoration: 'none' }}
        >
          Live Demo <ArrowRight size={13} />
        </a>
      </div>

      {/* Bottom shimmer line */}
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-400), transparent)' }} />
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export function Projects() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--charcoal-900) 0%, var(--charcoal-800) 40%, var(--charcoal-900) 100%)' }}
    >
      <div className="orb orb-gold" style={{ width: 600, height: 600, top: '20%', left: '-15%', opacity: 0.25 }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="section-label mb-3">02 — Work</p>
            <h2 className="font-display text-5xl md:text-6xl" style={{ color: 'var(--text-primary)' }}>
              Featured <span className="text-gold">Projects</span>
            </h2>
            <div className="divider-gold mt-4" />
          </div>
          <p className="max-w-xs" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75 }}>
            Proyek nyata yang dikerjakan selama perkuliahan dan program MSIB, mencakup web, mobile, dan data science.
          </p>
        </motion.div>

        {/* Grid — 3 projects, 2 on top + 1 full width centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((p, i) => (
            <ProjectCard key={p.number} project={p} index={i} inView={inView} />
          ))}
        </div>
        <div className="mt-6 max-w-2xl mx-auto">
          {projects.slice(2).map((p, i) => (
            <ProjectCard key={p.number} project={p} index={i + 2} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/rizkyyilman"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            className="btn-ghost inline-flex"
            style={{ textDecoration: 'none' }}
          >
            <Github size={15} />
            Lihat GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}