import { SKILLS } from "../../lib/constants";
import { AnimatedElement, StaggerContainer } from "../ui/motion";
import { motion } from "framer-motion";
import { fadeIn, skillBarVariants } from "../../lib/animations";

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
      { name: "Emulation", percent: 74, color: "hsl(280, 80%, 55%)" },
    ],
    [
      { name: "Adobe Creative Cloud", percent: 88, color: "hsl(350, 80%, 55%)" },
      { name: "3D Printing/Designing", percent: 75, color: "hsl(160, 80%, 55%)" },
      { name: "Computer Technician", percent: 96, color: "hsl(30, 90%, 55%)" },
      { name: "Microsoft Office Applications", percent: 83, color: "hsl(50, 90%, 55%)" },
      { name: "React", percent: 78, color: "hsl(150, 60%, 60%)" },
    ],
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <AnimatedElement variants={fadeIn("up", 0.1)}>
          <h2 className="section-title text-4xl md:text-5xl">skills</h2>
        </AnimatedElement>

        <AnimatedElement variants={fadeIn("up", 0.4)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-2">
            {columns.map((column, i) => (
              <StaggerContainer key={i} className="space-y-10">
                {column.map((skill) => (
                  <motion.div
                    variants={fadeIn(i === 2 ? "right" : "left", 0)}
                    key={skill.name}
                  >
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color, width: `${skill.percent}%` }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={skill.percent}
                        variants={skillBarVariants}
                      />
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
