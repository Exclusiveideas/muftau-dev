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

export const NavbarFrameLeft = () => {
  return ( 
    <div className="navbarFrame-wrapper left">
      <div className="logo_container">
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
  return (
    <div className="navbarFrame-wrapper right">
      <div className="soundControl_container">
        <WaveAnimation />
      </div>
      <div className="menu_container">
        <ol className="menu-items">
          <li className="menu-item">
            <div className="text_innerContainer">
              <p>About</p>
              <p>About</p>
            </div>
          </li>
          <li className="menu-item">
            <div className="text_innerContainer">
              <p>Work</p>
              <p>Work</p>
            </div>
          </li>
          <li className="menu-item">
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
