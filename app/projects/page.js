'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '../../data/resumeData';
import ProjectCard from '../../components/ProjectCard';
import Section from '../../components/Section';

const categories = ['All', ...new Set(projects.map((project) => project.category))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const visibleProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="page-container">
      <Section title="Project Portfolio" description="Explore Java, JavaScript, Swift, and Graphics work delivered for web and mobile." id="projects-page">
        <div className="filter-row">
          {categories.map((category) => (
            <button
              key={category}
              className={category === activeCategory ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="card-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="section-footer">
          <Link href="/" className="btn tertiary">Back to Home</Link>
        </div>
      </Section>
    </main>
  );
}
