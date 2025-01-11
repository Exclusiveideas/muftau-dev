"use client";

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
import Contact from "./components/contact";
import { useEffect, useRef } from "react";

export default function Home() {
  const aboutWrapperRef = useRef(null);
  const workWrapperRef = useRef(null);
  const contactWrapperRef = useRef(null);

  const loadingScreen = useHomeStore((state) => state.loadingScreen);

  const pageClassName = `${styles.page} ${
    loadingScreen ? styles.fixedheight : styles.dynamicHeight
  }`;

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const activeMenu = useHomeStore((state) => state.activeMenu);

  useEffect(() => {
    if(activeMenu == 'about') {
      scrollToSection(aboutWrapperRef)
    }
    if(activeMenu == 'work') {
      scrollToSection(workWrapperRef)
    }
    if(activeMenu == 'contact') {
      scrollToSection(contactWrapperRef)
    }
  }, [activeMenu])
  

  return (
    <div className={pageClassName}>
      <main className={styles.main}>
        <LoadingScreen />
        <NavbarFrameLeft />
        <NavbarFrameRight />
        <div ref={aboutWrapperRef} className="aboutMeWrapper">
          <HeroSection />
          <AboutSection />
          <WhatIDo />
        </div>
        <div ref={workWrapperRef} className="workWrapper">
          <Experience />
          <AppsSection />
          <Clients />
          <WhatTheySaid />
        </div>
      </main>
      <footer className={styles.footer}>
        <div ref={contactWrapperRef} className="contactWrapper">
          <Motto />
          <Contact />
        </div>
      </footer>
    </div>
  );
}
