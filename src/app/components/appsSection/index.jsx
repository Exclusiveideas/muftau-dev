import Image from "next/image";
import "./appsSection.css";

const works = [
  {
    name: 'HomeMade - Chef Marketplace',
    image: 'home-made.png',
    roles: [
      'Product Designer',
      'Software Architect',
      'Full-stack',
      'Database',
    ],
    year: '2024'
  },
  {
    name: 'HavenHub - Real Estate Marketplace',
    image: 'haven-hub.png',
    roles: [
      "Project Planner",
      'Full-stack',
      'Database',
    ],
    year: '2024'
  },
  {
    name: 'ShareMe - Social Media',
    image: 'share-me.png',
    roles: [
      'Product Designer',
      'Full-stack',
      'Cloud',
      'Database',
    ],
    year: '2024'
  },
  {
    name: 'AATU - University Portal',
    image: 'aatu.png',
    roles: [
      'Project Manager',
      'Technical Lead',
      'Full-stack engineeer',
      'QA Specialist',
    ],
    year: '2024'
  },
  {
    name: 'Crypto-Guide HQ',
    image: 'crypto-guide.png',
    roles: [
      'Project Manager',
      'Product Designer',
      'Full-stack',
      'API',
    ],
    year: '2024'
  },
]

const AppsSection = () => {
  return (
    <div className="appsSection-wrapper">
      {works?.map((work, i) => (
        <WorkContainer key={i} work={work} end={i+1 != 1 ? ((i + 1) % 2 == 0 ? true: false) : false}/>
      ))}
    </div>
  );
};

export default AppsSection;

const WorkContainer = ({work, end}) => {
  return (
    <div className={`workContainer ${end && 'end'}`}>
      <div className="workImage-wrapper">
        <Image
          src={`/images/works/${work?.image}`}
          width={1440}
          height={1000}
          alt="portfolio image"
          className="workImage"
        />
      </div>
      <div className="workInfo-container">
        <h3 className="workName">{work?.name}</h3>
        <div className="myRole-container">
            {work?.roles?.map((role, i) => (
              <p key={i}>{role}</p>
            ))}
        </div>
        <p className="work-year">{work?.year}</p>
      </div>
    </div>
  );
};
