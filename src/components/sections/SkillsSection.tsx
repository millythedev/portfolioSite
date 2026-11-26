import { useEffect, useRef, useState } from "react";
import { AnimatedElement } from "../ui/motion";
import { fadeIn } from "../../lib/animations";

const COLUMNS = [
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

const TOTAL = COLUMNS.flat().length;

export function SkillsSection() {
  // each skill slides in and fills up when it reaches the screen.
  // checks the actual position on every scroll instead of waiting for an "in view" event,
  // so a skill can't get skipped, and once it's shown it stays shown.
  // the number saved per skill is its delay so skills that show up together still go one after another
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const revealedRef = useRef<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, number>>({});

  useEffect(() => {
    const check = () => {
      const fresh: Record<string, number> = {};
      COLUMNS.forEach((column, i) => {
        let inThisBatch = 0;
        column.forEach((skill) => {
          if (revealedRef.current[skill.name] !== undefined) return;
          const el = rowRefs.current[skill.name];
          // as soon as the top of the label peeks onto the screen
          if (el && el.getBoundingClientRect().top < window.innerHeight - 10) {
            fresh[skill.name] = i * 0.15 + inThisBatch * 0.12;
            inThisBatch++;
          }
        });
      });

      if (Object.keys(fresh).length > 0) {
        revealedRef.current = { ...revealedRef.current, ...fresh };
        setRevealed(revealedRef.current);
        if (Object.keys(revealedRef.current).length === TOTAL) stop();
      }
    };
    const stop = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    // wait a couple frames so the empty bars get drawn first, otherwise there's nothing to animate from
    const frame = requestAnimationFrame(() => requestAnimationFrame(check));
    return () => {
      cancelAnimationFrame(frame);
      stop();
    };
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <AnimatedElement variants={fadeIn("up", 0.1)}>
          <h2 className="section-title text-4xl md:text-5xl">skills</h2>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-2">
          {COLUMNS.map((column, i) => (
            <div key={i} className="space-y-10">
              {column.map((skill) => {
                const delay = revealed[skill.name];
                const shown = delay !== undefined;
                const fromX = i === 2 ? -40 : 40;
                return (
                  <div
                    key={skill.name}
                    ref={(el) => {
                      rowRefs.current[skill.name] = el;
                    }}
                    style={{
                      opacity: shown ? 1 : 0,
                      transform: shown ? "none" : `translateX(${fromX}px)`,
                      // the overshoot curve gives it the same little spring it had before
                      transition: `opacity 0.5s ease-out ${delay ?? 0}s, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay ?? 0}s`,
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
                          transition: `width 1.2s ease-in-out ${(delay ?? 0) + 0.25}s`,
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
