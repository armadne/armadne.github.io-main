export default function Header() {
  return (
    <header className="site-header">
      <h1 id="titre">
        <strong>Portfolio</strong>
      </h1>

      <nav id="navbar">
        <ul className="nav-list">
          <li><a href="#site-web">Site Web</a></li>
          <li><a href="#projets-python">Python</a></li>
          <li><a href="#embarque">Embarqué</a></li>
          <li><a href="#cybersecurite">Cybersécurité</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#certifications">Certifications</a></li>

        </ul>
      </nav>
    </header>


  );
}
