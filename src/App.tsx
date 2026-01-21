import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { VideoShowcaseSection } from './components/VideoShowcaseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProjectsSection />
        <VideoShowcaseSection />
        <TestimonialsSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
