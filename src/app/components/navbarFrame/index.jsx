"use client";

import Image from "next/image";
import "./navbarFrame.css";
import {
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
  TwitterIcon,
} from "../icons/icons";
import WaveAnimation from "../waveAnimation";
import { useState } from "react";
import useHomeStore from "@/store/homeStore";

export const NavbarFrameLeft = () => {
  return ( 
    <div className="navbarFrame-wrapper left">
      <div className="logo_container">
        <a href="/" className="dog-container navbarFrame">
          <div className="dog-face navbarFrame">
            <Image
              src={"/images/dog-img.png"}
              width={80}
              height={80}
              alt="deer"
              className="dogImg navbarFrame"
            />
          </div>
        </a>
      </div>
      <div className="externalLinks_container">
        <div className="external-links">
          <MediumIcon />
          <TwitterIcon />
          <GitHubIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  )
};


export const NavbarFrameRight = () => {
  const [sound, setSound] = useState(false)
  const [menuHover, setMenuHover] = useState('')
  const activeMenu = useHomeStore((state) => state.activeMenu);
  const setActiveMenu = useHomeStore((state) => state.setActiveMenu);

  const goToSection = (section) => {
    setActiveMenu(section)
  }
  

  return (
    <div className="navbarFrame-wrapper right">
      <div className="soundControl_container">
        <WaveAnimation setSound={setSound} />
        <p>Sound {sound ? 'On' : 'Off'}</p>
      </div>
      <div className="menu_container">
        <ol className="menu-items">
          <li onClick={() => goToSection('about')} onMouseOver={() => setMenuHover('about')} onMouseOut={() => setMenuHover('')} className={`menu-item ${activeMenu == 'about' ? 'active' : (menuHover == 'about' ? 'active' : '')}`}>
            <div className="text_innerContainer">
              <p>About</p>
              <p>About</p>
            </div>
          </li>
          <li onClick={() => goToSection('work')} onMouseOver={() => setMenuHover('work')} onMouseOut={() => setMenuHover('')} className={`menu-item ${activeMenu == 'work' ? 'active' : (menuHover == 'work' ? 'active' : '')}`}>
            <div className="text_innerContainer">
              <p>Work</p>
              <p>Work</p>
            </div>
          </li>
          <li onClick={() => goToSection('contact')} onMouseOver={() => setMenuHover('contact')} onMouseOut={() => setMenuHover('')} className={`menu-item ${activeMenu == 'contact' ? 'active' : (menuHover == 'contact' ? 'active' : '')}`}>
            <div className="text_innerContainer">
              <p>Contact</p>
              <p>Contact</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};
