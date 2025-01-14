
import TitleSection from '@/projectPageComponents/titleSection';
import './havenhub.css';
import ProjectOverview from '@/projectPageComponents/projectOverview';
import Problem from '@/projectPageComponents/problem';
import Solution from '@/projectPageComponents/solution';
import Demo from '@/projectPageComponents/demo';
import FinalDemo from '@/projectPageComponents/finalDemo';
import DesignProcess from '@/projectPageComponents/designProcess';
import DevApproach from '@/projectPageComponents/devApproach';
import { NavbarFrameLeft, NavbarFrameRight } from '@/app/components/navbarFrame';


const myRole = `
  In this project, I handled everything, from conducting user research and designing the UI/UX to developing the frontend and integrating a third-party API for fetching real-time data.<br /> <br /> I implemented advanced filtering options directly in the frontend, ensuring users could easily refine their searches based on location, price range, and property details, delivering a seamless and efficient user experience.
  `;

  const aboutProject = `
          HavenHub was designed to provide a seamless experience for users seeking to buy, rent, or sell properties. 
          The platform offers real-time data on houses, apartments, and commercial properties for rent and sale. 
          <br /> <br />
          The system integrates advanced search and filtering options such as square footage, rental frequency, price ranges, purpose (rent/sale), and location, ensuring that users can find properties tailored to their exact needs.
  `
  const problemHiglight = `
  The challenges in the Real Estate Market.
            `
  const problemsList = [
    {
      header: 'a. Lack of Real-Time Information: ',
      desc: `Users often encounter outdated property listings, leading to frustration and wasted time.`
    },
    {
      header: 'b. Complex Search Processes: ',
      desc: `Finding the right property based on multiple criteria like budget, location, and purpose can be cumbersome.`
    },
    {
      header: 'c. Overwhelming Data Presentation: ',
      desc: `Many platforms bombard users with excessive information, complicating their decision-making process.`
    },
  ]

  const problemImgs = ['/images/project/problem.png', '/images/project/problem.png', '/images/project/problem.png'];
        
   
const keyFeatures = [
  {
    label: "Advanced Filters",
    img: '/images/project/problem.png'
  },
  {
    label: "Real-Time Data Integration",
    img: '/images/project/problem.png'
  },
  {
    label: "Property Listing Page",
    img: '/images/project/problem.png'
  },
  {
    label: "Property Details Page",
    img: '/images/project/problem.png'
  },
];


const wireframeDetails = {
  label: "a. Wireframing and Prototyping",
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
  desc: 'Next.js was utilized to build a highly responsive and intuitive web interface, ensuring seamless navigation and an optimal user experience across devices.',
},
{
  label: 'Backend',
  desc: 'Node.js with Express.js was chosen to create a robust, scalable, and efficient server-side architecture for handling API requests and real-time features.',
},
{
  label: 'UI Framework',
  desc: 'Ant Design provided a modern and customizable component library, accelerating the development of a clean and professional user interface.',
},

]

const keyDevSteps = [
  {
    label: 'a. Dynamic Filtering',
    desc: [
      'Integrated API endpoints for multi-criteria filtering (price, location, size, etc.).',
      'Implemented range sliders for budget and square footage using the fetched data.',
      'Filters dynamically update results in real-time without requiring page reloads.',
    ]
  },
  {
    label: 'b. Real-Time Features',
    desc: [
      'Leveraged API integrations to fetch the latest property updates in real-time.',
      'Optimized location-based searches by indexing geospatial data, ensuring quick and accurate proximity calculations.',
    ]
  },
  {
    label: 'c. Property Details Management',
    desc: [
      'Retrieved property details from APIs, including high-resolution images, descriptions, and pricing.',
      'Optimized image loading using lazy loading techniques to enhance performance.',
    ]
  },
]

const optimizationDets = {
  highlight: 'To ensure a fast and responsive platform:',
  approaches: [
    'Lazy Loading: Images and assets were lazy-loaded with added blur to reduce initial page load times.',
    'Debounced filter inputs to minimize unnecessary API calls and ensure a smoother user experience.',
    'API Optimization: Streamlined API calls by leveraging optimized queries and caching mechanisms where applicable.',
  ]
}

const HavenHub = () => {
 
  return (
    <div className='havenhub-wrapper'>
        <NavbarFrameLeft />
        <NavbarFrameRight projectPage={true} />
        <TitleSection title="HavenHub - Real Estate Marketplace" red="Real Estate"/>
        <ProjectOverview myRole={myRole} title={'HavenHub'} aboutProject={aboutProject}/>
        <Problem problemHiglight={problemHiglight} problemsList={problemsList} problemImgs={problemImgs} />
        <Solution keyFeatures={keyFeatures} />
        <DesignProcess wireframeDetails={wireframeDetails} />
        <Demo demoImg={'/images/project/demo-placeholder.png'} />
        <DevApproach number={3} techStack={techStack} keyDevSteps={keyDevSteps} optimizationDets={optimizationDets} />
        <FinalDemo demoImg={'/images/project/demo-last.png'} prevProject={'homeMade'} nextProject={'shareMe'} />
    </div>
  )
}

export default HavenHub