import TitleSection from "@/projectPageComponents/titleSection";
import "./homeMade.css";
import ProjectOverview from "@/projectPageComponents/projectOverview";
import Problem from "@/projectPageComponents/problem";
import Solution from "@/projectPageComponents/solution";
import Demo from "@/projectPageComponents/demo";
import FinalDemo from "@/projectPageComponents/finalDemo";
import DesignProcess, {
  DesignProcessCont,
} from "@/projectPageComponents/designProcess";
import DevApproach from "@/projectPageComponents/devApproach";
import {
  NavbarFrameLeft,
  NavbarFrameRight,
} from "@/app/components/navbarFrame";
import { aboutProject, demoImg, demoTwo, keyDevSteps, keyFeatures, myRole, optimizationDets, personaDetails, problemHiglight, problemImgs, problemsList, techStack, wireframeDetails } from "./homeMadeConstant";


const HomeMade = () => {

  return (
    <div className="homeMade-wrapper">
      <NavbarFrameLeft />
      <NavbarFrameRight projectPage={true} />
      <TitleSection title="HomeMade - Chef MarketPlace" red="Chef" />
      <ProjectOverview myRole={myRole} title={'HomeMade'} aboutProject={aboutProject} />
      <Problem problemHiglight={problemHiglight} problemsList={problemsList} problemImgs={problemImgs} />
      <Solution keyFeatures={keyFeatures} />
      <DesignProcess personaDetails={personaDetails} wireframeDetails={wireframeDetails} />
      <Demo demoImg={demoImg} />
      <DesignProcessCont />
      <DevApproach number={4} techStack={techStack} keyDevSteps={keyDevSteps} optimizationDets={optimizationDets} />
      <FinalDemo demoImg={demoTwo} live={"https://home-made-one.vercel.app/"} nextProject={'havenhub'} />
    </div>
  );
};

export default HomeMade;
