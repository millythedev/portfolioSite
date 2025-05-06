import React, { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "../../lib/constants";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { AnimatedElement, StaggerContainer } from "../ui/motion";
import { fadeIn, slideIn, textVariant } from "../../lib/animations";

function CyclingPhrase() {
  const phrases = [
    "Software Engineer.",
    "Web Developer.",
    "Full Stack Enthusiast.",
    "React Specialist.",
    "Problem Solver.",
    "UI/UX Learner."
  ];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => setVisible(false), 2500); // show 2.5s
    const nextTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
      setVisible(true);
    }, 3000); // 0.5s fade-out, 2.5s visible
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(nextTimeout);
    };
  }, [index]);

  return (
    <span
      className={`transition-opacity duration-[500ms] text-3xl font-normal ${visible ? "opacity-100" : "opacity-0"}`}
      style={{
        display: 'inline-block',
        minWidth: '12ch',
        fontFamily: 'SourceCodePro, monospace'
      }}
    >
      {phrases[index]}
    </span>
  );
}

// i love tessa
export function HeroSection() {
  // i love tessa
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 relative">
      {/* Removed hero-gradient background overlay */}

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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

            {/* Cycling normal text phrases with fade animation */}
            <AnimatedElement variants={fadeIn("up", 0.3)} className="mb-4 min-h-[2.5rem]">
              <CyclingPhrase />
            </AnimatedElement>

            <AnimatedElement variants={fadeIn("up", 0.5)} className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/portfolioSite/assets/EmilioResume.pdf" download>
                  Download Resume
                </a>
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

          <div className="md:w-1/2 flex items-center justify-center md:justify-end md:items-center mt-0">
            <AnimatedElement
              variants={slideIn("left", 0.2)}
              className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden transition-transform duration-300 group"
            >
              <motion.img
                src={import.meta.env.BASE_URL + "public/images/profile-placeholder.jpg"}
                alt="Emilio Joe Cleveland"
                className="w-full h-full object-cover rounded-full shadow-none group-hover:shadow-[0_12px_32px_8px_rgba(236,72,153,0.25)] group-hover:-translate-y-4 transition-all duration-300"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
