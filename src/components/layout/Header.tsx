import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS, SOCIAL_LINKS } from "../../lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { AnimatedElement } from "../ui/motion";
import { fadeIn } from "@/lib/animations";

export function Header() {
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = document.querySelectorAll("section");
      for (const section of sections) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = `#${section.id}`;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatedElement
      variants={fadeIn("down")}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-sm" : ""
      }`}
    >
      <header className="container flex h-16 items-center justify-between px-4 md:px-6">
        <motion.div
          className="font-sourceCode text-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link to="/" className="flex items-center gap-1">
            <span className="text-primary">&lt;</span>
            <span>EC</span>
            <span className="text-primary">/&gt;</span>
          </Link>
        </motion.div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.href ? "nav-item-active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img src="/portfolioSite/images/github.svg" alt="GitHub" width={24} height={24} />
          </motion.a>
          <motion.a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img src="/portfolioSite/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </motion.a>
        </div>

        <motion.button
          className="block md:hidden text-foreground p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </motion.button>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4">
              <ul className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                        activeSection === item.href ? "nav-item-active" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  className="pt-4 flex space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: NAV_ITEMS.length * 0.1 }}
                >
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <img src="/portfolioSite/images/github.svg" alt="GitHub" width={20} height={20} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <img src="/portfolioSite/images/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedElement>
  );
}
