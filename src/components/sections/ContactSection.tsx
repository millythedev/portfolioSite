import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { AnimatedElement, StaggerContainer } from "../ui/motion";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../lib/animations";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real implementation, you'd send this data to an API or email service
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <AnimatedElement variants={fadeIn("up")} className="space-y-6">
          <h2 className="section-title text-4xl md:text-5xl">Get in Touch</h2>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Feel free to reach out if you want to collaborate or just say hi!
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedElement variants={slideIn("right", 0.2)}>
            <h3 className="text-2xl font-sourceCode font-bold mb-4">
              Get In Touch
            </h3>

            <p className="text-lg mb-6">
              Feel free to reach out to me for any questions or opportunities.
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be a part of your vision.
            </p>

            <StaggerContainer className="space-y-4">
              <motion.div
                className="flex items-center gap-3"
                variants={fadeIn("up", 0)}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--background))"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">(936)-577-9901</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                variants={fadeIn("up", 0)}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--background))"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">emiliocleveland1@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                variants={fadeIn("up", 0)}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--background))"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">College Station, TX</p>
                </div>
              </motion.div>
            </StaggerContainer>
          </AnimatedElement>

          <AnimatedElement variants={slideIn("left", 0.3)}>
            <Card className="p-6 bg-card border-muted">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: submitted ? 1 : 1.03 }}
                    whileTap={{ scale: submitted ? 1 : 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={submitted}
                    >
                      {submitted ? "Message Sent!" : "Send Message"}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
