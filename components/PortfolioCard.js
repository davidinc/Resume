export default function PortfolioCard({ item }) {
  return (
    <article 
      className="portfolio-card" 
      style={{ 
        backgroundImage: item.image ? `url(${item.image})` : 'none',
        backgroundColor: item.background || 'rgba(11, 15, 29, 0.92)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div className="portfolio-meta">
        <span>{item.category}</span>
        {item.link && (
          <a className="btn tertiary" href={item.link} target="_blank" rel="noreferrer">View</a>
        )}
      </div>
    </article>
  );
}
