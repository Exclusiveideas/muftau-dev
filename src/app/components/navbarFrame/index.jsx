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
import { useRef, useState } from "react";
import useHomeStore from "@/store/homeStore";
import FollowCursorComponent from "@/app/homePageComps/followCursorComponent";

export const NavbarFrameLeft = () => {
  return (
    <div className="navbarFrame-wrapper left">
      <FollowCursorComponent className="logo_container">
        <a href="/">
          <div className="dog-container navbarFrame">
            <div className="dog-face navbarFrame">
              <Image
                src={"/images/dog-img.png"}
                width={80}
                height={80}
                alt="deer"
                className="dogImg navbarFrame"
              />
            </div>
          </div>
        </a>
      </FollowCursorComponent>
      <div className="externalLinks_container">
        <div className="external-links">
          <MediumIcon />
          <TwitterIcon />
          <GitHubIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};

export const NavbarFrameRight = ({ projectPage }) => {
  const [sound, setSound] = useState(false);
  const [menuHover, setMenuHover] = useState("");
  const activeMenu = useHomeStore((state) => state.activeMenu);
  const setActiveMenu = useHomeStore((state) => state.setActiveMenu);
  const clickAudioRef = useRef(null); 

  const goToSection = (section) => {
    playClickSound()
    setActiveMenu(section);
  };

  const playClickSound = () => {
    if (clickAudioRef?.current) {
      clickAudioRef.current.volume = 0.6;
      clickAudioRef.current.play();
    }
  }
  

  return (
    <div className="navbarFrame-wrapper right">
      <audio ref={clickAudioRef} src="/sfx/click.mp3" />
      <div className="soundControl_container">
        <WaveAnimation playClickSound={playClickSound} setSound={setSound} projectPage={projectPage} />
        <p>
          Sound{" "}
          <span className={`toggleCont ${sound ? "on" : "off"} `}>
            <span>ON</span>
            <span>OFF</span>
          </span>
        </p>
      </div>
      {!projectPage && (
        <div className="menu_container">
        <ol className="menu-items">
          <li
            onClick={() => goToSection("about")}
            onMouseOver={() => setMenuHover("about")}
            onMouseOut={() => setMenuHover("")}
            className={`menu-item ${
              activeMenu == "about"
                ? "active"
                : menuHover == "about"
                ? "active"
                : ""
            }`}
          >
            <div className="text_innerContainer">
              <p>About</p>
              <p>About</p>
            </div>
          </li>
          <li
            onClick={() => goToSection("work")}
            onMouseOver={() => setMenuHover("work")}
            onMouseOut={() => setMenuHover("")}
            className={`menu-item ${
              activeMenu == "work"
                ? "active"
                : menuHover == "work"
                ? "active"
                : ""
            }`}
          >
            <div className="text_innerContainer">
              <p>Work</p>
              <p>Work</p>
            </div>
          </li>
          <li
            onClick={() => goToSection("contact")}
            onMouseOver={() => setMenuHover("contact")}
            onMouseOut={() => setMenuHover("")}
            className={`menu-item ${
              activeMenu == "contact"
                ? "active"
                : menuHover == "contact"
                ? "active"
                : ""
            }`}
          >
            <div className="text_innerContainer">
              <p>Contact</p>
              <p>Contact</p>
            </div>
          </li>
        </ol>
      </div>
      )}
    </div>
  );
};
