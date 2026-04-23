import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { ExternalLink, Github, Star, Calendar } from 'lucide-react';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "Website pribadi modern dengan animasi dan efek visual yang menakjubkan",
      technologies: ["React", "TypeScript", "TailwindCSS", "Motion"],
      github: "#",
      demo: "#",
      featured: true,
      year: "2025",
      status: "Completed"
    },
    {
      title: "E-Commerce Platform", 
      description: "Platform belanja online lengkap dengan sistem pembayaran dan manajemen inventory",
      technologies: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
      github: "#",
      demo: "#",
      featured: true,
      year: "2024",
      status: "In Progress"
    },
    {
      title: "Task Management System",
      description: "Aplikasi manajemen tugas real-time dengan kolaborasi tim dan notifikasi",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
      featured: false,
      year: "2024",
      status: "Completed"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Dashboard analisis data interaktif dengan visualisasi dan reporting otomatis",
      technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
      github: "#",
      demo: "#",
      featured: false,
      year: "2024",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Koleksi proyek yang menunjukkan keahlian dan dedikasi saya dalam pengembangan aplikasi web
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                project.featured 
                  ? 'border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/20' 
                  : 'border-gray-700/50 hover:border-purple-400/50 hover:shadow-purple-500/20'
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      project.featured
                        ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30'
                        : 'bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Github size={16} />
                  Code
                </a>
                <a 
                  href={project.demo}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    project.featured
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                      : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white'
                  }`}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            Lihat Semua Proyek
          </button>
        </motion.div>
      </div>
    </section>
  );
}