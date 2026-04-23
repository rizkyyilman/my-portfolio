import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { Code, Database, Globe, Cpu } from 'lucide-react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Frontend",
      description: "React, Next.js, TypeScript",
      percentage: 90,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Backend", 
      description: "Node.js, Python, PHP",
      percentage: 85,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database",
      description: "MongoDB, MySQL, PostgreSQL", 
      percentage: 80,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "DevOps",
      description: "Git, Docker, AWS",
      percentage: 75,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-4 text-center">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl text-blue-400 mb-4">Passion & Expertise</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Saya seorang developer yang fokus pada pembuatan aplikasi web modern dengan teknologi terbaru. 
                Dengan pengalaman dalam pengembangan frontend dan backend, saya selalu berusaha menciptakan 
                solusi yang inovatif dan user-friendly.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Keahlian saya meliputi React.js, Next.js, TypeScript, Node.js, dan berbagai teknologi modern 
                lainnya. Saya juga memiliki minat yang besar dalam data analysis dan machine learning.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl text-blue-400 mb-4">Journey & Goals</h3>
              <p className="text-gray-300 leading-relaxed">
                Perjalanan saya dimulai dari rasa ingin tahu tentang bagaimana website bekerja. 
                Kini, saya fokus pada pengembangan aplikasi yang tidak hanya fungsional, 
                tetapi juga memberikan pengalaman pengguna yang luar biasa.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-8 text-center">Skills & Expertise</h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white text-lg">{skill.title}</h4>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                  <span className="text-blue-400">{skill.percentage}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}