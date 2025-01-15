

export const  myRole = `
  In this project, I handled everything, from conducting user research and designing the UI/UX to developing the frontend and integrating a third-party API for fetching real-time data.<br /> <br /> I implemented advanced filtering options directly in the frontend, ensuring users could easily refine their searches based on location, price range, and property details, delivering a seamless and efficient user experience.
  `;

  export const  aboutProject = `
          HavenHub was designed to provide a seamless experience for users seeking to buy, rent, or sell properties. 
          The platform offers real-time data on houses, apartments, and commercial properties for rent and sale. 
          <br /> <br />
          The system integrates advanced search and filtering options such as square footage, rental frequency, price ranges, purpose (rent/sale), and location, ensuring that users can find properties tailored to their exact needs.
  `
  export const  problemHiglight = `
  The challenges in the Real Estate Market.
            `
  export const  problemsList = [
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

export const  problemImgs = [
  'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Fhomepage-one.png?alt=media', 
  'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Fadvanced-filter.png?alt=media', 
  'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Fhomepage-two.png?alt=media'];
        
   
export const  keyFeatures = [
  {
    label: "Advanced Filters",
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Fadvanced-filter.png?alt=media'
  },
  {
    label: "Real-Time Data Integration",
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Freal-time.png?alt=media'
  },
  {
    label: "Property Listing Page",
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Fproperty-listing.png?alt=media'
  },
  {
    label: "Property Details Page",
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Fproperty-details.png?alt=media'
  },
];


export const  wireframeDetails = {
  label: "a. Wireframing and Prototyping",
  wireframes: [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Fwireframe-one.png?alt=media",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Fwireframe-two.jpg?alt=media",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Fwireframe-three.png?alt=media",
    },
  ],
};


export const  techStack = [
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

export const  keyDevSteps = [
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

export const  optimizationDets = {
  highlight: 'To ensure a fast and responsive platform:',
  approaches: [
    'Lazy Loading: Images and assets were lazy-loaded with added blur to reduce initial page load times.',
    'Debounced filter inputs to minimize unnecessary API calls and ensure a smoother user experience.',
    'API Optimization: Streamlined API calls by leveraging optimized queries and caching mechanisms where applicable.',
  ]
}

export const  demoOne = "https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Fdemo-one.png?alt=media";
export const  demoTwo = "https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fhavenhub%2Fdemo-two.png?alt=media"