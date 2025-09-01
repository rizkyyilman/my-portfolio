import { contact } from "../data/data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Kontak</h2>
      <p className="text-gray-600 mb-4">Hubungi saya melalui:</p>
      <div className="flex justify-center gap-6">
        <a
          href={`mailto:${contact.email}`}
          className="text-blue-500 font-semibold hover:underline"
        >
          Email
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          className="text-blue-700 font-semibold hover:underline"
        >
          LinkedIn
        </a>
        <a
          href={contact.github}
          target="_blank"
          className="text-gray-800 font-semibold hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
