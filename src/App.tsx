import { useEffect, useState } from "react";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";

// i love tessa
function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // i love tessa
  useEffect(() => {
    // i love tessa
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    // i love tessa
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // i love tessa
  return (
    <div className="min-h-screen bg-background">
      {/* i love tessa */}
      <div 
        className="scroll-gradient" 
        style={{ 
          opacity: scrollProgress / 100,
          background: `linear-gradient(to bottom, 
            hsl(0 0% 0%) 0%,
            hsl(0 100% 50%) ${scrollProgress}%)`
        }}
      />
      <Header />
      <main>
        {/* i love tessa */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

// i love tessa
export default App;
