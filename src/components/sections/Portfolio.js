import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "./Projects";

export default function Portfolio() {
  const tabs = ["Programming", "VR/AR", "UI/UX"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filtered = projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="container">
      <h2>Portfolio</h2>
      <p>A selection of projects showcasing my skills and passion.</p>

      <div className="portfolio-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab ${tab === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map(project => (
          <Link
            to={`/projects/${project.slug}`} 
            key={project.slug} 
            className="project-card"
            >
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tools-container">
              {project.tools.split(", ").map((tool, i) => (
                <span key={i} className="project-tools">{tool}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
