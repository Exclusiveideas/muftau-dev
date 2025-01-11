import "./aboutSection.css";
import TextRevealByWord from "../textRevealByWord";

const AboutSection = () => {

  return (
    <div className="aboutSection-wrapper">
      <div className="about-content-wrapper">
        <p className="section-name">About Me</p>
        <TextRevealByWord
          text="I'm a selectively skilled software developer with a strong focus on producing high quality & impactful digital solutions."
          className="overlayText"
          section='about'
        />
      </div>
    </div>
  );
};

export default AboutSection;
