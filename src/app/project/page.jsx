
import TitleSection from '@/projectPageComponents/titleSection';
import './project.css';
import ProjectOverview from '@/projectPageComponents/projectOverview';
import Problem from '@/projectPageComponents/problem';
import Solution from '@/projectPageComponents/solution';
import Demo from '@/projectPageComponents/demo';
import Outcome from '@/projectPageComponents/outcome';
import Reflection from '@/projectPageComponents/reflection';
import DesignProcess, { DesignProcessCont } from '@/projectPageComponents/designProcess';
import DevApproach from '@/projectPageComponents/devApproach';

const Project = () => {
  return (
    <div className='projectPage-wrapper'>
        <TitleSection />
        <ProjectOverview />
        <Problem />
        <Solution />
        <DesignProcess />
        <Demo />
        <DesignProcessCont />
        <DevApproach />
        <Outcome />
        <Reflection />
    </div>
  )
}

export default Project