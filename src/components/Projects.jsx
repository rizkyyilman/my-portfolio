import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

// ── All projects with real GitHub links ───────────────────────────────────────
const projects = [
  {
    number: '01',
    title: 'PrediksiSaham GRU',
    subtitle: 'Deep Learning · Data Science',
    description:
      'Model prediksi harga saham menggunakan Gated Recurrent Units (GRU) dalam deep learning. Mencakup preprocessing data, training model, evaluasi, dan teknik forecasting time-series.',
    technologies: ['Python', 'GRU / Deep Learning', 'Time-Series', 'Pandas'],
    points: [
      'Implemented data preprocessing, model training, and evaluation to predict stock prices.',
      'Applied time-series forecasting techniques to improve prediction accuracy.',
    ],
    github: 'https://github.com/rizkyyilman/PrediksiSaham_GRU',
    demo: 'https://github.com/rizkyyilman/PrediksiSaham_GRU',
    featured: true,
    year: '2024',
    status: 'Completed',
  },
  {
    number: '02',
    title: 'Docmart E-Commerce',
    subtitle: 'Web Development · Health',
    description:
      'Platform e-commerce kesehatan dengan fokus pada pengalaman pengguna yang seamless, manajemen produk, autentikasi pengguna, dan sistem pembayaran terintegrasi.',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    points: [
      'Designed and developed a health e-commerce platform, focusing on seamless user experience.',
      'Integrated product management, user authentication, and payment systems.',
      'Optimized platform performance for fast and secure transactions.',
    ],
    github: 'https://github.com/rizkyyilman/Docmart-Ecommerce',
    demo: 'https://github.com/rizkyyilman/Docmart-Ecommerce',
    featured: true,
    year: '2024',
    status: 'Completed',
  },
  {
    number: '03',
    title: 'GoStudy Application',
    subtitle: 'Mobile & Web · Education',
    description:
      'Platform kolaborasi belajar real-time untuk mahasiswa — fitur chat, pembentukan grup, dan berbagi resource belajar. Dikembangkan sebagai proyek akhir MSIB Binar Academy.',
    technologies: ['Kotlin', 'JavaScript', 'Android Studio', 'Firebase'],
    points: [
      'Built a collaborative learning platform for students to connect and study together.',
      'Implemented real-time chat, group creation, and study resource sharing features.',
      'Used Kotlin for Android front-end and JavaScript for back-end development.',
    ],
    github: 'https://github.com/rizkyyilman/GoStudy-Group4',
    demo: 'https://github.com/rizkyyilman/GoStudy-Group4',
    featured: true,
    year: '2023',
    status: 'Completed',
  },
  {
    number: '04',
    title: 'Flashnews',
    subtitle: 'Mobile App · Flutter',
    description:
      'Aplikasi berita Android berbasis Flutter yang mengambil data dari News API secara real-time. Menampilkan artikel terkini dengan UI yang bersih dan navigasi yang intuitif.',
    technologies: ['Flutter', 'Dart', 'News API', 'Firebase'],
    points: [
      'Built an Android news application using Flutter framework.',
      'Integrated News API to fetch and display real-time news articles.',
      'Implemented clean UI with smooth navigation between news categories.',
    ],
    github: 'https://github.com/rizkyyilman/Flashnews',
    demo: 'https://github.com/rizkyyilman/Flashnews',
    featured: false,
    year: '2023',
    status: 'Completed',
  },
  {
    number: '05',
    title: 'Movie App',
    subtitle: 'Web Development · Laravel',
    description:
      'Website pencarian dan katalog film yang mengambil data dari movie API. Dibangun menggunakan Laravel dengan tampilan yang responsif dan fitur pencarian yang cepat.',
    technologies: ['PHP', 'Laravel', 'Blade', 'Movie API'],
    points: [
      'Developed a web application to fetch and display movie data from an external API.',
      'Built using Laravel framework with Blade templating for a clean MVC structure.',
      'Implemented search and filtering functionality for browsing movie catalog.',
    ],
    github: 'https://github.com/rizkyyilman/movie-app',
    demo: 'https://github.com/rizkyyilman/movie-app',
    featured: false,
    year: '2023',
    status: 'Completed',
  },
  {
    number: '06',
    title: 'Fashionbytes',
    subtitle: 'Mobile App · Android',
    description:
      'Aplikasi e-commerce fashion Android berbasis Kotlin dengan fitur browsing produk, keranjang belanja, dan alur pembelian yang mulus untuk pengalaman belanja yang modern.',
    technologies: ['Kotlin', 'Android Studio', 'XML', 'Retrofit'],
    points: [
      'Built a fashion e-commerce Android application using Kotlin.',
      'Implemented product catalog, shopping cart, and checkout features.',
      'Designed a modern and responsive UI following Material Design guidelines.',
    ],
    github: 'https://github.com/rizkyyilman/Fashionbytes',
    demo: 'https://github.com/rizkyyilman/Fashionbytes',
    featured: false,
    year: '2023',
    status: 'Completed',
  },
];

// ── Hook ──────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.05) {
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
      transition={{ duration: 0.65, delay: Math.min(index * 0.09, 0.5), ease: [0.22, 1, 0.36, 1] }}
      className="glass-card glass-card-hover p-7 group relative overflow-hidden flex flex-col"
    >
      {/* Number watermark */}
      <span
        className="absolute top-4 right-5 font-display select-none pointer-events-none"
        style={{ fontSize: '4.5rem', color: 'var(--gold-400)', opacity: 0.04, lineHeight: 1 }}
      >
        {project.number}
      </span>

      {/* Meta */}
      <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
            <span className="font-mono-dm text-xs" style={{ color: 'var(--gold-500)' }}>{project.number}</span>
            <span className="section-label" style={{ fontSize: '0.58rem' }}>{project.year}</span>
            <span className="px-2 py-0.5 rounded-full text-xs font-mono-dm status-completed" style={{ fontSize: '0.62rem' }}>
              {project.status}
            </span>
          </div>
          <h3 className="font-display text-xl" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
          <p className="section-label mt-0.5" style={{ fontSize: '0.6rem', color: 'var(--gold-500)' }}>{project.subtitle}</p>
        </div>

        {project.featured && (
          <span className="text-xs px-2.5 py-1 rounded-full font-mono-dm flex-shrink-0"
            style={{ background: 'rgba(212,175,55,0.12)', color: 'var(--gold-400)', border: '1px solid rgba(212,175,55,0.25)', fontSize: '0.62rem' }}>
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mb-4 leading-relaxed flex-1" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        {project.description}
      </p>

      {/* Expandable bullet points */}
      {expanded && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4 space-y-1.5 pl-4"
          style={{ listStyle: 'disc', color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.7 }}
        >
          {project.points.map((pt, i) => <li key={i}>{pt}</li>)}
        </motion.ul>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1 text-xs mb-5 self-start transition-colors duration-200"
        style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Mono, monospace', padding: 0 }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-400)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
      >
        {expanded ? <><ChevronUp size={12} /> hide details</> : <><ChevronDown size={12} /> show details</>}
      </button>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map(tech => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm transition-all duration-300"
          style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-400)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <Github size={14} /> Source Code
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group/link"
          style={{ color: 'var(--gold-400)', textDecoration: 'none' }}
        >
          View Repo
          <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      {/* Bottom shimmer */}
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold-400), transparent)' }} />
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export function Projects() {
  const [sectionRef, inView] = useInView(0.05);
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter(p => p.featured);
  const others   = projects.filter(p => !p.featured);

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
            Koleksi proyek nyata — web, mobile, dan data science. Setiap project dapat dikunjungi langsung di GitHub.
          </p>
        </motion.div>

        {/* Featured — 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.number} project={p} index={i} inView={inView} />
          ))}
        </div>

        {/* Other projects — collapsible */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Toggle row */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full flex items-center justify-between gap-4 py-4 px-5 mb-4 rounded-xl transition-all duration-300"
            style={{
              background: 'rgba(212,175,55,0.05)',
              border: '1px solid rgba(212,175,55,0.15)',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(212,175,55,0.09)';
              e.currentTarget.style.color = 'var(--gold-400)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(212,175,55,0.05)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <span>
              {showAll ? 'Sembunyikan proyek lainnya' : `Lihat ${others.length} proyek lainnya →`}
            </span>
            <motion.div animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={16} />
            </motion.div>
          </button>

          {/* Other cards grid */}
          {showAll && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-5"
            >
              {others.map((p, i) => (
                <ProjectCard key={p.number} project={p} index={i} inView={inView} />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-14"
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
            Lihat Semua di GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}