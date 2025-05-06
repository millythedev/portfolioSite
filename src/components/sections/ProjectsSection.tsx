import { PROJECTS } from "../../lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { AnimatedElement, HoverElement, StaggerContainer } from "../ui/motion";
import { motion } from "framer-motion";
import { cardHoverVariants, fadeIn } from "../../lib/animations";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-card">
      <div className="container">
        <AnimatedElement variants={fadeIn("up", 0.1)}>
          <h2 className="section-title">projects</h2>
        </AnimatedElement>

        <AnimatedElement variants={fadeIn("up", 0.2)} className="text-lg mb-12 max-w-3xl mx-auto text-center">
          <p>
            Projects are important ways to improve your skills and showcase what you
            are capable of. Here are some of my most recent projects.
          </p>
        </AnimatedElement>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card overflow-hidden"
              variants={fadeIn("up", 0)}
            >
              <HoverElement variants={cardHoverVariants}>
                <Card className="h-full border-0 overflow-hidden transition-all">
                  <div className="aspect-video overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <CardContent className="p-6">
                    <StaggerContainer className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={`${project.title}-${tag}`}
                          className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                          variants={fadeIn("up", 0)}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "hsl(var(--primary) / 0.2)",
                            color: "hsl(var(--primary))"
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </StaggerContainer>

                    <motion.h3
                      className="text-xl font-bold mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </HoverElement>
            </motion.a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
