import "./StackBanner.css";

const skills = [
  ["Front-end", "HTML, CSS, SCSS, JavaScript"],
  ["Frameworks et outils", "React, Next.js, Astro, React Router, Vite, jQuery"],
  ["CMS et e-commerce", "Shopify (Liquid, Hydrogen), WordPress, Directus"],
  ["Back-end et données", "Ruby, Ruby on Rails, SQL, Supabase"],
  ["Design", "Figma, design system"],
  ["Qualité", "Lighthouse, WAVE, SEO, accessibilité"],
  ["Organisation et versioning", "Git, GitHub, GitLab, Trello, Notion"],
  ["Intelligence artificielle", "Claude"],
];

export default function StackBanner() {
  return <section className="stack-banner"><div><h2>Mes compétences techniques</h2><p>Les outils que j’utilise au quotidien, en formation et en agence.</p></div><div>{skills.map(([label, items]) => <div className="skill-row" key={label}><h3>{label}</h3><p>{items}</p></div>)}</div></section>;
}
