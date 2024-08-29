
import styles from "../sections/static/Project.module.css";
import ProjectImages from "./ProjectImages";

function Project({ title, description, technologies, imageUrl}) {
  return (
    <div className={styles.ProjectContainer}>
      <ProjectImages className={styles.ProjectImage} imageUrl={imageUrl}/>
      <div className={styles.ProjectDetails}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <strong>Technologies used:</strong> {technologies}
        </p>
      </div>
    </div>
  );
}

export default Project;

