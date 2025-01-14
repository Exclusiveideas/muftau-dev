import TitleSection from "@/projectPageComponents/titleSection";
import "./homeMade.css";
import ProjectOverview from "@/projectPageComponents/projectOverview";
import Problem from "@/projectPageComponents/problem";
import Solution from "@/projectPageComponents/solution";
import Demo from "@/projectPageComponents/demo";
import FinalDemo from "@/projectPageComponents/finalDemo";
import DesignProcess, {
  DesignProcessCont,
} from "@/projectPageComponents/designProcess";
import DevApproach from "@/projectPageComponents/devApproach";
import {
  NavbarFrameLeft,
  NavbarFrameRight,
} from "@/app/components/navbarFrame";

const myRole = `
  I was responsible for designing, developing, and deploying the entire
          Chef Hiring Marketplace. <br/> <br />This included creating the user interface,
          building the back-end, implementing features like real-time chat,
          search, filtering, and geolocation, and ensuring a smooth and
          efficient user experience from start to finish.
  `;

  const aboutProject = `
          HomeMade Marketplace is a web-based hiring platform
          designed to improve how individuals and businesses discover and
          engage professional chefs for various culinary needs. <br/> <br /> It bridges the
          gap between culinary experts and potential clients through a seamless
          digital experience, enhancing accessibility, convenience, and quality
          in the culinary services industry.`

  const problemHiglight = `
  The culinary industry has a growing demand for personalized,
            professional cooking services. However, finding and hiring skilled
            chefs remains an inefficient, fragmented, and often frustrating
            process.
            `
  const problemsList = [
    {
      header: 'a. User Challenges: ',
      desc: `Difficulty in
              finding chefs with specific skill sets or dishes they specialize
              in. Lack of location-based recommendations for chefs or dishes.
              Inability to assess chefs’ qualifications and work history before
              hiring.`
    },
    {
      header: 'b. Business Challenges: ',
      desc: `Need for
              a scalable and responsive platform for real-time interactions.
              Integration of robust filtering and proximity-based search
              functionality.`
    },
  ]

  const problemImgs = ['/images/project/problem.png', '/images/project/problem.png', '/images/project/problem.png'];

  
const keyFeatures = [
  {
    label: "Onboarding Process",
    img: '/images/project/problem.png'
  },
  {
    label: "Profiles and Details",
    img: '/images/project/problem.png'
  },
  {
    label: "Search and Discovery",
    img: '/images/project/problem.png'
  },
  {
    label: "Real-Time Chat",
    img: '/images/project/problem.png'
  },
];

const personaDetails = {
  label: 'a. User Persona',
  personas: [
    {
      header: 'Client Persona',
      img: '/images/project/sarah.jpeg',
      desc: `Sarah, a working mother looking for chefs nearby who can prepare
              healthy meals for her family.`
    },
    {
      header: 'Chef Persona',
      img: '/images/project/sarah.jpeg',
      desc: `Chef Alex, a freelance chef looking to expand his client base and
              showcase his culinary expertise.`
    },
  ]
}

const wireframeDetails = {
  label: "b. Wireframing and Prototyping",
  wireframes: [
    {
      img: "low-fidelity.png",
    },
    {
      img: "low-fidelity-2.png",
    },
    {
      img: "wireframe.png",
    },
    {
      img: "high-fidelity.jpg",
    },
  ],
};

const techStack = [
  {
    label: 'Frontend',
    desc: 'Next.js for the web platform ensuring a responsive and intuitive user interface.',
  },
  {
    label: 'Backend',
    desc: 'Node.js with Express.js for a scalable and efficient server-side architecture.',
  },
  {
    label: 'Database',
    desc: 'MongoDB for its flexibility in managing dynamic chef profiles, dishes, and user data.',
  },
  {
    label: 'Real-Time Chat',
    desc: 'Socket.IO was implemented to enable WebSocket-based instant messaging between users and chefs.',
  },
]

const keyDevSteps = [
  {
    label: 'a. Onboarding Flow',
    desc: [
      'Designed dynamic onboarding forms using React Hook Form for validation and reactivity.',
      'Integrated geolocation features via browser APIs and GPS',
    ]
  },
  {
    label: 'b. Search and Filter Functionality',
    desc: [
      'Developed robust backend queries in MongoDB, enabling users to filter chefs by location, name, or cuisine type efficiently.',
      'Optimized location-based searches by indexing geospatial data, ensuring quick and accurate proximity calculations.',
    ]
  },
  {
    label: 'c. Chef Profiles',
    desc: [
      'Designed a schema to store detailed chef profiles, including certifications, employment history, and dish portfolios.',
      'Integrated Firebase for managing image uploads, ensuring high-quality visuals of dishes and chefs’ work.',
    ]
  },
  {
    label: 'd. Real-Time Chat',
    desc: [
      'Implemented real-time messaging with Socket.IO, allowing users and chefs to communicate seamlessly.',
    ]
  },
]

const optimizationDets = {
  highlight: 'To ensure a fast and responsive platform:',
  approaches: [
    'Lazy Loading: Images and assets were lazy-loaded to reduce initial page load times.',
    'Debounced Search Inputs: Reduced the load on backend servers by debouncing search inputs, minimizing unnecessary API calls during user input.',
    'API Optimization: Streamlined API calls for distance calculations by leveraging optimized queries and caching mechanisms where applicable.',
  ]
}

const HomeMade = () => {

  return (
    <div className="homeMade-wrapper">
      <NavbarFrameLeft />
      <NavbarFrameRight projectPage={true} />
      <TitleSection title="HomeMade - Chef MarketPlace" red="Chef" />
      <ProjectOverview myRole={myRole} title={'HomeMade'} aboutProject={aboutProject} />
      <Problem problemHiglight={problemHiglight} problemsList={problemsList} problemImgs={problemImgs} />
      <Solution keyFeatures={keyFeatures} />
      <DesignProcess personaDetails={personaDetails} wireframeDetails={wireframeDetails} />
      <Demo demoImg={'/images/project/demo-placeholder.png'} />
      <DesignProcessCont />
      <DevApproach number={4} techStack={techStack} keyDevSteps={keyDevSteps} optimizationDets={optimizationDets} />
      <FinalDemo demoImg={'/images/project/demo-last.png'} live={"https://home-made-one.vercel.app/"} nextProject={'havenhub'} />
    </div>
  );
};

export default HomeMade;
