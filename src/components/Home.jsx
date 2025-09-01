import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4 border-4 border-blue-400"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi, I'm Rizky Ilman
      </motion.h1>
      <p className="text-lg text-gray-400 mt-2">Web Developer | Data Enthusiast</p>
      <a
        href="#projects"
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        View My Work
      </a>
    </section>
  );
}
