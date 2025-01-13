
import TitleSection from '@/projectPageComponents/titleSection';
import './project.css';
import ProjectOverview from '@/projectPageComponents/projectOverview';
import Problem from '@/projectPageComponents/problem';
import Solution from '@/projectPageComponents/solution';
import Demo from '@/projectPageComponents/demo';
import FinalDemo from '@/projectPageComponents/finalDemo';
import DesignProcess, { DesignProcessCont } from '@/projectPageComponents/designProcess';
import DevApproach from '@/projectPageComponents/devApproach';
import { NavbarFrameLeft, NavbarFrameRight } from '../components/navbarFrame';

const Project = () => {
  return (
    <div className='projectPage-wrapper'>
        <NavbarFrameLeft />
        <NavbarFrameRight projectPage={true} />
        <TitleSection />
        <ProjectOverview />
        <Problem />
        <Solution />
        <DesignProcess />
        <Demo />
        <DesignProcessCont />
        <DevApproach />
        <FinalDemo />
    </div>
  )
}

export default Project