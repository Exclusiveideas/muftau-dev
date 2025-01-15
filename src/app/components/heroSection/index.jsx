"use client";

import useHomeStore from "@/store/homeStore";
import "./heroSection.css";
import gsap from "gsap";
import { useEffect } from "react";

const HeroSection = () => {    
  const loadingScreen = useHomeStore((state) => state.loadingScreen);

    useEffect(() => {
      if(loadingScreen) return;

      const timeoutId = setTimeout(() => {
        revealText()
      }, 300);
    
      return () => {
        clearTimeout(timeoutId);
      }
    }, [loadingScreen])

    const revealText = () => {
        const headerWords = document.querySelectorAll('.headerWord')
        gsap.fromTo(
            headerWords,
            {
              opacity: 0,
              y: '100%',
            },
            {
              opacity: 1,
              y: 0, 
              duration: 1,
              ease: 'power2.out',
            }
          );
    }
    
  return (
    <div className="heroSection-wrapper">
      <div className="heroContent-wrapper">
        <p className="name"><span className="headerWord">Muftau Jimoh</span></p>
        <h2 className="headerText">
          <p><span className="headerWord">Building</span></p>
          <p className="red"><span className="headerWord">Good</span></p>
          <p className="red"><span className="headerWord">Apps</span></p>
          <p><span className="headerWord">since</span></p>
          <p><span className="headerWord">2019</span></p>
        </h2>
      </div>
      <div className="background-circle"></div>
    </div>
  );
};

export default HeroSection;
 