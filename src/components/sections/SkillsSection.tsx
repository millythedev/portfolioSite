import { useEffect, useRef, useState } from "react";
import { AnimatedElement } from "../ui/motion";
import { fadeIn } from "../../lib/animations";

export function SkillsSection() {
  const columns = [
    [
      { name: "C/C++", percent: 90, color: "hsl(270, 100%, 50%)" },
      { name: "Python", percent: 97, color: "hsl(320, 90%, 55%)" },
      { name: "HTML5", percent: 82, color: "hsl(40, 90%, 55%)" },
      { name: "JavaScript", percent: 76, color: "hsl(45, 100%, 50%)" },
      { name: "Web Design", percent: 84, color: "hsl(12, 80%, 60%)" },
    ],
    [
      { name: "ReactJS", percent: 93, color: "hsl(210, 90%, 60%)" },
      { name: "API", percent: 85, color: "hsl(200, 90%, 55%)" },
      { name: "NodeJS", percent: 87, color: "hsl(120, 80%, 50%)" },
      { name: "TypeScript", percent: 80, color: "hsl(190, 90%, 55%)" },
      { name: "Tailwind CSS", percent: 85, color: "hsl(280, 80%, 55%)" },
    ],
    [
      { name: "Adobe Creative Cloud", percent: 88, color: "hsl(350, 80%, 55%)" },
      { name: "3D Printing/Designing", percent: 75, color: "hsl(160, 80%, 55%)" },
      { name: "Computer Technician", percent: 96, color: "hsl(30, 90%, 55%)" },
      { name: "Microsoft Office Applications", percent: 83, color: "hsl(50, 90%, 55%)" },
      { name: "React", percent: 78, color: "hsl(150, 60%, 60%)" },
    ],
  ];

  // one switch for the whole section. it flips on as soon as the grid's top is on screen
  // (or you already scrolled past it) and never flips back, so no bar can get left empty
  const gridRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = gridRef.current;
      if (!el) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        setShown(true);
        stop();
      }
    };
    const stop = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check(); // in case the page loaded already scrolled down here
    return stop;
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <AnimatedElement variants={fadeIn("up", 0.1)}>
          <h2 className="section-title text-4xl md:text-5xl">skills</h2>
        </AnimatedElement>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-2">
          {columns.map((column, i) => (
            <div key={i} className="space-y-10">
              {column.map((skill, j) => {
                const delay = i * 0.15 + j * 0.1;
                const fromX = i === 2 ? -40 : 40;
                return (
                  <div
                    key={skill.name}
                    style={{
                      opacity: shown ? 1 : 0,
                      transform: shown ? "none" : `translateX(${fromX}px)`,
                      transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          backgroundColor: skill.color,
                          width: shown ? `${skill.percent}%` : "0%",
                          transition: `width 1.2s ease-in-out ${delay + 0.2}s`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
