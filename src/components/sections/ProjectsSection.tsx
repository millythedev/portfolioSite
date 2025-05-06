import { useState } from "react";
import { PROJECTS } from "../../lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { AnimatedElement, HoverElement, StaggerContainer } from "../ui/motion";
import { motion } from "framer-motion";
import { cardHoverVariants, fadeIn } from "../../lib/animations";

export function ProjectsSection() {
  const [openModal, setOpenModal] = useState<string | null>(null);

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
            <button
              key={project.title}
              className="project-card overflow-hidden w-full text-left p-0 border-0 bg-card group transition-all hover:shadow-lg hover:scale-[1.03] focus:outline-none relative"
              style={{ display: 'block' }}
              onClick={() => setOpenModal(project.title)}
              type="button"
              title={project.title}
            >
              <HoverElement variants={cardHoverVariants}>
                <Card className="h-full border-0 overflow-hidden transition-all">
                  <div className="aspect-video overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:brightness-90 group-hover:scale-105 transition duration-300"
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
                  </CardContent>
                </Card>
              </HoverElement>
            </button>
          ))}

          {openModal && (() => {
            const project = PROJECTS.find(p => p.title === openModal);
            if (!project) return null;
            return (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="bg-card rounded-lg shadow-lg w-[90vw] max-w-md">
                  <div className="relative p-6">
                    <button
                      className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-red-700"
                      onClick={() => setOpenModal(null)}
                      aria-label="Close"
                      type="button"
                    >
                      ×
                    </button>
                    <div className="flex flex-col items-center gap-4">
                      <img src={project.image} alt={project.title} className="w-32 h-32 object-cover rounded-md mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 text-center">{project.description}</p>
                    </div>
                    <div className="flex justify-between mt-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
                      >
                        <img src="/images/github.svg" alt="GitHub" className="w-5 h-5" /> GitHub
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-red-700 text-white rounded-full hover:bg-red-800 transition"
                      >
                        Visit Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </StaggerContainer>
      </div>
    </section>
  );
}
