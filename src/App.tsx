import { useState, useRef } from 'react';
import './index.css';

const socialLinks = [
  {
    href: 'mailto:emiliocleveland1@gmail.com',
    icon: 'https://ext.same-assets.com/1026707701/2128448175.png',
    alt: 'email',
  },
  {
    href: 'https://twitter.com/', // Changed from '#' to a valid URL
    icon: 'https://ext.same-assets.com/1026707701/465890423.png',
    alt: 'X',
  },
  {
    href: 'https://github.com/', // Changed from '#' to a valid URL
    icon: 'https://ext.same-assets.com/1026707701/3915668036.png',
    alt: 'GitHub',
  },
  {
    href: 'https://instagram.com/', // Changed from '#' to a valid URL
    icon: 'https://ext.same-assets.com/1026707701/1229569236.png',
    alt: 'Instagram',
  },
];

const skills = [
  'C/C++', 'Python', 'HTML5', 'Javascript', 'Web Design',
  'Adobe Creative Cloud', '3D Printing/Designing', 'Computer Technician',
  'Cross-Functional Collaboration', 'Writing Skills', 'Microsoft Office'
];

function App() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const [activeSection, setActiveSection] = useState('home');

  // Create refs for each section
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Message sent! We will get back to you soon.');
    setFormData({ email: '', message: '' });
  };

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>, sectionId: string) => {
    setActiveSection(sectionId);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-bg">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-title">Emilio's Portfolio</div>
        <ul className="nav-menu">
          <li
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollToSection(homeRef, 'home')}
          >
            Home
          </li>
          <li
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection(aboutRef, 'about')}
          >
            About
          </li>
          <li
            className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => scrollToSection(educationRef, 'education')}
          >
            Education
          </li>
          <li
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection(skillsRef, 'skills')}
          >
            Skills
          </li>
          <li
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection(projectsRef, 'projects')}
          >
            Projects
          </li>
          <li className="nav-link">
            <a href="/assets/EmilioResume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
              Resume
            </a>
          </li>
          <li
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection(contactRef, 'contact')}
          >
            Contact
          </li>
        </ul>
      </nav>

      {/* Hero two-column */}
      <section className="hero" id="home" ref={homeRef}>
        <div className="hero-left">
          <h1 className="hero-name">Emilio Joe Cleveland</h1>
          <div className="hero-type">
            <span>I am a </span>
            <span className="hero-student">Student</span>
            <span className="hero-cursor">|</span>
          </div>
          <div className="hero-socials">
            {socialLinks.map(link => (
              <a key={link.href} href={link.href} className="social-btn" target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={link.alt} width={30} height={30} />
              </a>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-wrapper image-placeholder">
            <div className="upload-prompt">
              Upload your photo here
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about" ref={aboutRef}>
        <div className="section-heading">
          <h3>About</h3>
        </div>
        <div className="about-container">
          <div className="about-left">
            <h3>Emilio Joe Cleveland</h3>
            <ul className="about-info">
              <li><i className="arrow">&gt; </i><strong>Phone:</strong> (936)-577-9901</li>
              <li><i className="arrow">&gt; </i><strong>City:</strong> College Station, TX</li>
              <li><i className="arrow">&gt; </i><strong>Email:</strong> emiliocleveland1@gmail.com</li>
            </ul>
          </div>
          <div className="about-right">
            <p className="about-text">
              Current Computer Science student at Texas A&M University with a keen interest in problem-solving and
              technology. Demonstrates strong leadership and teamwork skills, developed through managing a team and
              optimizing operations in previous roles. Proficient in programming languages such as Python and C++, with a
              passion for continuous learning and innovation in diverse environments.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section" id="education" ref={educationRef}>
        <div className="section-heading">
          <h3>Education</h3>
        </div>
        <div className="education-container">
          <div className="education-card">
            <div className="education-logo">
              <div className="university-logo">
                TAMU
              </div>
            </div>
            <div className="education-details">
              <h4>Texas A&M University</h4>
              <p className="education-program">Bachelors in Computer Science (Software Track)</p>
              <p className="education-duration">2021 - Current</p>
              <ul className="education-courses">
                <li>Computer Science Fundamentals</li>
                <li>Software Engineering</li>
                <li>Data Structures and Algorithms</li>
                <li>Programming Languages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-heading work-heading">
          <h3>Work Experience</h3>
        </div>

        <div className="work-container">
          <div className="work-card">
            <div className="work-header">
              <h4>Freelance Computer Hardware/Software Technician</h4>
              <p className="work-location">Self Employment, College Station, TX — Present</p>
            </div>
            <p className="work-description">
              Manage computer inventory, ensuring essential supplies and tools are readily available for seamless operations such
              as upgrading hardware or software components like RAM and programs to boost system performance or
              functionality for various clients.
            </p>
            <div className="achievements">
              <h5>Key Achievements:</h5>
              <ul>
                <li>Automate repetitive tasks with scripting, saving 19% of time weekly in technical operations.</li>
                <li>Diagnose and resolve technical issues, providing effective solutions for diverse client needs.</li>
                <li>Collaborated with other IT teams to create standardized equipment setup and configuration processes.</li>
              </ul>
            </div>
          </div>

          <div className="work-card">
            <div className="work-header">
              <h4>Zaxby's Asst. General Manager</h4>
              <p className="work-location">Zaxby's College Station, TX — Aug 2022 - Dec 2024</p>
            </div>
            <p className="work-description">
              General Manager with proven leadership in overseeing daily operations and managing a team of 12 to ensure
              efficiency and seamless service. Adept at streamlining processes, enhancing team performance, and stepping into the
              General Manager role to maintain high operational standards.
            </p>
            <div className="achievements">
              <h5>Key Achievements:</h5>
              <ul>
                <li>Developed programs to automate daily manual operations to maximize daily efficiency using self developed software solutions.</li>
                <li>Developed and implemented strategies to improve customer satisfaction, resulting in an increase of 36% in positive feedback ratings.</li>
                <li>Oversaw inventory management, optimizing stock levels to minimize waste and maximize profitability.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills" ref={skillsRef}>
        <div className="section-heading">
          <h3>Skills</h3>
        </div>
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill-tag" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects" ref={projectsRef}>
        <div className="section-heading">
          <h3>Projects</h3>
        </div>
        <div className="projects-container">
          <div className="project-card">
            <div className="project-image placeholder-project">
              <span>Add Project</span>
            </div>
            <div className="project-info">
              <h4>Your First Project</h4>
              <p>Add details about your first project here. Describe what problem it solves, technologies used, and your role in development.</p>
              <div className="project-links">
                <a href="/project1" className="project-link">View Live</a>
                <a href="/project1-code" className="project-link">Source Code</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image placeholder-project">
              <span>Add Project</span>
            </div>
            <div className="project-info">
              <h4>Your Second Project</h4>
              <p>Add details about your second project here. Describe what problem it solves, technologies used, and your role in development.</p>
              <div className="project-links">
                <a href="/project2" className="project-link">View Live</a>
                <a href="/project2-code" className="project-link">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact" ref={contactRef}>
        <div className="section-heading">
          <h3>Contact</h3>
        </div>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h4>Get In Touch</h4>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>

          <div className="contact-info">
            <div className="contact-section-heading">
              <h4>Social</h4>
            </div>
            <div className="contact-socials">
              {socialLinks.map(link => (
                <a key={link.href} href={link.href} className="contact-social-link" target="_blank" rel="noopener noreferrer">
                  <img src={link.icon} alt={link.alt} width={25} height={25} />
                </a>
              ))}
            </div>

            <div className="contact-section-heading">
              <h4>Address</h4>
            </div>
            <div className="contact-address">
              <p>College Station, TX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Made With <span style={{color: 'red'}}>&hearts; </span> by Emilio Joe Cleveland</p>
      </footer>
    </div>
  );
}

export default App;
