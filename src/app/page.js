'use client'


import LoadingScreen from "./components/loadingScreen";
import NavbarFrame from "./components/navbarFrame";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <LoadingScreen />
        <NavbarFrame />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
