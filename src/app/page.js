'use client'


import useHomeStore from "@/store/homeStore";
import AboutSection from "./components/aboutSection";
import HeroSection from "./components/heroSection";
import LoadingScreen from "./components/loadingScreen";
import { NavbarFrameLeft, NavbarFrameRight } from "./components/navbarFrame";
import styles from "./page.module.css";
import WhatIDo from "./components/whatIDo";
import Experience from "./components/experience";
import AppsSection from "./components/appsSection";
import Clients from "./components/clients";
import WhatTheySaid from "./components/whatTheySaid";
import Motto from "./components/motto";

export default function Home() {
  const loadingScreen = useHomeStore((state) => state.loadingScreen);

  const pageClassName = `${styles.page} ${loadingScreen ? styles.fixedheight : styles.dynamicHeight}`;

  return (
    <div className={pageClassName}>
      <main className={styles.main}>
        <LoadingScreen />
        <NavbarFrameLeft />
        <NavbarFrameRight />
        <HeroSection />
        <AboutSection />
        <WhatIDo />
        <Experience />
        <AppsSection />
        <Clients />
        <WhatTheySaid />
        <Motto />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
