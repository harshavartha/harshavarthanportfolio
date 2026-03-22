import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Recognition } from './components/Recognition';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3 seconds duration for the premium loading sequence to complete before fading out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="noise-bg" />
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <main className="relative bg-background">
        <Hero />
        <About />
        <Projects />
        <Recognition />
        <Gallery />
        <Skills />
        <Certifications />
        <Footer />
      </main>
    </>
  );
}

export default App;
