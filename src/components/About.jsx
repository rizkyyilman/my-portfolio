import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Award, Wrench } from 'lucide-react';

// ── Real data from CV ─────────────────────────────────────────────────────────

const skills = [
  { title: 'Python',         category: 'Language' },
  { title: 'PHP',            category: 'Language' },
  { title: 'HTML & CSS',     category: 'Language' },
  { title: 'MySQL',          category: 'Database' },
  { title: 'Kotlin',         category: 'Mobile' },
  { title: 'Figma',          category: 'Design' },
  { title: 'Android Studio', category: 'Tool' },
  { title: 'Analysis Data',  category: 'Data' },
  { title: 'Problem Solving',category: 'Soft Skill' },
  { title: 'Microsoft Office',category: 'Tool' },
];

const proficiencies = [
  { label: 'Web Development',    pct: 85 },
  { label: 'Data Science / ML',  pct: 80 },
  { label: 'Mobile (Android)',    pct: 75 },
  { label: 'Database',           pct: 80 },
];

const education = [
  {
    year: '2021 – 2025',
    degree: 'S1 Sistem Informasi',
    institution: 'UPN "Veteran" Jawa Timur',
    detail: 'GPA 3.70 / 4.00',
  },
  {
    year: '2018 – 2021',
    degree: 'SMA — IPA',
    institution: 'SMA Negeri 1 Waru',
    detail: '',
  },
  {
    year: '2015 – 2018',
    degree: 'SMP',
    institution: 'SMP Negeri 2 Waru',
    detail: '',
  },
];

const experience = [
  {
    batch: 'MSIB Batch 6 · 2024',
    role: 'Data Scientist',
    company: 'BISA AI ACADEMY',
    points: [
      'Menyelesaikan seluruh kelas dan asesmen di platform BISA AI ACADEMY.',
      'Mengembangkan proyek akhir kelompok untuk prediksi menggunakan machine learning.',
    ],
  },
  {
    batch: 'MSIB Batch 5 · 2023',
    role: 'Android Engineering',
    company: 'Binar Academy',
    points: [
      'Menyelesaikan Android Challenge di Binar Academy.',
      'Mengembangkan proyek akhir "GoStudy" — platform kolaborasi belajar online.',
    ],
  },
];

const certifications = [
  { title: 'Android Engineering Certification', issuer: 'Binar Academy — MSIB Batch 5' },
  { title: 'Data Scientist Certification',      issuer: 'BISA AI ACADEMY — MSIB Batch 6' },
  { title: 'DSBIZ (Data Science)',              issuer: 'MSIB Batch 6' },
  { title: 'AIBIZ (Artificial Intelligence)',   issuer: 'MSIB Batch 6' },
  { title: 'BNSP Junior Web Programming',       issuer: 'UPN Veteran Jawa Timur' },
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

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionTab({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all duration-300"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: active ? 500 : 400,
        cursor: 'pointer',
        background: active ? 'rgba(212,175,55,0.15)' : 'transparent',
        border: active ? '1px solid rgba(212,175,55,0.4)' : '1px solid rgba(255,255,255,0.07)',
        color: active ? 'var(--gold-400)' : 'var(--text-muted)',
      }}
    >
      <Icon size={14} />
      {label}
    </button>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export function About() {
  const [sectionRef, inView] = useInView(0.1);
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills',    label: 'Skills',       icon: Wrench },
    { id: 'education', label: 'Pendidikan',   icon: GraduationCap },
    { id: 'experience',label: 'Pengalaman',   icon: Briefcase },
    { id: 'certs',     label: 'Sertifikasi',  icon: Award },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--charcoal-900) 0%, var(--charcoal-800) 50%, var(--charcoal-900) 100%)' }}
    >
      <div className="orb orb-gold" style={{ width: 600, height: 600, top: '10%', right: '-20%', opacity: 0.3 }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="section-label mb-3">01 — About</p>
          <h2 className="font-display text-5xl md:text-6xl" style={{ color: 'var(--text-primary)' }}>
            Tentang <span className="text-gold">Saya</span>
          </h2>
          <div className="divider-gold mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* LEFT — Bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="font-display text-xl mb-4" style={{ color: 'var(--gold-400)' }}>Profil</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.85 }}>
                Fresh Graduate Sistem Informasi di UPN "Veteran" Jawa Timur dengan IPK 3.70/4.00.
                Memiliki motivasi kerja tinggi, mampu bekerja secara mandiri maupun dalam tim,
                antusias belajar hal baru, serta menjunjung komunikasi, kejujuran, dan tanggung jawab.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { number: '3.70', label: 'IPK' },
                { number: '3+',   label: 'Proyek' },
                { number: '5',    label: 'Sertifikat' },
              ].map(({ number, label }) => (
                <div key={label} className="glass-card glass-card-hover p-4 text-center">
                  <div className="font-display text-2xl text-gold">{number}</div>
                  <div className="section-label mt-1" style={{ fontSize: '0.58rem' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Proficiency bars */}
            <div className="glass-card p-6 space-y-5">
              <p className="section-label" style={{ fontSize: '0.62rem' }}>Profisiensi</p>
              {proficiencies.map((p, i) => (
                <div key={p.label}>
                  <div className="flex justify-between mb-1.5">
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{p.label}</span>
                    <span className="font-mono-dm text-xs" style={{ color: 'var(--gold-400)' }}>{p.pct}%</span>
                  </div>
                  <div className="skill-track">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${p.pct}%` } : {}}
                      transition={{ duration: 1.3, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {/* Tab nav */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map(tab => (
                <SectionTab
                  key={tab.id}
                  icon={tab.icon}
                  label={tab.label}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>

            {/* ── Skills ── */}
            {activeTab === 'skills' && (
              <motion.div key="skills" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="flex flex-wrap gap-3">
                  {skills.map((s, i) => (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                      className="glass-card glass-card-hover px-5 py-3 flex flex-col gap-0.5"
                    >
                      <span style={{ color: 'var(--text-primary)', fontSize: '0.875rem', fontWeight: 500 }}>{s.title}</span>
                      <span className="section-label" style={{ fontSize: '0.58rem' }}>{s.category}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Education ── */}
            {activeTab === 'education' && (
              <motion.div key="education" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="glass-card glass-card-hover p-6 flex gap-5"
                  >
                    <div className="flex-shrink-0 w-1 rounded-full self-stretch"
                      style={{ background: 'linear-gradient(to bottom, var(--gold-400), var(--gold-600))' }} />
                    <div>
                      <span className="font-mono-dm text-xs" style={{ color: 'var(--gold-500)' }}>{edu.year}</span>
                      <h4 className="text-base font-medium mt-1" style={{ color: 'var(--text-primary)' }}>{edu.degree}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{edu.institution}</p>
                      {edu.detail && (
                        <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-mono-dm"
                          style={{ background: 'rgba(212,175,55,0.1)', color: 'var(--gold-400)', border: '1px solid rgba(212,175,55,0.2)' }}>
                          {edu.detail}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* ── Experience ── */}
            {activeTab === 'experience' && (
              <motion.div key="experience" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="glass-card glass-card-hover p-7"
                  >
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div>
                        <h4 className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>{exp.role}</h4>
                        <p style={{ color: 'var(--gold-400)', fontSize: '0.875rem' }}>{exp.company}</p>
                      </div>
                      <span className="font-mono-dm text-xs px-3 py-1 rounded-full"
                        style={{ background: 'rgba(212,175,55,0.08)', color: 'var(--text-muted)', border: '1px solid rgba(212,175,55,0.15)', whiteSpace: 'nowrap' }}>
                        {exp.batch}
                      </span>
                    </div>
                    <ul className="space-y-2 pl-4" style={{ listStyle: 'disc', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                      {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* ── Certifications ── */}
            {activeTab === 'certs' && (
              <motion.div key="certs" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="glass-card glass-card-hover p-5 flex items-center gap-4"
                  >
                    <div className="w-9 h-9 flex-shrink-0 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}>
                      <Award size={16} style={{ color: 'var(--gold-400)' }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{cert.title}</p>
                      <p className="text-xs mt-0.5 font-mono-dm" style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}