
import TitleSection from '@/projectPageComponents/titleSection';
import './havenhub.css';
import ProjectOverview from '@/projectPageComponents/projectOverview';
import Problem from '@/projectPageComponents/problem';
import Solution from '@/projectPageComponents/solution';
import Demo from '@/projectPageComponents/demo';
import FinalDemo from '@/projectPageComponents/finalDemo';
import DesignProcess from '@/projectPageComponents/designProcess';
import DevApproach from '@/projectPageComponents/devApproach';
import { NavbarFrameLeft, NavbarFrameRight } from '@/app/components/navbarFrame';
import { aboutProject, demoOne, demoTwo, keyDevSteps, keyFeatures, myRole, optimizationDets, problemHiglight, problemImgs, problemsList, techStack, wireframeDetails } from './havenhubConstants';


const HavenHub = () => {
 
  return (
    <div className='havenhub-wrapper'>
        <NavbarFrameLeft />
        <NavbarFrameRight projectPage={true} />
        <TitleSection title="HavenHub - Real Estate Marketplace" red="Real Estate"/>
        <ProjectOverview myRole={myRole} title={'HavenHub'} aboutProject={aboutProject}/>
        <Problem problemHiglight={problemHiglight} problemsList={problemsList} problemImgs={problemImgs} />
        <Solution keyFeatures={keyFeatures} />
        <DesignProcess wireframeDetails={wireframeDetails} />
        <Demo demoImg={demoOne} />
        <DevApproach number={3} techStack={techStack} keyDevSteps={keyDevSteps} optimizationDets={optimizationDets} />
        <FinalDemo demoImg={demoTwo} live={'https://realtor-opal.vercel.app/'} prevProject={'homeMade'} nextProject={'shareMe'} />
    </div>
  )
}

export default HavenHub