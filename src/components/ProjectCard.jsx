import "./ProjectCard.css";

const ProjectCard = ({ number, title, type, videoSrc, description, href, tags, details, links }) => {
  return (
    <article className={`project-card project-card-${number}`} id={`projet-${number}`}>
      <div className="project-card-topline"><span>{type}</span></div>
      <h3>{title}</h3>
      {videoSrc ? <figure className="project-media"><video className="demo-video" src={videoSrc} controls muted playsInline preload="metadata" aria-label={`Démonstration ${title}`} /><figcaption>Présentation de l’application</figcaption></figure> : <div className="project-graphic" aria-hidden="true"><span>{title}</span><small>{type}</small></div>}
      <div className="project-description">
        <p>{description}</p>
        {details && Object.entries(details).map(([label, content]) => <p key={label}><strong>{label}.</strong> {content}</p>)}
        {href && <a className="text-link project-link" href={href} target="_blank" rel="noreferrer">Découvrir le projet</a>}
        {links && <div className="project-external-links">{links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div>}
      </div>
      <div className="project-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
};

export default ProjectCard;
