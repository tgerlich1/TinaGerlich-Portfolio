const skills = [
  "SQL Server & T-SQL",
  "SSIS / SSRS",
  "Dynamics 365",
  "Power Automate",
  "Azure Logic Apps",
  "Dataverse",
  "Dynamics GP",
  "JSON / XML",
  "IIS",
  "PowerShell",
];

const projects = [
  {
    title: "SQL Server Migration & Synchronization",
    copy:
      "Migrated and synchronized a large manufacturing database between SQL Server environments while preserving identity keys, preventing duplicates, and working through transaction log and storage constraints.",
    tags: ["SQL Server", "T-SQL", "Linked Servers", "Data Migration"],
  },
  {
    title: "Dynamics 365 & Integration Work",
    copy:
      "Built and supported integrations around Dynamics 365, Dataverse, Power Automate, Logic Apps, APIs, JSON, XML, and SQL-backed processes. Most of the work has been practical: getting systems to exchange data reliably and troubleshooting them when they do not.",
    tags: ["Dynamics 365", "Dataverse", "Logic Apps", "REST APIs"],
  },
  {
    title: "ERP & Manufacturing Systems",
    copy:
      "Supported Dynamics GP and connected manufacturing processes including customizations, reporting, SQL integrations, label workflows, and legacy business applications that still matter to day-to-day operations.",
    tags: ["Dynamics GP", "Crystal Reports", "VB", "SQL"],
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="eyebrow">Chapel Hill, Tennessee · Open to remote opportunities</div>
        <h1>
          I work where <span>data, business systems, and real-world operations</span> meet.
        </h1>
        <p className="lede">
          I’m Tina Gerlich. My background is a mix of SQL Server, database work,
          Dynamics, ERP systems, integrations, and application support. I’m usually
          the person brought in when data has to move between systems, a process
          needs to be untangled, or an older platform still has to keep working
          while something newer is being built.
        </p>
        <div className="actions">
          <a className="button primary" href="#work">View my work</a>
          <a className="button secondary" href="mailto:your-email@example.com">Email me</a>
        </div>
      </section>

      <section className="shell intro-grid">
        <div>
          <div className="section-kicker">What I do</div>
          <h2>Technical enough to build it. Practical enough to support it.</h2>
        </div>
        <div className="body-copy">
          <p>
            I’ve spent much of my career working with systems that businesses depend
            on every day: SQL databases, reporting, ERP, CRM, integrations, and
            internal applications.
          </p>
          <p>
            I’m comfortable moving between database work and the application layer.
            That may mean tracing a bad record through SQL, fixing an integration,
            reviewing an API payload, supporting a Dynamics process, or documenting
            a legacy workflow before it is replaced.
          </p>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-kicker">Selected work</div>
        <div className="project-list">
          {projects.map((project, i) => (
            <article className="project" key={project.title}>
              <div className="project-number">0{i + 1}</div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell skills-section">
        <div className="section-kicker">Core tools</div>
        <h2>A broad Microsoft-focused stack, with SQL at the center.</h2>
        <div className="skills">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="shell experience">
        <div className="section-kicker">How I work</div>
        <div className="experience-grid">
          <div className="quote">
            “I like understanding what is actually happening under the hood —
            not just whether a screen says the process succeeded.”
          </div>
          <div className="body-copy">
            <p>
              My strongest work tends to be in environments where there is a lot of
              history: older systems, newer cloud tools, custom SQL, business rules,
              and integrations that have grown over time.
            </p>
            <p>
              I’m methodical about finding the real source of a problem, and I value
              documentation that another person can actually use later.
            </p>
          </div>
        </div>
      </section>

      <section className="shell contact">
        <div>
          <div className="section-kicker">Contact</div>
          <h2>Looking for someone who can bridge systems and data?</h2>
        </div>
        <div>
          <p>
            I’m interested in senior SQL, database engineering, data integration,
            Dynamics, ERP, and business systems roles.
          </p>
          <a href="mailto:your-email@example.com">your-email@example.com →</a>
        </div>
      </section>

      <footer className="shell">
        <span>© {new Date().getFullYear()} Tina Gerlich</span>
        <span>SQL · Data · Dynamics · Integrations</span>
      </footer>
    </main>
  );
}
