import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.icon}>🎬</span>
          <h1 className={styles.title}>CineVault</h1>
        </div>
        <p className={styles.subtitle}>Sua coleção premium de cinema</p>
      </div>
      <div className={styles.decoration}></div>
    </header>
  );
}