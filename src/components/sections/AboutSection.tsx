import { Button } from "../ui/button";
import { SKILLS } from "../../lib/constants";
import { AnimatedElement, StaggerContainer } from "../ui/motion";
import { fadeIn, slideIn } from "../../lib/animations";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container">
        <AnimatedElement variants={fadeIn("up", 0.1)}>
          <h2 className="section-title">about</h2>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatedElement variants={slideIn("right", 0.2)}>
            <p className="text-lg mb-6">
              Hello! My name is Emilio and I am a Computer Science student at Texas A&M University. I have a keen interest in problem-solving and technology, and I'm passionate about developing innovative solutions.
            </p>

            <p className="text-lg mb-6">
              I demonstrate strong leadership and teamwork skills, developed through managing a team and optimizing operations in previous roles. I'm proficient in programming languages such as Python and C++, with a passion for continuous learning and innovation in diverse environments.
            </p>

            <p className="text-lg mb-8">
              As a Freelance Computer Hardware/Software Technician, I manage computer inventory and ensure essential supplies and tools are readily available for seamless operations. I also automate repetitive tasks with scripting, saving 19% of time weekly in technical operations.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" className="w-full md:w-auto">
                Download Resume
              </Button>
            </motion.div>
          </AnimatedElement>

          <div>
            <AnimatedElement variants={fadeIn("up", 0.3)}>
              <h3 className="text-xl font-sourceCode font-bold mb-4">Technical Skills</h3>
            </AnimatedElement>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {SKILLS.technicalSkills.map((skill) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-2"
                  variants={fadeIn("left", 0)}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </StaggerContainer>

            <AnimatedElement variants={fadeIn("up", 0.4)}>
              <h3 className="text-xl font-sourceCode font-bold mt-6 mb-4">Work Experience</h3>
            </AnimatedElement>

            <StaggerContainer className="space-y-4">
              <motion.div variants={fadeIn("left", 0)}>
                <h4 className="text-lg font-bold">Zaxby's Asst. General Manager</h4>
                <p className="text-sm text-muted-foreground">Aug 2022 - Dec 2024</p>
                <p className="mt-1">
                  General Manager with proven leadership in overseeing daily operations and managing a team of 12.
                </p>
              </motion.div>

              <motion.div variants={fadeIn("left", 0)}>
                <h4 className="text-lg font-bold">Freelance Computer Technician</h4>
                <p className="text-sm text-muted-foreground">Self Employment — Present</p>
                <p className="mt-1">
                  Manage computer inventory, diagnose and resolve technical issues for clients.
                </p>
              </motion.div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
