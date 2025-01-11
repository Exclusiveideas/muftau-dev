import Image from "next/image";
import TextRevealByWord from "../textRevealByWord";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience-wrapper">
      <div className="experience-bgImage">
        <Image
          src={"/images/experience-img.png"}
          width={770}
          height={850}
          alt="apple watch"
          className="experienceBG"
        />
      </div>
      <div className="experience-content-wrapper">
        <p className="experience-section-name">Experience</p>
        <TextRevealByWord
          text="Over a decade of expertise in building scalable software solutions and collaborating with some of the brightest minds in tech."
          className="experience-overlayText"
          section="experience"
        />
      </div>
      <div className="applications">
        <p>Selected Applications</p>
      </div>
    </div>
  );
};

export default Experience;
