import styles from './static/Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <p>
        Olá, me chamo <strong>Leonardo Mariz</strong>!
      </p>
      <p>
        Sou um desenvolvedor Full Stack residente do Rio de Janeiro.
      </p>
    </section>
  )
}

export default Hero;