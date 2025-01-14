
import TitleSection from '@/projectPageComponents/titleSection';
import './shareme.css';
import ProjectOverview from '@/projectPageComponents/projectOverview';
import Problem from '@/projectPageComponents/problem';
import Solution from '@/projectPageComponents/solution';
import Demo from '@/projectPageComponents/demo';
import FinalDemo from '@/projectPageComponents/finalDemo';
import DesignProcess from '@/projectPageComponents/designProcess';
import DevApproach from '@/projectPageComponents/devApproach';
import { NavbarFrameLeft, NavbarFrameRight } from '@/app/components/navbarFrame';
import WorkFlowCont from '@/projectPageComponents/workFlowCont';
import Reflection from '@/projectPageComponents/reflection';



const myRole = `
  In this project, I was responsible for everything, including conducting user research, designing the UI/UX, developing the frontend using React and Tailwind CSS, and integrating Sanity CMS for real-time content management. 
  <br /><br />
  I implemented features like advanced search, picture categorization, comments, and real-time updates, ensuring a seamless and engaging user experience across all devices. `;

  const aboutProject = `
    ShareMe is a user-focused social media platform designed to make sharing and interacting with visual content simple and engaging. 
    <br /><br />
    With a clean, modern interface, users can upload pictures, interact through comments, explore content by categories, and personalize their experience through curated profile pages.
  `
  const problemHiglight = `
  To create a platform where users can effortlessly share their moments through pictures while discovering visually appealing content based on their interests. The goal was to prioritize simplicity, responsiveness, and user engagement with smooth navigation and interactions.
            `
   
const keyFeatures = [
  {
    label: "User Authentication and Social Login",
    img: '/images/project/problem.png',
    desc: [
      'Integrated Google OAuth 2.0 for seamless social login.'
    ]
  },
  {
    label: "Picture Categories",
    img: '/images/project/problem.png',
    desc: [
      'Users can explore curated categories such as Travel, Food, Art, Nature, and more.',
      'Dynamic categorization powered by Sanity CMS, allowing admins to create, update, or remove categories without code updates.',
      'Each category shows user-uploaded posts sorted by relevance',
    ]
  },
  {
    label: "Profile Page",
    img: '/images/project/problem.png',
    desc: [
      'Display of user-uploaded images, and saved posts.',
      'Backend Data Handling: User data is stored and fetched in real-time using Sanity CMS.',
    ]
  },
  {
    label: "Similar Pictures Features",
    img: '/images/project/problem.png',
    desc: [
      'Users are shown visually or thematically similar posts on the picture details page.',
      'Algorithms analyze tags, categories, and upload metadata to provide recommendations.',
    ]
  },
  {
    label: "Post Search",
    img: '/images/project/problem.png',
    desc: [
      'Text-based search with auto-suggestions.',
      'Keyword search matches picture titles, tags, and descriptions.',
      'Debounced Search Input: Reduces API calls for smoother user experience.',
      'Indexed Queries: Optimized search speeds using Sanity’s indexing capabilities.',
    ]
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
  desc: 'React for building a modular, scalable, and responsive user interface & Tailwind and for a sleek and consistent design system',
},
{
  label: 'CMS',
  desc: 'Sanity.io -  A headless CMS used for managing user content such as images, categories, and comments.',
},
{
  label: 'Backend Integration',
  desc: 'Sanity’s Real-Time API - Powers live updates for posts, comments, and recommendations. OAuth 2.0 - Ensures secure user authentication.',
},

]

const workflowContDets = [
  {
    subsect_label: 'b. Frontend Development',
    subsect_info: [
      {
        header: 'Modular React components',
        desc: [
          'Picture Card: Displays individual pictures with hover effects.',
          'Comment Section: Threaded comment system for detailed discussions.',
          'Search Bar: Reusable search component.',
        ]
      },
      {
        header: 'Tailwind CSS',
        desc: ['Used for creating responsive grid layouts for the feed.']
      },
    ]
  },
  {
    subsect_label: 'c. CMS Integration',
    subsect_info: [
      {
        header: 'Configured Sanity Schemas for: ',
        desc: [
          'User profiles.',
          'Posts with title, description, tags, image, and category.',
          'Comments linked to posts.',
        ]
      },
      {
        header: 'Implemented',
        desc: ['live data fetching with Sanity’s GROQ queries.']
      },
    ]
  },
  {
    subsect_label: 'd. Testing and Deployment',
    subsect_info: [
      {
        header: 'Testing',
        desc: [
          'Conducted usability tests with a focus group to refine UI/UX.',
          'Browser compatibility checks for Chrome, Safari, Edge, and Firefox.',
        ]
      },
      {
        header: 'Deployment',
        desc: [
          'Frontend hosted on Vercel.',
          'Backend and CMS served via Sanity Studio.',
        ]
      },
    ]
  },
]



const ShareMe = () => {
  return (
    <div className='shareme-wrapper'>
    <NavbarFrameLeft />
    <NavbarFrameRight projectPage={true} />
    <TitleSection title="ShareMe - Social Media App" red="Social"/>
    <ProjectOverview myRole={myRole} title={'ShareMe'} aboutProject={aboutProject}/>
    <Problem title='The Objective' noListing={true} problemHiglight={problemHiglight} />
    <Solution title='Features and Functionality' keyFeatures={keyFeatures} />
    <DevApproach number={3} techStack={techStack} onlyStack={true}/>
    <DesignProcess title="4. Workflow" wireframeDetails={wireframeDetails} />
    <WorkFlowCont workflowContDets={workflowContDets} />
    <Demo demoImg={'/images/project/demo-placeholder.png'} />
    <Reflection />
    <FinalDemo demoImg={'/images/project/demo-last.png'} live={'https://realtor-opal.vercel.app/'} prevProject={'homeMade'} nextProject={'shareMe'} />
</div>
  )
}

export default ShareMe