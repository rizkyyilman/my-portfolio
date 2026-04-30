import './App.css';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--charcoal-900)' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}