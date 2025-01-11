"use client";

import { useLayoutEffect, useRef } from "react";
import gsap, { Expo } from "gsap";

import "./cursorCircle.css";
import useHomeStore from "@/store/homeStore";
import { getAngle } from "@/utils/jellyBlob";


const JellyBlob = () => {
  const appSectRef = useHomeStore((state) => state.appSectRef);
  const workContRefs = useHomeStore((state) => state.workContRefs);

  const cursorOnAppsSection = useRef({ value: false})
  const circleScale = useRef({ value: 0.6 })

  const jellyRef = useRef(null);

  // Save pos and velocity Objects
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });


  const setJellyX = useRef(null);
  const setJellyY = useRef(null);
  const setJellyRotate = useRef(null);
  const setJellyOpacity = useRef(null);

 
  useLayoutEffect(() => {
    setJellyX.current = gsap.quickSetter(jellyRef.current, "x", "px");
    setJellyY.current = gsap.quickSetter(jellyRef.current, "y", "px");
    setJellyRotate.current = gsap.quickSetter(jellyRef.current, "rotate", "deg");
    setJellyOpacity.current = gsap.quickSetter(jellyRef.current, "opacity");
  }, []);

  // Start Animation loop
  const loop = () => {

    const rotation = getAngle(vel.current.x, vel.current.y); // Mouse Move Angle

    if (cursorOnAppsSection.current.value) {
      gsap.to(jellyRef.current, {
        scale: circleScale.current.value,
        ease: Expo.easeOut,
        duration: 0.8,
      });
    } else {
        gsap.to(jellyRef.current, {
          scale: 0,
          ease: Expo.easeOut,
          duration: 0.8,
        });
    }

    setJellyX.current(pos.current.x);
    setJellyY.current(pos.current.y);
    setJellyRotate.current(rotation);

    
    // Continue animation loop
    requestAnimationFrame(loop);
  };

  // Run on Mouse Move
  useLayoutEffect(() => {
    if (!window) return


    
    const setFromEvent = (e) => {
      // Mouse X and Y
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(pos.current, {
          x: x,
          y: y,
          duration: 1.5,
          ease: Expo.easeOut,
          onUpdate: () => {
            vel.current.x = x - pos.current.x;
            vel.current.y = y - pos.current.y;
          },
        });


    };

    window.addEventListener("mousemove", setFromEvent);
    
    loop();


    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, [loop]);


  // Mouse enter and leave events for fade-in/fade-out
  useLayoutEffect(() => {
    if (typeof window == "undefined") return;

    
    const handleMouseLeave = () => {
      gsap.set(jellyRef.current, {
        scale: 0,
        ease: Expo.easeOut,
        duration: 0.8,
      });
    };

    const handleCursorOnAppSect = () => {
        cursorOnAppsSection.current.value = true;
      };

    const handleCursorLeftAppSect = () => {
        cursorOnAppsSection.current.value = false;
      };

    const handleCursorOnWorkCont = () => {
        circleScale.current.value = 1;
      };

    const handleCursorLeftWorkCont = () => {
        circleScale.current.value = 0.6;
      };

    // Add event listeners for mouseleave on window
    window.addEventListener("mouseout", handleMouseLeave);

    if (appSectRef) {
        appSectRef.addEventListener("mouseenter", handleCursorOnAppSect);
        appSectRef.addEventListener("mouseleave", handleCursorLeftAppSect);
    }

    workContRefs?.forEach((ref) => {
        if (ref) {
          ref.addEventListener("mouseenter", handleCursorOnWorkCont);
          ref.addEventListener("mouseleave", handleCursorLeftWorkCont);
        }
      });

    

    // Cleanup event listeners
    return () => {
      window.removeEventListener("mouseout", handleMouseLeave);
      if (appSectRef) {
        appSectRef.removeEventListener("mouseenter", handleCursorOnAppSect);
        appSectRef.removeEventListener("mouseleave", handleCursorLeftAppSect);
      }
      
    workContRefs?.forEach((ref) => {
        if (ref) {
          ref.removeEventListener("mouseenter", handleCursorOnWorkCont);
          ref.removeEventListener("mouseleave", handleCursorLeftWorkCont);
        }
      });
    };
  }, [appSectRef, workContRefs]);



  return (
    <div className="container-div">
      <div ref={jellyRef} id="jelly-id" className="jelly-blob">
      </div>
    </div>
  );
};

export default JellyBlob;
