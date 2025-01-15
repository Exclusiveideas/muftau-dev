
import TitleSection from '@/projectPageComponents/titleSection';
import './cryptoHQ.css';
import ProjectOverview from '@/projectPageComponents/projectOverview';
import FinalDemo from '@/projectPageComponents/finalDemo';
import { NavbarFrameLeft, NavbarFrameRight } from '@/app/components/navbarFrame';


const myRole = `
          In this project, I took on the role of a full-stack developer and product designer, overseeing every aspect of CryptoGuide HQ's development. 
          From conceptualizing the idea to implementing the design and coding the functionality, I managed the entire lifecycle of the application. 
          <br /><br />This included integrating APIs for real-time cryptocurrency data, designing a user-friendly interface, implementing dynamic graph visualizations, and optimizing performance for seamless user experiences. 
          <br /><br />My comprehensive involvement ensured that CryptoGuide HQ was built as a robust, intuitive, and highly functional platform for cryptocurrency traders.
          `;

const aboutProject = `
          CryptoGuide HQ is a web application designed to provide essential information to cryptocurrency traders, whether they are seasoned professionals or newcomers. 
          The platform offers real-time data for the top 100 cryptocurrencies, helping users make informed decisions. 
          <br /><br />Key features include real-time market cap, trading volume, dynamic price graphs, cryptocurrency news, and insights into inter-crypto relationships. 
          By leveraging RapidAPI, CryptoGuide HQ ensures up-to-date and reliable information for its users, presented in an intuitive and visually engaging interface.
          `;

const CryptoHQ = () => {
  return (
    <div className='cryptoHQ-wrapper'>
    <NavbarFrameLeft />
    <NavbarFrameRight projectPage={true} />
    <TitleSection title="CryptoGuide HQ" red="Guide" />
    <ProjectOverview myRole={myRole} title={'CryptoGuide HQ'} aboutProject={aboutProject} />
    <FinalDemo demoImg={'/images/project/demo-last.png'} live={"https://cryptoguidehq.web.app/"} prevProject={'aatu'} nextProject={'homeMade'} />
  </div>
  )
}

export default CryptoHQ