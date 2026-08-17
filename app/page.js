import ContactForm from "./components/ContactForm";

const skills = [
  "SQL Server & T-SQL",
  "SSIS / SSRS",
  "Dynamics 365",
  "Power Apps",
  "Power Automate",
  "Dataverse",
  "Azure Logic Apps",
  "REST APIs",
  "JSON / XML",
  "Dynamics GP",
  "PowerShell",
  "IIS",
  "Git",
];

const approach = [
  {
    number: "01",
    title: "Understand the business need",
    copy: "I start by listening to the people who use the process, documenting the requirement, and understanding what success needs to look like before choosing a technical solution.",
  },
  {
    number: "02",
    title: "Trace the process end to end",
    copy: "I want to know where information enters, every system and integration it touches, the business rules applied along the way, and where the information ultimately needs to go.",
  },
  {
    number: "03",
    title: "Find the real problem",
    copy: "I troubleshoot beyond the visible symptom. I use data, logs, SQL, API payloads, workflows, configuration, and application behavior to identify the actual source of the issue.",
  },
  {
    number: "04",
    title: "Build, test, and document",
    copy: "I implement practical solutions, validate the full process, and create documentation another person can actually use to understand, support, or improve the system later.",
  },
];

const projects = [
  {
    title: "SQL Server Migration & Synchronization",
    copy: "Migrated and synchronized a large manufacturing database between SQL Server environments while preserving identity keys, preventing duplicates, and working through transaction-log and storage constraints.",
    outcome: "A controlled migration approach focused on data integrity, repeatability, verification, and operational continuity.",
    tags: ["SQL Server", "T-SQL", "Linked Servers", "Data Migration"],
  },
  {
    title: "Dynamics 365 & Power Platform Integrations",
    copy: "Built and supported business processes and integrations around Dynamics 365, Dataverse, Power Automate, Logic Apps, APIs, JSON, XML, and SQL-backed systems.",
    outcome: "Reliable data movement between systems with troubleshooting that follows the transaction from source through destination.",
    tags: ["Dynamics 365", "Power Platform", "Dataverse", "Logic Apps", "REST APIs"],
  },
  {
    title: "ERP & Manufacturing Systems",
    copy: "Supported Dynamics GP and connected manufacturing processes including customizations, reporting, SQL integrations, label workflows, shop-floor data, and legacy applications that remain critical to daily operations.",
    outcome: "Kept essential legacy processes understandable and supportable while documenting dependencies for modernization work.",
    tags: ["Dynamics GP", "SQL", "Crystal Reports", "VB", "Manufacturing"],
  },
];

const documentation = [
  "Business requirements and process definitions",
  "System and integration flow diagrams",
  "Technical implementation and migration plans",
  "Troubleshooting findings and root-cause analysis",
  "Support procedures and operational runbooks",
  "Data mappings, dependencies, and validation steps",
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">Chapel Hill, Tennessee · Open to remote and permanent opportunities</div>
          <h1>
            I solve problems by understanding <span>how the whole system works.</span>
          </h1>
          <p className="lede">
            I’m Tina Gerlich. I work across SQL Server, business applications, Dynamics,
            Power Platform, integrations, and legacy systems. I enjoy following a process
            from the moment information enters a system until it reaches its final destination,
            then finding the best way to make that process more reliable, understandable,
            and useful to the business.
          </p>
          <div className="actions">
            <a className="button primary" href="#work">See how I solve problems</a>
            <a className="button secondary" href="#contact">Contact me</a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/tina-gerlich/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap" aria-label="Professional headshot of Tina Gerlich">
          <div className="hero-photo-frame">
            <img
              className="hero-photo"
              src="/tina-gerlich-headshot.png"
              alt="Tina Gerlich"
            />
          </div>
          <div className="photo-note">
            <strong>Curious by nature.</strong>
            <span>Thorough by practice.</span>
          </div>
        </div>
      </section>

      <section className="shell intro-grid">
        <div>
          <div className="section-kicker">What I bring</div>
          <h2>More than a list of technologies.</h2>
        </div>
        <div className="body-copy intro-copy">
          <p>
            I genuinely enjoy solving problems and learning how things work. I’m often most
            engaged when a process crosses several systems and the answer is not immediately obvious.
          </p>
          <p>
            My background lets me move between the business conversation and the technical details.
            I can gather and create business requirements, trace data through databases and integrations,
            troubleshoot application behavior, work through older systems, and help design a practical path forward.
          </p>
          <p>
            I also enjoy learning new technologies and trying new avenues. I do not need every problem
            to look like something I have already solved before—I like figuring out what I need to learn next.
          </p>
        </div>
      </section>

      <section className="shell approach-section">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">How I work</div>
            <h2>From business requirement to working solution.</h2>
          </div>
          <p>
            My goal is not just to make one error disappear. I want to understand the full process,
            solve the underlying problem, and leave behind something that can be supported.
          </p>
        </div>

        <div className="approach-grid">
          {approach.map((item) => (
            <article className="approach-card" key={item.number}>
              <span className="approach-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Selected work</div>
            <h2>Real-world systems. Real-world constraints.</h2>
          </div>
          <p>
            I like work that requires investigation, systems thinking, and a practical solution—not just a textbook answer.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, i) => (
            <article className="project" key={project.title}>
              <div className="project-number">0{i + 1}</div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <p className="project-outcome"><strong>What mattered:</strong> {project.outcome}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell documentation-section">
        <div className="documentation-copy">
          <div className="section-kicker">Documentation</div>
          <h2>If nobody can understand it later, the work is not finished.</h2>
          <p>
            I am very thorough with documentation. I document not only what was changed, but why,
            how the pieces connect, what was discovered during troubleshooting, and what someone
            needs to know to support the process later.
          </p>
          <p className="coming-soon">
            Sanitized documentation and workflow examples will be added here as portfolio case studies.
          </p>
        </div>

        <div className="documentation-list">
          {documentation.map((item) => (
            <div className="documentation-item" key={item}>
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell skills-section">
        <div className="section-kicker">Technical range</div>
        <h2>A broad Microsoft-focused stack, with SQL, integration, and business systems at the center.</h2>
        <div className="skills">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="shell consulting-section">
        <div>
          <div className="section-kicker">Gerlich Consulting</div>
          <h2>Consulting that connects business needs with technical delivery.</h2>
        </div>
        <div className="body-copy">
          <p>
            Through Gerlich Consulting, my work has included SQL Server development, data integration,
            business systems, Power Platform solutions, workflow automation, troubleshooting, and technical consulting.
          </p>
          <p>
            I work directly with stakeholders to understand requirements, document processes, identify where automation
            or integration can help, and deliver solutions that fit the way the business actually operates.
          </p>
        </div>
      </section>

      <section className="shell statement-section">
        <div className="quote-mark">“</div>
        <blockquote>
          I like understanding what is actually happening under the hood—not just whether a screen says the process succeeded.
        </blockquote>
        <p>
          That curiosity has taken me across databases, ERP and CRM systems, integrations, application development,
          reporting, automation, cloud technologies, and business processes throughout my career.
        </p>
      </section>

      <section className="shell contact" id="contact">
        <div className="contact-copy">
          <div className="section-kicker">Contact</div>
          <h2>Need someone who can connect the business problem to the technical solution?</h2>
          <p>
            I’m interested in senior database, integration, Dynamics / Power Platform, application,
            and business systems roles where problem solving and end-to-end thinking matter.
          </p>
        </div>
        <ContactForm />
      </section>

      <footer className="shell">
        <span>© {new Date().getFullYear()} Tina Gerlich</span>
        <span>SQL · Data · Dynamics · Power Platform · Integrations</span>
      </footer>
    </main>
  );
}
