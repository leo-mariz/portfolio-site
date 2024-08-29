import styles from './static/Header.module.css';
import icons from "../assets/icons/icons.jsx";

function Header() {
  const icon = icons["Header"]
  return (
    <header className={styles.header}>
      <h2>LEONARDO MARIZ</h2>
      <img src={icon}></img>
      <nav>
        <ul>
          <li><a href="#sobremim">Sobre Mim</a></li> 
          <li><a href="#tecnologias">Tecnologias</a></li> 
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}


export default Header;