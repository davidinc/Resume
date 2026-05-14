import Link from 'next/link';
import { hero, stats, expertise, featuredProjects, portfolio } from '../data/resumeData';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import PortfolioCard from '../components/PortfolioCard';

export default function HomePage() {
  return (
    <main className="page-container">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Dynamic Resume & Portfolio</p>
          <h1>{hero.name}</h1>
          <p className="hero-tagline">{hero.subtitle}</p>
          <div className="hero-actions">
            <a href="mailto:chernetdawitayalew@gmail.com" className="btn primary">Contact Me</a>
            <Link href="/projects" className="btn secondary">View Projects</Link>
          </div>
          <div className="role-badges">
            {hero.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
        </div>
      </section>

      <Section title="Professional Profile" id="about">
        <p>{hero.description}</p>
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Telecom • Software • Mobile" id="expertise">
        <div className="card-grid">
          {expertise.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Featured Projects" id="featured-projects">
        <div className="card-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="section-footer">
          <Link href="/projects" className="btn tertiary">Browse All Projects</Link>
        </div>
      </Section>

      <Section title="Portfolio Showcase" id="portfolio">
        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>
      </Section>
    </main>
  );
}
