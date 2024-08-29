import styles from "../sections/static/Tecnologies.module.css"

function Skills ({icon, name}) {
    return (
        <div className={styles.Skill}>
            <img src={icon} />
            <p>{name}</p>
        </div>
    )
}

Skills.defaultProps = {
    icon: ""
}

export default Skills