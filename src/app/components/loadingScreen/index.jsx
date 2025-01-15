import { useEffect, useRef, useState } from 'react';
import './loadingScreen.css';
import CustomEase from 'gsap/CustomEase';
import gsap from 'gsap';
import Image from 'next/image';
import useHomeStore from '@/store/homeStore';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  const deerRef = useRef(null);
  const progressRef = useRef(null);
  const progressTxtRef = useRef(null);
  const startBtnRef = useRef(null);
  const loadingScreenRef = useRef(null);
  
  const loadingScreen = useHomeStore((state) => state.loadingScreen);
  const setLoadingScreen = useHomeStore((state) => state.setLoadingScreen);
  const heroVideoLoaded = useHomeStore((state) => state.heroVideoLoaded);

  useEffect(() => {
    let interval;

    if (progress < 23) {
      // Progress up to 23%
      interval = setInterval(() => setProgress((prev) => Math.min(prev + 1, 23)), 7);
    } else if (heroVideoLoaded && progress < 100) {
      // If videoLoaded is true, progress to 100%
      interval = setInterval(() => setProgress((prev) => Math.min(prev + 2, 100)), 7);
    }

    return () => clearInterval(interval); // Cleanup interval
  }, [progress, heroVideoLoaded]);

  useEffect(() => {
    if(progress < 100) return

    showStart()
  }, [progress]);

  const showStart = () => {
    if(!progressRef?.current || !progressTxtRef?.current || !deerRef?.current || !startBtnRef?.current) {
        return
    }


    const progressCirc = progressRef?.current
    const progresTxt = progressTxtRef?.current
    const deer = deerRef?.current
    const startBtn = startBtnRef?.current

    const tl = gsap.timeline()

    tl.to(progressCirc, {
        opacity: 0,
        duration: .8,
        ease: CustomEase.create("custom", "M0,0 C0.796,0 0.198,1 1,1 ")
    })
    .to(progresTxt, {
        opacity: 0,
        duration: .8,
        ease: CustomEase.create("custom", "M0,0 C0.796,0 0.198,1 1,1 ")
    }, "<")
    .to(progressCirc, {
        display: 'none',
        duration: 0,
    }, )
    .to(progresTxt, {
        display: 'none',
        duration: 0,
    }, "<")
    .to(deer, {
        y: -50,
        duration: .8,
        ease: CustomEase.create("custom", "M0,0 C0.796,0 0.198,1 1,1 ")
    })
    .to(startBtn, {
        y: -50,
        opacity: 1,
        duration: .8,
        delay: 0.1,
        ease: CustomEase.create("custom", "M0,0 C0.796,0 0.198,1 1,1 ")
    }, "<")
  }
  
  useEffect(() => {
    if(loadingScreen || !loadingScreenRef?.current) {
        return
    }
    closeLoadingScreen()
  }, [loadingScreen])

  const closeLoadingScreen = () => {
    const tl = gsap.timeline();

    tl.to(loadingScreenRef?.current, {
        opacity: 0,
        duration: .8,
        ease: CustomEase.create("custom", "M0,0 C0.796,0 0.198,1 1,1 ")
    })
    .to(loadingScreenRef?.current, {
        display: 'none'
    })
  }
  

 
  return (
    <div ref={loadingScreenRef} className="loadingScreen">
      <div className="centerContainer">
        <svg
          ref={progressRef}
          className="progress-circle"
          width="300"
          height="300"
        >
          <circle
            className="circle-bg"
            cx="150"
            cy="150"
            r="130"
            fill="none"
            stroke="rgba(95, 95, 95, 0)"
            strokeWidth="1"
          />
          <circle
            className="circle-progress"
            cx="150"
            cy="150"
            r="130"
            fill="none"
            stroke="#B7AB98"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="816.81" /* Circumference of the circle */
            strokeDashoffset={
              816.81 - (816.81 * progress) / 100
            } /* Dynamic fill */
          />
        </svg>
        <p ref={progressTxtRef} className="progressTxt">
          {progress}%
        </p>
        <div ref={deerRef} className="dog-container">
          <div className="dog-face">
            <Image
              src={"/images/dog-img.png"}
              width={80}
              height={80}
              alt="deer"
              className='dogImg'
            />
          </div>
        </div>
        <div ref={startBtnRef} className="startBtn_container" onClick={() => setLoadingScreen(false)}>
          START
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen