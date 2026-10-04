import Card from "./Card";

export default function ProjectsSection({ id, title, data }) {

  if (!data || data.length === 0) return null;

  return (
    <section id={id} className="project">

      <h2>{title}</h2>

      <div className="cards-grid">
        {data.map((item, index) => (
          <Card
            key={item.id || index}
            title={item.title}
            image={item.image}
            description={item.description}
            resume={item.resume_write_up}
            level={item.level}
            link={item.link}
            link_certification={id}
          />
        ))}
      </div>

    </section>
  );
}