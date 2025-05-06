import { Button } from "../ui/button";
import { AnimatedElement } from "../ui/motion";
import { fadeIn, slideIn } from "../../lib/animations";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container">
        <AnimatedElement variants={fadeIn("up", 0.1)}>
          <h2 className="section-title text-4xl md:text-5xl">about</h2>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-2 flex flex-col gap-8">
            <AnimatedElement variants={slideIn("right", 0.2)}>
              <p className="text-lg mb-6">
                I’m Emilio Cleveland, a Computer Science major at Texas A&M University passionate about 
                technology and creative problem-solving to deliver innovative software solutions. My background combines hands-on IT work with modern programming skills, specializing in Python, C++, and web design. With experience as a freelance computer hardware/software technician and leadership roles optimizing processes for small teams, I thrive in collaborative environments and enjoy automating workflows to improve efficiency. I am always eager to learn new technologies and contribute to impactful projects.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
