"use client";

import { useEffect, useRef, useState } from "react";

import "./waveAnimation.css";
import gsap from "gsap";
import useHomeStore from "@/store/homeStore";

const WaveAnimation = ({ setSound }) => {
  const svgRef = useRef(null);
  const lineRef = useRef(null);
  const [isWaving, setIsWaving] = useState(true);
  const waveAnimationRef = useRef(null); 
  const audioRef = useRef(null); 
  const numPoints = 8; // Fewer points for a shorter 40px line
  const pointSpacing = 5; // Spacing between points
  
  const loadingScreen = useHomeStore((state) => state.loadingScreen);

  const createLine = () => {
    const mainSVG = svgRef.current;
    const poly = lineRef.current;

    for (let i = 0; i < numPoints; i++) {
      const point = mainSVG.createSVGPoint();
      point.x = 5 + i * pointSpacing; // Start with some padding
      point.y = 25; // Center vertically in the circular div
      poly.points.appendItem(point);
    }
  };

  const straightenLine = () => {
    const poly = lineRef.current;
    gsap.to(poly.points, {
      y: 25, // Center all points horizontally
      duration: 0.5, // Smooth transition to straight line
      ease: "sine.inOut",
    });
  };

  useEffect(() => {
    // Set visibility of SVG
    gsap.set(svgRef.current, { visibility: "visible" });

    // Create the line
    createLine();

    const poly = lineRef.current;

    // Initialize wave animation but don't play it yet
    waveAnimationRef.current = gsap.to(poly.points, {
      y: "+=5", // Move points up and down
      stagger: {
        each: 0.1,
        repeat: -1,
        yoyo: true,
      },
      ease: "sine.inOut",
      paused: true, // Start paused
    });

    waveAnimationRef.current.play();

    return () => {
      // Cleanup animation on unmount
      waveAnimationRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current || loadingScreen) return;

    audioRef.current.volume = 0.3;
    audioRef.current.play();

    return () => {
      // Cleanup audio on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, [loadingScreen]);

  useEffect(() => {
    if(isWaving) {
      setSound(true)
    } else {
      setSound(false)
    }
  }, [isWaving])
  
  

  const toggleWaveAndMusic = () => {
    setIsWaving((prev) => {
      const newState = !prev;

      if (newState) {
        // Start waving and play music
        waveAnimationRef.current.play();
        if (audioRef.current) {
          audioRef.current.play();
        }
      } else {
        // Stop waving and pause music
        waveAnimationRef.current.pause();
        straightenLine();
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }

      return newState;
    });
  };

  return (
    <div
      onClick={toggleWaveAndMusic}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        background: "#B7AB98",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
    <audio
      ref={audioRef}
      src="/music/app_music.mp3"
      loop
    />
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        style={{ width: "50px", height: "50px", visibility: "hidden" }}
      >
        <polyline
          ref={lineRef}
          style={{
            stroke: "#EB5939",
            fill: "none",
            strokeWidth: 2,
            strokeLinejoin: "round",
            strokeLinecap: "round",
          }}
        />
      </svg>
    </div>
  );
};

export default WaveAnimation;
