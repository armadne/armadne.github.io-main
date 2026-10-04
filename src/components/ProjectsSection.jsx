import { useState } from "react";
import Card from "./Card"; 

export default function ProjectsSection({ id, title, data }) {

  const [showAllCyber, setShowAllCyber] = useState(false);
  

  if (!data || data.length === 0) return null;

  const isCyber = id === "cybersecurite";
 

  let visibleData = data;

  if (isCyber && !showAllCyber) {
    visibleData = data.slice(0, 3);
  }


  return (
    <section id={id} className="project">

      <h2>{title}</h2>

      <div className="cards-grid">
        {visibleData.map((item, index) => (
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

      
      {isCyber && (
        <button
          className="show-more"
          onClick={() => setShowAllCyber(!showAllCyber)}
        >
          {showAllCyber ? "Afficher moins" : "Afficher plus"}
        </button>
      )}

    </section>
  );
}
