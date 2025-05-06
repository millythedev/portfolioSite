import { SKILLS } from "../../lib/constants";
import { AnimatedElement, StaggerContainer } from "../ui/motion";
import { motion } from "framer-motion";
import { fadeIn, skillBarVariants } from "../../lib/animations";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <AnimatedElement variants={fadeIn("up", 0.1)}>
          <h2 className="section-title">skills</h2>
        </AnimatedElement>

        <AnimatedElement variants={fadeIn("up", 0.2)} className="text-lg mb-12 max-w-3xl mx-auto text-center">
          <p>
            Since the beginning of my journey as a developer, I've improved my skills,
            always seeking to be a better professional.
          </p>
        </AnimatedElement>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10">
          {SKILLS.softSkills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={fadeIn("up", 0)}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 }
              }}
              className="bg-card p-6 rounded-xl border border-muted transition-all hover:border-primary"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="text-3xl font-sourceCode text-primary mb-4"
              >
                {skill.id}
              </motion.div>
              <h3 className="text-xl font-sourceCode font-bold mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedElement variants={fadeIn("up", 0.4)} className="mt-16">
          <h3 className="text-xl font-sourceCode font-bold mb-8 text-center">
            Technical Proficiency
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <StaggerContainer className="space-y-6">
              <motion.div variants={fadeIn("left", 0)}>
                <div className="flex justify-between mb-2">
                  <span>C/C++</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress bg-primary"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={85}
                    variants={skillBarVariants}
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeIn("left", 0)}>
                <div className="flex justify-between mb-2">
                  <span>Python</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress bg-primary"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={90}
                    variants={skillBarVariants}
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeIn("left", 0)}>
                <div className="flex justify-between mb-2">
                  <span>Web Design</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress bg-primary"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={75}
                    variants={skillBarVariants}
                  />
                </div>
              </motion.div>
            </StaggerContainer>

            <StaggerContainer className="space-y-6">
              <motion.div variants={fadeIn("right", 0)}>
                <div className="flex justify-between mb-2">
                  <span>Adobe Creative Cloud</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress bg-secondary"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={80}
                    variants={skillBarVariants}
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeIn("right", 0)}>
                <div className="flex justify-between mb-2">
                  <span>3D Printing/Designing</span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress bg-secondary"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={70}
                    variants={skillBarVariants}
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeIn("right", 0)}>
                <div className="flex justify-between mb-2">
                  <span>Computer Technician</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress bg-secondary"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={95}
                    variants={skillBarVariants}
                  />
                </div>
              </motion.div>
            </StaggerContainer>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
