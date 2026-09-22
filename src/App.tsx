import "./App.css"

function App() {
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
              <a href="https://github.com/rkent-26" target="_blank">GitHub</a>
              <span>/</span>
              <a href="#" target="_blank">LinkedIn</a>
              <span>/</span>
              <a href="https://www.facebook.com/ralp.kenit" target="_blank">Facebook</a>
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
            <article className="project-card">
              <div className="project-top">
                <span>01</span>
                <span className="project-arrow">↗</span>
              </div>

              <div className="project-preview quickbite">
                <span>QUICKBITE</span>
              </div>

              <h3>QuickBite</h3>

              <p>
                A food ordering and inventory management system
                designed to manage products, orders, purchases,
                and stock.
              </p>

              <div className="project-tags">
                <span>PHP</span>
                <span>MySQL</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a href="https://github.com/rkent-26/QuickBite" target="_blank">GitHub ↗</a>
                <a href="https://quickbite-system.site.je/AUTHENTICATION/staff-login.php" target="_blank">Demo ↗</a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-top">
                <span>02</span>
                <span className="project-arrow">↗</span>
              </div>

              <div className="project-preview rivanova">
                <span>RIVANOVA</span>
              </div>

              <h3>Rivanova City Hall</h3>

              <p>
                A business permit issuance system using enterprise
                integration concepts and backend services.
              </p>

              <div className="project-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Apache Camel</span>
              </div>

              <div className="project-links">
                <a href="#" target="_blank">GitHub ↗</a>
                <a href="#" target="_blank">Details ↗</a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-top">
                <span>03</span>
                <span className="project-arrow">↗</span>
              </div>

              <div className="project-preview portfolio-preview">
                <span>KENT</span>
              </div>

              <h3>Personal Portfolio</h3>

              <p>
                A personal developer portfolio built to showcase
                my skills, projects, journey, and experience.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Vite</span>
              </div>

              <div className="project-links">
                <a href="#" target="_blank">GitHub ↗</a>
              </div>
            </article>
          </div>
        </section>

        {/* CURRENTLY LEARNING */}
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
              <p>Using AI tools to improve development workflows.</p>
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

      <footer>
        <p>© 2026 KENT.</p>

        <div>
          <a href="https://github.com/rkent-26" target="_blank">GitHub</a>
          <a href="#" target="_blank">LinkedIn</a>
          <a href="https://www.facebook.com/ralp.kenit" target="_blank">Facebook</a>
        </div>

        <p>Built with React + TypeScript</p>
      </footer>
    </div>
  )
}

export default App