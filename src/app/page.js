'use client'


import useHomeStore from "@/store/homeStore";
import AboutSection from "./components/aboutSection";
import HeroSection from "./components/heroSection";
import LoadingScreen from "./components/loadingScreen";
import NavbarFrame from "./components/navbarFrame";
import styles from "./page.module.css";
import WhatIDo from "./components/whatIDo";

export default function Home() {
  const loadingScreen = useHomeStore((state) => state.loadingScreen);

  const pageClassName = `${styles.page} ${loadingScreen ? styles.fixedheight : styles.dynamicHeight}`;

  return (
    <div className={pageClassName}>
      <main className={styles.main}>
        <LoadingScreen />
        <NavbarFrame />
        <HeroSection />
        <AboutSection />
        <WhatIDo />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
