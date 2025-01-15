
import TitleSection from '@/projectPageComponents/titleSection';
import './shareme.css';
import ProjectOverview from '@/projectPageComponents/projectOverview';
import Problem from '@/projectPageComponents/problem';
import Solution from '@/projectPageComponents/solution';
import Demo from '@/projectPageComponents/demo';
import FinalDemo from '@/projectPageComponents/finalDemo';
import DesignProcess from '@/projectPageComponents/designProcess';
import DevApproach from '@/projectPageComponents/devApproach';
import { NavbarFrameLeft, NavbarFrameRight } from '@/app/components/navbarFrame';
import WorkFlowCont from '@/projectPageComponents/workFlowCont';
import Reflection from '@/projectPageComponents/reflection';
import { aboutProject, demoOne, demoTwo, keyFeatures, myRole, problemHiglight, techStack, wireframeDetails, workflowContDets } from './sharemeConstant';


const ShareMe = () => {
  return (
    <div className='shareme-wrapper'>
    <NavbarFrameLeft />
    <NavbarFrameRight projectPage={true} />
    <TitleSection title="ShareMe - Social Media App" red="Social"/>
    <ProjectOverview myRole={myRole} title={'ShareMe'} aboutProject={aboutProject}/>
    <Problem title='The Objective' noListing={true} problemHiglight={problemHiglight} />
    <Solution title='Features and Functionality' keyFeatures={keyFeatures} />
    <DevApproach number={3} techStack={techStack} onlyStack={true}/>
    <DesignProcess title="4. Workflow" wireframeDetails={wireframeDetails} />
    <WorkFlowCont workflowContDets={workflowContDets} />
    <Demo demoImg={demoOne} />
    <Reflection />
    <FinalDemo demoImg={demoTwo} live={'https://silly-goldwasser-fdb2eb.netlify.app/'} prevProject={'havenhub'} nextProject={'aatu'} />
</div>
  )
}

export default ShareMe