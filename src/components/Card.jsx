import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Card({ 
  title, 
  image, 
  description, 
  resume, 
  level, 
  link,
  link_certification
}) {

  const isCertification = link_certification === "certifications";

  return (
    <article className="project">

      {image && <img src={image} alt={title} />}

      <h3>{title}</h3>

      {(description || level) && (
        <p>{description || `Niveau : ${level}`}</p>
      )}

      {resume && (
        <ul>
          {resume.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}

      {link && (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isCertification ? (
            "Voir certification"
          ) : (
            <>
              <FontAwesomeIcon icon={faGithub} /> Voir sur GitHub
            </>
          )}
        </a>
      )}

    </article>
  );
}
