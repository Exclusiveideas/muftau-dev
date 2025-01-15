import TitleSection from "@/projectPageComponents/titleSection";
import "./aatu.css";
import ProjectOverview from "@/projectPageComponents/projectOverview";
import FinalDemo from "@/projectPageComponents/finalDemo";
import {
  NavbarFrameLeft,
  NavbarFrameRight,
} from "@/app/components/navbarFrame";

const myRole = `
          In this project, I took on a comprehensive role, handling every aspect of its development from start to finish. 
          I designed the user interface and user experience (UI/UX) to ensure a seamless and intuitive platform for students and administrators. 
          <br /><br />I developed the frontend using React.js and the backend with Node.js, integrated the database with MongoDB, and implemented mass communication systems using Twilio and Nodemailer. 
          <br /><br />Additionally, I conducted user research, managed testing and optimization, and ensured the portal's scalability and reliability, delivering a fully functional and impactful solution for AATU.`;

const aboutProject = `
          The University Portal for Abiola Ajimobi Technical University (AATU) was designed as a centralized digital platform to cater to the diverse needs of students and university administrators. 
          <br /><br />The primary goal was to enhance student experience by offering a seamless way to access essential information, stay informed about news and updates, and manage their academic and extracurricular details effectively. 
          <br /><br />This portal also featured a robust backend mechanism for real-time communication through SMS and email notifications.
          `;

const AATU = () => {
  return (
    <div className="aatu-wrapper">
      <NavbarFrameLeft />
      <NavbarFrameRight projectPage={true} />
      <TitleSection title="University Portal for Abiola Ajimobi Technical University" red="Abiola Ajimobi" />
      <ProjectOverview myRole={myRole} title={'AATU - University Portal'} aboutProject={aboutProject} />
      <FinalDemo demoImg={'/images/project/demo-last.png'} live={"http://techu-dsa.vercel.app/"} prevProject={'shareMe'} nextProject={'cryptoHQ'} />
    </div>
  );
};

export default AATU;
