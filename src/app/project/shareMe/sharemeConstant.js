


export const  myRole = `
  In this project, I was responsible for everything, including conducting user research, designing the UI/UX, developing the frontend using React and Tailwind CSS, and integrating Sanity CMS for real-time content management. 
  <br /><br />
  I implemented features like advanced search, picture categorization, comments, and real-time updates, ensuring a seamless and engaging user experience across all devices. `;

  export const  aboutProject = `
    ShareMe is a user-focused social media platform designed to make sharing and interacting with visual content simple and engaging. 
    <br /><br />
    With a clean, modern interface, users can upload pictures, interact through comments, explore content by categories, and personalize their experience through curated profile pages.
  `
  export const  problemHiglight = `
  To create a platform where users can effortlessly share their moments through pictures while discovering visually appealing content based on their interests. The goal was to prioritize simplicity, responsiveness, and user engagement with smooth navigation and interactions.
            `
   
export const  keyFeatures = [
  {
    label: "User Authentication and Social Login",
    img:  'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fshareme%2Fauth.png?alt=media',
    desc: [
      'Integrated Google OAuth 2.0 for seamless social login.'
    ]
  },
  {
    label: "Picture Categories",
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fshareme%2Fpicture-cat.png?alt=media',
    desc: [
      'Users can explore curated categories such as Travel, Food, Art, Nature, and more.',
      'Dynamic categorization powered by Sanity CMS, allowing admins to create, update, or remove categories without code updates.',
      'Each category shows user-uploaded posts sorted by relevance',
    ]
  },
  {
    label: "Profile Page",
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fshareme%2Fprofile.png?alt=media',
    desc: [
      'Display of user-uploaded images, and saved posts.',
      'Backend Data Handling: User data is stored and fetched in real-time using Sanity CMS.',
    ]
  },
  {
    label: "Similar Pictures Features",
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fshareme%2Fsimilar-pics.png?alt=media',
    desc: [
      'Users are shown visually or thematically similar posts on the picture details page.',
      'Algorithms analyze tags, categories, and upload metadata to provide recommendations.',
    ]
  },
  {
    label: "Post Search",
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fshareme%2Fsearch.png?alt=media',
    desc: [
      'Text-based search with auto-suggestions.',
      'Keyword search matches picture titles, tags, and descriptions.',
      'Debounced Search Input: Reduces API calls for smoother user experience.',
      'Indexed Queries: Optimized search speeds using Sanity’s indexing capabilities.',
    ]
  },
];


export const  wireframeDetails = {
  label: "a. Wireframing and Prototyping",
  wireframes: [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fshareme%2Fwireframe-one.png?alt=media',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fshareme%2Fwireframe-two.png?alt=media',
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fshareme%2Fwireframe-three.png?alt=media',
    }
  ],
};


export const  techStack = [
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

export const  workflowContDets = [
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

export const  demoOne = "https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fshareme%2Fdemo-one.png?alt=media"
export const  demoTwo = "https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2Fshareme%2Fdemo-two.png?alt=media"