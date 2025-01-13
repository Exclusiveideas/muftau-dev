
import TitleSection from '@/projectPageComponents/titleSection';
import './shareme.css';
import ProjectOverview from '@/projectPageComponents/projectOverview';
import Problem from '@/projectPageComponents/problem';
import Solution from '@/projectPageComponents/solution';
import Demo from '@/projectPageComponents/demo';
import FinalDemo from '@/projectPageComponents/finalDemo';
import DesignProcess, { DesignProcessCont } from '@/projectPageComponents/designProcess';
import DevApproach from '@/projectPageComponents/devApproach';
import { NavbarFrameLeft, NavbarFrameRight } from '@/app/components/navbarFrame';

const ShareMe = () => {
  return (
    <div className='shareme-wrapper'>
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

export default ShareMe