import { motion } from "framer-motion";
import { profile } from "../data/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-screen px-4 pt-20"
    >
      <motion.img
        src={profile.image}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-6 border-4 border-blue-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {profile.name}
      </motion.h1>

      <p className="text-xl text-gray-600 dark:text-gray-300">{profile.role}</p>

      <a
        href="#contact"
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
      >
        Hubungi Saya
      </a>
    </section>
  );
}
