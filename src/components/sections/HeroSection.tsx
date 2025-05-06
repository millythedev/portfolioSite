import { SOCIAL_LINKS } from "../../lib/constants";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { AnimatedElement, StaggerContainer } from "../ui/motion";
import { fadeIn, slideIn, textVariant } from "../../lib/animations";

// i love tessa
export function HeroSection() {
  // i love tessa
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 relative">
      <div className="hero-gradient absolute -top-24 left-0 right-0 w-full h-96 z-0" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="md:w-1/2">
            <AnimatedElement variants={textVariant(0.1)} className="mb-6">
              <h1 className="text-3xl md:text-5xl font-sourceCode font-bold mb-2">
                <span className="text-primary">&lt;</span>Emilio Joe{" "}
                <br className="hidden md:block" />
                Cleveland
                <span className="text-primary">/&gt;</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Entry Level Programmer/Developer
              </p>
            </AnimatedElement>

            <AnimatedElement variants={fadeIn("up", 0.3)} className="text-lg mb-8 max-w-xl">
              <p>
                Computer Science student at Texas A&M University with a keen interest
                in problem-solving and technology. Passionate about
                developing innovative solutions and expanding my skills in
                software development.
              </p>
            </AnimatedElement>

            <AnimatedElement variants={fadeIn("up", 0.5)} className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </AnimatedElement>

            <AnimatedElement variants={fadeIn("up", 0.7)} className="mt-8">
              <StaggerContainer className="flex items-center gap-4">
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  variants={fadeIn("up", 0)}
                  whileHover={{ scale: 1.2 }}
                >
                  <img src="/portfolioSite/images/github.svg" alt="GitHub" width={24} height={24} />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  variants={fadeIn("up", 0.1)}
                  whileHover={{ scale: 1.2 }}
                >
                  <img src="/portfolioSite/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </motion.a>
              </StaggerContainer>
            </AnimatedElement>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <AnimatedElement
              variants={slideIn("left", 0.2)}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary"
            >
              <motion.img
                src="/images/profile-placeholder.jpg"
                alt="Emilio Joe Cleveland"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
