export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image && (
        <img className="project-image" src={project.image} alt={project.title} />
      )}
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="portfolio-meta">
        <span>{project.category}</span>
        <span>{project.technologies.join(' • ')}</span>
      </div>
      <div className="project-links">
        {project.live && (
          <a className="btn tertiary" href={project.live} target="_blank" rel="noreferrer">Live</a>
        )}
        {project.repo && (
          <a className="btn tertiary" href={project.repo} target="_blank" rel="noreferrer">Repo</a>
        )}
      </div>
    </article>
  );
}
