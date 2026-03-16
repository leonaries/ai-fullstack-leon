import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 border-t border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--text-secondary)]">
          <p>&copy; 2026 Leon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
