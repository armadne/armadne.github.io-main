import React from "react";
import Header from "../components/Header";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer"

import sitesWeb from "../data/sites_web.json";
import python from "../data/projets_python.json";
import embarque from "../data/projets_embarque.json";
import certifications from "../data/certifications.json";
import competences from "../data/competences.json"
import Parcours from "../components/Parcours";

const competencesArray = Object.entries(competences).map(([key, values]) => ({
  title: key.replace("_", " ").toUpperCase(),
  resume_write_up: values
}));


import "../styles/style.scss";

import cyber from "../data/cybersecurite.json";

const cyberArray = [
  ...cyber["404CTF"].challenges,
  ...cyber["TryHackMe"].rooms
];

export default function Home() {

  return (
    <>
      <Header />

      <Parcours/>

      <main className="container">

        <ProjectsSection
          id="site-web"
          title="Projets Web"
          data={sitesWeb}
        />

        <ProjectsSection
          id="projets-python"
          title="Projets Python"
          data={python}
        />

        <ProjectsSection
          id="embarque"
          title="Systèmes embarqués"
          data={embarque}
        />

             <ProjectsSection
  id="cybersecurite"
  title="Cybersécurité – CTF & TryHackMe"
  data={cyberArray}
/>

             <ProjectsSection
  id="competences"
  title="Compétences"
  data={competencesArray}
/>


        <ProjectsSection
          id="certifications"
          title="Certifications"
          data={certifications}
        />

 
 <Footer />
        
      </main>
    </>
  );
}
