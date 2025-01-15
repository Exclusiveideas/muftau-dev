import TitleSection from "@/projectPageComponents/titleSection";
import "./aatu.css";
import ProjectOverview from "@/projectPageComponents/projectOverview";
import FinalDemo from "@/projectPageComponents/finalDemo";
import {
  NavbarFrameLeft,
  NavbarFrameRight,
} from "@/app/components/navbarFrame";
import { aboutProject, demoImg, myRole } from "./aatuConstant";

const AATU = () => {
  return (
    <div className="aatu-wrapper">
      <NavbarFrameLeft />
      <NavbarFrameRight projectPage={true} />
      <TitleSection title="University Portal for Abiola Ajimobi Technical University" red="Abiola Ajimobi" />
      <ProjectOverview myRole={myRole} title={'AATU - University Portal'} aboutProject={aboutProject} />
      <FinalDemo demoImg={demoImg} live={"http://techu-dsa.vercel.app/"} prevProject={'shareMe'} nextProject={'cryptoHQ'} />
    </div>
  );
};

export default AATU;
