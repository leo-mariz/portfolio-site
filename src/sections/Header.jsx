import styles from './static/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h2>Leonardo Mariz</h2>
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