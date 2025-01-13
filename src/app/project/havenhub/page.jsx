
import TitleSection from '@/projectPageComponents/titleSection';
import './havenhub.css';
import ProjectOverview from '@/projectPageComponents/projectOverview';
import Problem from '@/projectPageComponents/problem';
import Solution from '@/projectPageComponents/solution';
import Demo from '@/projectPageComponents/demo';
import FinalDemo from '@/projectPageComponents/finalDemo';
import DesignProcess, { DesignProcessCont } from '@/projectPageComponents/designProcess';
import DevApproach from '@/projectPageComponents/devApproach';
import { NavbarFrameLeft, NavbarFrameRight } from '@/app/components/navbarFrame';

const HavenHub = () => {
  return (
    <div className='havenhub-wrapper'>
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

export default HavenHub