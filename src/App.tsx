import { useState } from "react";
import "./App.css";
import quickbiteImage from "./assets/quickbite.png";

type Project = {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  details: string[];
};

const projects: Project[] = [
  {
    title: "QuickBite",
    description:
      "A food ordering and inventory management system designed to manage products, orders, purchases, and stock.",
    longDescription:
      "QuickBite is a full-stack food ordering and inventory management system designed to help manage food products, customer orders, purchases, and inventory.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    image: quickbiteImage,
    github: "https://github.com/rkent-26/QuickBite",
    demo:
      "https://quickbite-system.site.je/AUTHENTICATION/staff-login.php",
    details: [
      "Food ordering management",
      "Inventory and stock tracking",
      "Product management",
      "Purchase management",
      "Order management",
      "Database-driven system",
    ],
  },

  {
    title: "Rivanova City Hall",
    description:
      "A business permit issuance system using enterprise integration concepts and backend services.",
    longDescription:
      "Rivanova City Hall is a business permit issuance system created to demonstrate enterprise integration concepts, backend services, and communication between system components.",
    technologies: ["Java", "Spring Boot", "Apache Camel"],
    github: "#",
    details: [
      "Business permit processing",
      "Enterprise integration",
      "Backend services",
      "Apache Camel messaging",
      "Spring Boot application",
    ],
  },

  {
    title: "Personal Portfolio",
    description:
      "A personal developer portfolio built to showcase my skills, projects, journey, and experience.",
    longDescription:
      "This portfolio is a personal project created to showcase my development journey, technical skills, projects, and the technologies I am currently learning.",
    technologies: ["React", "TypeScript", "Vite"],
    github: "https://github.com/rkent-26/Arken-Space",
    details: [
      "Responsive design",
      "React components",
      "TypeScript",
      "Modern UI",
      "Vite development environment",
      "Vercel deployment",
    ],
  },
];

function App() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          KENT<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Kent
              <br />
              <span>Developer</span>
            </h1>

            <p className="hero-description">
              A college student passionate about technology,
              programming, and building useful digital experiences.
              Currently learning, creating, and improving every day.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work
                <span>↗</span>
              </a>

              <a href="#contact" className="outline-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/rkent-26"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <span>/</span>

              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>

              <span>/</span>

              <a
                href="https://www.facebook.com/ralp.kenit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>

            <div className="code-card">
              <div className="window-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code">
                <p>
                  <span className="purple">const</span>{" "}
                  <span className="blue">kent</span> = {"{"}
                </p>

                <p className="indent">
                  role: <span className="green">"Developer"</span>,
                </p>

                <p className="indent">
                  passion: <span className="green">"Technology"</span>,
                </p>

                <p className="indent">
                  mindset: <span className="green">"Keep Learning"</span>
                </p>

                <p>{"}"}</p>

                <p className="cursor">_</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-heading">
            <p className="section-number">01 — ABOUT</p>
            <h2>About Me</h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm Kent, a college student who enjoys programming,
                technology, and creating digital projects.
              </p>

              <p>
                I'm currently developing my skills in frontend,
                backend, databases, and modern software development.
              </p>

              <p>
                My goal is to keep learning and eventually build
                applications that are useful, reliable, and enjoyable
                to use.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat">
                <strong>2+</strong>
                <span>Years Learning</span>
              </div>

              <div className="stat">
                <strong>3</strong>
                <span>Projects</span>
              </div>

              <div className="stat">
                <strong>∞</strong>
                <span>Things To Learn</span>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="section journey-section">
          <div className="section-heading">
            <p className="section-number">02 — JOURNEY</p>
            <h2>My Journey</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2024</div>

              <div className="timeline-line">
                <span></span>
              </div>

              <div className="timeline-content">
                <h3>Started Programming</h3>

                <p>
                  Began learning programming fundamentals and
                  exploring how software applications are built.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2026</div>

              <div className="timeline-line">
                <span></span>
              </div>

              <div className="timeline-content">
                <h3>Building Real Projects</h3>

                <p>
                  Started creating school and personal projects
                  using different programming languages and tools.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">NOW</div>

              <div className="timeline-line">
                <span></span>
              </div>

              <div className="timeline-content">
                <h3>Growing as a Developer</h3>

                <p>
                  Learning modern technologies like React,
                  TypeScript, Node.js, databases, and AI tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p className="section-number">03 — SKILLS</p>
            <h2>Tech Stack</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-number">01</div>

              <h3>Frontend</h3>

              <p>
                Creating responsive and modern interfaces for
                websites and applications.
              </p>

              <div className="tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">02</div>

              <h3>Backend</h3>

              <p>
                Building server-side applications, APIs, and
                application logic.
              </p>

              <div className="tags">
                <span>Node.js</span>
                <span>PHP</span>
                <span>APIs</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">03</div>

              <h3>Database</h3>

              <p>
                Managing application data using relational and
                modern database technologies.
              </p>

              <div className="tags">
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Supabase</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-number">04</div>

              <h3>Tools</h3>

              <p>
                Tools I use for development, version control,
                and productivity.
              </p>

              <div className="tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Vite</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <p className="section-number">04 — PROJECTS</p>
            <h2>Selected Work</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project.title}
              >
                <div className="project-top">
                  <span>0{index + 1}</span>

                  <button
                    className="project-arrow"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View ${project.title} details`}
                  >
                    ↗
                  </button>
                </div>

                <div
                  className={`project-preview ${
                    index === 0
                      ? "quickbite"
                      : index === 1
                      ? "rivanova"
                      : "portfolio-preview"
                  }`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                    />
                  ) : (
                    <span>
                      {index === 1 ? "RIVANOVA" : "KENT"}
                    </span>
                  )}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github &&
                    project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo ↗
                    </a>
                  )}

                  <button
                    className="details-link"
                    onClick={() =>
                      setSelectedProject(project)
                    }
                  >
                    Details →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LEARNING */}
        <section className="section learning-section">
          <div className="section-heading">
            <p className="section-number">05 — LEARNING</p>
            <h2>Currently Learning</h2>
          </div>

          <div className="learning-list">
            <div className="learning-item">
              <span>01</span>
              <h3>React + TypeScript</h3>
              <p>Building modern frontend applications.</p>
            </div>

            <div className="learning-item">
              <span>02</span>
              <h3>Node.js</h3>
              <p>Learning backend development and APIs.</p>
            </div>

            <div className="learning-item">
              <span>03</span>
              <h3>MongoDB</h3>
              <p>Exploring modern NoSQL databases.</p>
            </div>

            <div className="learning-item">
              <span>04</span>
              <h3>AI Development</h3>
              <p>
                Using AI tools to improve development workflows.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <p className="section-number">06 — CONTACT</p>

          <h2>
            Let's build
            <br />
            <span>something.</span>
          </h2>

          <p>
            Have an idea, project, or just want to connect?
            Feel free to reach out.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rk.bella10@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button contact-button"
          >
            Get In Touch
            <span>↗</span>
          </a>
        </section>
      </main>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            {selectedProject.image && (
              <div className="modal-image">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                />
              </div>
            )}

            <p className="modal-number">
              PROJECT /{" "}
              {String(
                projects.findIndex(
                  (project) =>
                    project.title === selectedProject.title
                ) + 1
              ).padStart(2, "0")}
            </p>

            <h2>{selectedProject.title}</h2>

            <p className="modal-description">
              {selectedProject.longDescription}
            </p>

            <h3>Key Features</h3>

            <div className="feature-grid">
              {selectedProject.details.map((detail, index) => (
                <div className="feature-item" key={detail}>
                  <span className="feature-check">✓</span>

                  <div>
                    <span className="feature-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="modal-tech">
              {selectedProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="modal-actions">
              {selectedProject.github &&
                selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-button"
                  >
                    View GitHub ↗
                  </a>
                )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-button"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <p>© 2026 KENT.</p>

        <div>
          <a
            href="https://github.com/rkent-26"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.facebook.com/ralp.kenit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>

        <p>Built with React + TypeScript</p>
      </footer>
    </div>
  );
}

export default App;