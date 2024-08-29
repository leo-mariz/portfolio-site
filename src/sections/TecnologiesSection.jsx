import Skills from "../components/Tecnologie.jsx";
import styles from "./static/Tecnologies.module.css";
import icons from "../assets/icons/icons.jsx";

function SkillsSection() {
    const skills = [
        {
        icon: icons["Python"],
        name: "Python",
        },
        {
        icon: icons["JavaScript"],
        name: "JavaScript",
        },
        {
        icon: icons["HTML"],
        name: "HTML",
        },
        {
        icon: icons["CSS"],
        name: "CSS",
        },
        {
        // icon: icons["Flutter"],
        name: "Flutter",
        },
        {
        icon: icons["AWS"],
        name: "AWS",
        },
        {
        icon: icons["Django"],
        name: "Django",
        },
        {
        // icon: icons["Flask"],
        name: "Flask",
        },
        {
        // icon: icons["Streamlit"],
        name: "Streamlit",
        },
        {
        icon: icons["ReactJS"],
        name: "ReactJS",
        },
        {
        icon: icons["SQL"],
        name: "SQL",
        },
        {
        icon: icons["MySQL"],
        name: "MySQL",
        },
    ];
    
    return (
        <section className={styles.SkillsSection}>
        <h2>Tecnologias</h2>
        <div className={styles.SkillsContainer}>
            {skills.map((skill, index) => (
            <Skills key={index} {...skill}/>
            ))}
        </div>
        </section>
    )
}

export default SkillsSection;