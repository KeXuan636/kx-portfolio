import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "./Projects";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const index = projects.findIndex(
    p => p.slug.toLowerCase() === projectId.toLowerCase()
  );

  if (index === -1) return <p>Project not found</p>;

  const project = projects[index];
  const nextProject = projects[index + 1];
  const prevProject = projects[index - 1];

  // const isVideo = project.link && /\.(mp4|webm|ogg)$/i.test(project.link);

  return (
    <section className="project-detail">
      <h1 className="project-title">{project.title}</h1>

      <div className="project-image">
        <img src={project.imageUrl} alt={project.title} />
      </div>

      <div className="project-info">
        {project.overview && (
          <div className="project-section">
            <h3>Overview</h3>
            <p>{project.overview}</p>
            <div className="project-section-divider" />
          </div>
        )}

        {project.solution && (
          <div className="project-section">
            <h3>Solution</h3>
            <p>{project.solution}</p>
            <div className="project-section-divider" />
          </div>
        )}

        {project.challenges && (
          <div className="project-section">
            <h3>Challenges</h3>
            <p>{project.challenges}</p>
            <div className="project-section-divider" />
          </div>
        )}

        <div className="project-section">
          <h3>Tools Used</h3>
          <ul className="project-tools-list">
            {project.tools.split(", ").map(tool => (
              <li key={tool} className="project-tool">{tool}</li>
            ))}
          </ul>
        </div>

        {project.link && (
          <div className="project-actions">
            <button
              className="btn btn-primary"
              onClick={() => window.open(project.link, "_blank")}
            >
              View Demo
            </button>
          </div>
        )}

        <div className="navigation-buttons">
          {prevProject && (
            <button
              className="nav-btn"
              onClick={() => navigate(`/projects/${prevProject.slug}`)}
            >
              Previous
            </button>
          )}

          {nextProject && (
            <button
              className="nav-btn"
              onClick={() => navigate(`/projects/${nextProject.slug}`)}
            >
              Next
            </button>
          )}
        </div>

        <div className="back-home">
          <Link to="/">Back to Homepage</Link>
        </div>
      </div>
    </section>
  );
}
