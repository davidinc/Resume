export default function Section({ title, description, id, children }) {
  return (
    <section className="section" id={id}>
      <div className="section-heading">
        <div>
          <h2 className="section-title">{title}</h2>
          {description ? <p className="section-description">{description}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}
