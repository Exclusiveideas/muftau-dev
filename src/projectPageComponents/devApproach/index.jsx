import "./devApproach.css";

const DevApproach = () => {
  return (
    <div className="devApproach-wrapper">
      <div className="da-section-label">
        4. Development Approach
        <hr className="da-underline" />
      </div>
      <div className="da-subsections-wrapper">
        <div className="da-sub-section-label">
          1. Technology Stack
          <hr className="da-underline" />
        </div>
        <div className="sub-sect-contentContainer">
          <div className="technology-container">
            <p className="stack-type">Frontend</p>
            <p className="stack-desc">
              Next.js for the web platform ensuring a responsive and intuitive
              user interface.
            </p>
          </div>
          <div className="technology-container">
            <p className="stack-type">Backend</p>
            <p className="stack-desc">
              Node.js with Express.js for a scalable and efficient server-side
              architecture.
            </p>
          </div>
          <div className="technology-container">
            <p className="stack-type">Database</p>
            <p className="stack-desc">
              MongoDB for its flexibility in managing dynamic chef profiles,
              dishes, and user data.
            </p>
          </div>
          <div className="technology-container">
            <p className="stack-type">Real-Time Chat</p>
            <p className="stack-desc">
              Socket.IO was implemented to enable WebSocket-based instant
              messaging between users and chefs.
            </p>
          </div>
        </div>
      </div>
      <div className="da-subsections-wrapper">
        <div className="da-sub-section-label">
          2. Key Development Steps
          <hr className="da-underline" />
        </div>
        <div className="sub-sect-contentContainer">
          <div className="technology-container">
            <p className="stack-type">a. Onboarding Flow</p>
            <div className="devSteps-desc">
              <ol>
                <li>
                  Designed dynamic onboarding forms using React Hook Form for
                  validation and reactivity.
                </li>
                <li>
                  Integrated geolocation features via browser APIs and GPS
                  sensors to personalize user experiences and recommend nearby
                  chefs.
                </li>
              </ol>
            </div>
          </div>
          <div className="technology-container">
            <p className="stack-type">b. Search and Filter Functionality</p>
            <div className="devSteps-desc">
              <ol>
                <li>
                  Developed robust backend queries in MongoDB, enabling users to
                  filter chefs by location, name, or cuisine type efficiently.
                </li>
                <li>
                  Optimized location-based searches by indexing geospatial data,
                  ensuring quick and accurate proximity calculations.
                </li>
              </ol>
            </div>
          </div>
          <div className="technology-container">
            <p className="stack-type">d. Chef Profiles</p>
            <div className="devSteps-desc">
              <ol>
                <li>
                  Designed a schema to store detailed chef profiles, including
                  certifications, employment history, and dish portfolios.
                </li>
                <li>
                  Integrated Firebase for managing image uploads, ensuring
                  high-quality visuals of dishes and chefs’ work.
                </li>
              </ol>
            </div>
          </div>
          <div className="technology-container">
            <p className="stack-type">c. Real-Time Chat</p>
            <div className="devSteps-desc">
              <ol>
                <li>
                  Implemented real-time messaging with Socket.IO, allowing users
                  and chefs to communicate seamlessly.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="da-subsections-wrapper">
        <div className="da-sub-section-label">
          3. Performance Optimization
          <hr className="da-underline" />
        </div>
        <div className="optimization-contentContainer">
          To ensure a fast and responsive platform:
          <ol>
            <li>
              Lazy Loading: Images and assets were lazy-loaded to reduce initial
              page load times.
            </li>
            <li>
              Debounced Search Inputs: Reduced the load on backend servers by
              debouncing search inputs, minimizing unnecessary API calls during
              user input.
            </li>
            <li>
              API Optimization: Streamlined API calls for distance calculations
              by leveraging optimized queries and caching mechanisms where
              applicable.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DevApproach;
