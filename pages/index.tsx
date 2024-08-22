import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.laconic.com/" target="_blank" rel="noopener noreferrer">Laconic!</a>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="https://placekitten.com/400/300" alt="Cute Cat 1" className={styles.image} />
            <h3>Cute Cat 1</h3>
          </div>

          <div className={styles.card}>
            <img src="https://placekitten.com/401/300" alt="Cute Cat 2" className={styles.image} />
            <h3>Cute Cat 2</h3>
          </div>

          <div className={styles.card}>
            <img src="https://placekitten.com/402/300" alt="Cute Cat 3" className={styles.image} />
            <h3>Cute Cat 3</h3>
          </div>

          <div className={styles.card}>
            <img src="https://placekitten.com/403/300" alt="Cute Cat 4" className={styles.image} />
            <h3>Cute Cat 4</h3>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.laconic.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &nbsp;
          <img src="https://placekitten.com/200/50" alt="Laconic Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
