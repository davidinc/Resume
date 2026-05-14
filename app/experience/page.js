import Link from 'next/link';
import { experience, skills } from '../../data/resumeData';
import ExperienceCard from '../../components/ExperienceCard';
import Section from '../../components/Section';

export default function ExperiencePage() {
  return (
    <main className="page-container">
      <Section title="Experience Timeline" description="Career milestones across architecture, telecom systems, cloud, and mobile development." id="experience-page">
        <div className="timeline">
          {experience.map((item) => (
            <ExperienceCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section title="Top Technologies" description="A dynamic list you can update whenever you add a new skill or project.">
        <div className="skill-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>
      </Section>

      <div className="section-footer">
        <Link href="/" className="btn tertiary">Back to Home</Link>
      </div>
    </main>
  );
}
