'use client'


import LoadingScreen from "./components/loadingScreen";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <LoadingScreen />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
