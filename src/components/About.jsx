import { profile } from "../data/data";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Tentang Saya</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{profile.description}</p>
    </section>
  );
}
