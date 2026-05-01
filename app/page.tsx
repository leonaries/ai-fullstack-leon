import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import IntroWrapper from '@/components/IntroWrapper';

export default function Home() {
  return (
    <IntroWrapper>
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
        <footer className="py-8 border-t border-[var(--card-border)] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--text-secondary)]">
            <p className="font-mono text-sm">&lt;/&gt; Built by Leon &copy; 2026</p>
          </div>
        </footer>
      </div>
    </IntroWrapper>
  );
}
