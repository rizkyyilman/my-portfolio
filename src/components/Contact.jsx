import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, Instagram, MapPin, Send, MessageCircle } from 'lucide-react';

export function Contact() {
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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "nuugrahaaa@gmail.com",
      link: "mailto:nuugrahaaa@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn", 
      description: "linkedin.com/in/rizkyyilman",
      link: "https://linkedin.com/in/rizkyyilman",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "github.com/rizkyyilman",
      link: "https://github.com/rizkyyilman",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "@rizkyyilman",
      link: "https://instagram.com/rizkyilman",
      color: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-4">
            Mari Berkolaborasi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Saya selalu terbuka untuk proyek baru, ide kreatif, atau sekadar ngobrol tentang teknologi dan inovasi
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl text-white mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-blue-400" />
                Hubungi Saya
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center p-4 bg-gray-700/30 hover:bg-gray-700/50 rounded-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white group-hover:text-blue-400 transition-colors">{method.title}</h4>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
            >
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                Location
              </h3>
              <p className="text-gray-300">Jakarta, Indonesia</p>
              <p className="text-gray-400 text-sm mt-2">Available for remote work worldwide</p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
          >
            <h3 className="text-2xl text-white mb-6">Kirim Pesan</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Nama</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white transition-all duration-300"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white transition-all duration-300"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white transition-all duration-300"
                  placeholder="Topik diskusi"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Pesan</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white transition-all duration-300 resize-none"
                  placeholder="Ceritakan tentang proyek atau ide Anda..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Send className="w-5 h-5" />
                Kirim Pesan
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl text-white mb-4">Ready to start your project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Mari wujudkan ide Anda menjadi kenyataan dengan teknologi terdepan dan desain yang memukau
            </p>
            <a 
              href="mailto:rizky@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Mail className="w-5 h-5" />
              Mari Diskusi
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}