import gsap from "gsap";
import "./aboutSection.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextRevealByWord from "../textRevealByWord";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {

  return (
    <div className="aboutSection-wrapper">
      <div className="about-content-wrapper">
        <p className="section-name">About Me</p>
        <TextRevealByWord
          text="I'm a selectively skilled software developer with a strong focus on producing high quality & impactful digital solutions."
          className="overlayText"
        />
      </div>
    </div>
  );
};

export default AboutSection;
