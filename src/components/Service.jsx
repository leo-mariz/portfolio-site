import styles from '../sections/static/Services.module.css';

function Service({icon, title, description}) {
  return (
    <div className={styles.Service}>
        <img src={icon} alt="icon" />
        <h3> {title} </h3>
        <p> {description} </p>
    </div>
  );
}

export default Service;