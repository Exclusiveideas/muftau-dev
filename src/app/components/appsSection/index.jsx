import Image from "next/image";
import "./appsSection.css";
import JellyBlob from "../cursorCircle";
import { useEffect, useRef } from "react";
import useHomeStore from "@/store/homeStore";
import { useRouter } from "next/navigation";

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
  const applicationsRef = useRef(null);
  const setAppSectRef = useHomeStore((state) => state.setAppSectRef);
  
  useEffect(() => {
    if (applicationsRef.current) {
      setAppSectRef(applicationsRef.current);
    }
  }, [applicationsRef, setAppSectRef]);

  return (
    <div ref={applicationsRef} className="appsSection-wrapper">
      {works?.map((work, i) => (
        <WorkContainer key={i} work={work} end={i+1 != 1 ? ((i + 1) % 2 == 0 ? true: false) : false}/>
      ))}
      <JellyBlob />
    </div>
  );
};

export default AppsSection;

const WorkContainer = ({work, end}) => {
  const workContainerRef = useRef(null);
  const addToWorkContRefs = useHomeStore((state) => state.addToWorkContRefs);

  const router = useRouter()
  
  const dropAudioRef = useRef(null); 
  
  useEffect(() => {
    if (workContainerRef.current) {
      addToWorkContRefs(workContainerRef.current);
    }
    if (dropAudioRef?.current) {
      dropAudioRef.current.volume = 0.8;
    }
  }, [workContainerRef, addToWorkContRefs]);
  
  const playDropSound = () => {
    if (dropAudioRef?.current) {
      dropAudioRef.current.play();
    }
  };

  const goToApp = () => {
    router.push('/project')
  }


  return (
    <div ref={workContainerRef} onClick={goToApp} onMouseEnter={playDropSound} className={`workContainer ${end && 'end'}`}>
      <audio
      ref={dropAudioRef}
      src="/sfx/drop.mp3"
    />
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
