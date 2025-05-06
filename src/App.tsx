import { useEffect, useState, useRef } from "react";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";

function App() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const petalsRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = totalHeight > 0 ? Math.min(window.scrollY / totalHeight, 1) : 0;
      setScrollPercent(percent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Resize canvas on window resize
    const handleResize = () => {
      if (petalsRef.current) {
        petalsRef.current.width = window.innerWidth;
        petalsRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sakura petals animation logic
  useEffect(() => {
    const canvas = petalsRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Cherry blossom petal shape (drawn as pink ellipses)
    function drawPetal(x: number, y: number, angle: number, scale: number) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.scale(scale, scale);
      ctx.beginPath();
      ctx.ellipse(0, 0, 10, 18, Math.PI / 8, 0, 2 * Math.PI);
      ctx.fillStyle = "#f9b4d0";
      ctx.globalAlpha = 0.75;
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(0, -3, 6, 10, Math.PI / 4, 0, 2 * Math.PI);
      ctx.fillStyle = "#fff6fa";
      ctx.globalAlpha = 0.42;
      ctx.fill();
      ctx.restore();
      ctx.globalAlpha = 1;
    }

    // Petal simulation
    type Petal = {
      x: number;
      y: number;
      vy: number;
      vx: number;
      w: number; // Angle for sway
      scale: number;
      angle: number; // For petal rotation
    };
    const PETAL_COUNT = Math.max(18, Math.floor(window.innerWidth / 30));
    let petals: Petal[] = [];
    function randomPetal(isTop = false): Petal {
      const startY = isTop ? Math.random() * 40 : Math.random() * window.innerHeight;
      return {
        x: Math.random() * window.innerWidth,
        y: startY,
        vy: 0.7 + Math.random() * 1.2,
        vx: (Math.random() - 0.5) * 0.8,
        w: Math.random() * 7,
        scale: 0.5 + Math.random() * 0.8,
        angle: Math.random() * 2 * Math.PI,
      };
    }
    petals = Array.from({ length: PETAL_COUNT }, () => randomPetal());

    // Tracking previous scroll
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let running = true;

    function animate(now: number) {
      if (!running) return;
      const dt = Math.min(32, now - lastTime);
      lastTime = now;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Detect scroll direction
      const currentScrollY = window.scrollY;
      const dScroll = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      const atBottom = Math.abs(window.innerHeight + window.scrollY - document.body.scrollHeight) < 4;
      for (let petal of petals) {
        // Sway
        petal.x += Math.sin(petal.w + now / 1400) * 0.3 + petal.vx;
        petal.w += 0.01;
        if (dScroll > 0 || atBottom) {
          // Scrolling down or at bottom: petals fall
          petal.y += petal.vy * Math.max(0.7, 1 + dScroll * 0.06);
          petal.y += (Math.random() - 0.5) * 0.4;
        } else if (dScroll < 0) {
          // Scrolling up: petals float upward
          petal.y -= Math.abs(petal.vy + dScroll * 0.06);
        }
        // Rotate the petal
        petal.angle += (Math.random() - 0.5) * 0.07;
        // Screen wrap for sides
        if (petal.x > window.innerWidth + 16) petal.x = -20;
        if (petal.x < -20) petal.x = window.innerWidth + 16;
        // When petal falls out of screen bottom
        if (petal.y > window.innerHeight + 26) {
          // Replace petal at random x above top edge (for continuous effect)
          Object.assign(petal, randomPetal(true));
          petal.y = -24;
        }
        // When scrolls past the very top, petals don't rise above
        if (petal.y < -32) {
          petal.y = Math.random() * 8;
        }
        drawPetal(petal.x, petal.y, petal.angle, petal.scale);
      }
      requestAnimationFrame(animate);
    }
    lastTime = performance.now();
    running = true;
    requestAnimationFrame(animate);
    // Cleanup on effect end
    return () => {
      running = false;
    };
  }, []);

  // Interpolates color between #6a040f (blood red) and #0faa1f (green) based on scroll position
  const getGradient = () => {
    // Blood red: rgb(106, 4, 15), Green: rgb(15, 170, 31)
    const r = Math.round(106 + (15 - 106) * scrollPercent);
    const g = Math.round(4 + (170 - 4) * scrollPercent);
    const b = Math.round(15 + (31 - 15) * scrollPercent);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <div className="min-h-screen">
      {/* Cherry blossom tree image as background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -3,
          background: 'url(/portfolioSite/images/cherry-tree-bg.jpg) center center / cover no-repeat',
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Dynamic gradient background (much more transparent) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -2,
          pointerEvents: "none",
          background: getGradient(),
          opacity: 0.17,
          transition: "background 0.5s, opacity 0.3s",
        }}
        aria-hidden="true"
      />
      {/* Petals falling canvas overlay */}
      <canvas
        ref={petalsRef}
        id="sakura-petals-canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Vignette black overlay, more subtle */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at center, transparent 65%, rgba(0,0,0,0.25) 100%)",
        }}
        aria-hidden="true"
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
