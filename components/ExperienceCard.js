export default function ExperienceCard({ item }) {
  return (
    <article className="experience-card">
      <div className="time">{item.period}</div>
      <div>
        <h3>{item.title}</h3>
        <p style={{ fontWeight: 600, color: '#9ca2ff', marginBottom: '4px' }}>{item.company}</p>
      </div>
      <p>{item.summary}</p>
    </article>
  );
}
