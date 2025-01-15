
import TitleSection from '@/projectPageComponents/titleSection';
import './cryptoHQ.css';
import ProjectOverview from '@/projectPageComponents/projectOverview';
import FinalDemo from '@/projectPageComponents/finalDemo';
import { NavbarFrameLeft, NavbarFrameRight } from '@/app/components/navbarFrame';
import { aboutProject, demoImg, myRole } from './cryptoConstant';


const CryptoHQ = () => {
  return (
    <div className='cryptoHQ-wrapper'>
    <NavbarFrameLeft />
    <NavbarFrameRight projectPage={true} />
    <TitleSection title="CryptoGuide HQ" red="Guide" />
    <ProjectOverview myRole={myRole} title={'CryptoGuide HQ'} aboutProject={aboutProject} />
    <FinalDemo demoImg={demoImg} live={"https://cryptoguidehq.web.app/"} prevProject={'aatu'} nextProject={'homeMade'} />
  </div>
  )
}

export default CryptoHQ