import React from 'react';
import Project from '../components/Project.jsx';
import styles from './static/Project.module.css';

function ProjectSection() {
  const projects = [
    {
      title: "Plano Alimentar com IA",
      description: "A full-stack e-commerce web application built with Python and Django",
      technologies: "Python, Django, HTML, CSS, JavaScript",
      // imageUrl: "https://cdn.usegalileo.ai/stability/e6aa2f8b-ac96-4413-8182-b41ab80fe364.png"
    },
    {
      title: "Sistema de Controle de Investimentos",
      description: "A social networking web app built with Python and Flask",
      technologies: "Python, Flask, HTML, CSS, JavaScript",
      // imageUrl: "https://cdn.usegalileo.ai/sdxl10/801c0ce1-1178-42ef-ac74-211fa3bfb637.png"
    }
  ];

  return (
    <section>
      <h2>Projetos</h2>
      <div className={styles.ProjectSection}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection;