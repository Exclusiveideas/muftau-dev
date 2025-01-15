import Image from "next/image";
import "./designProcess.css";


const DesignProcess = ({ title, personaDetails, wireframeDetails }) => {
  return (
    <div className="designProcess-wrapper">
      <div className="dp-section-label">
        {title ?? '3. Design Process'}
        <hr className="dp-underline" />
      </div>
      {personaDetails?.label && (
        <div className="userPersona-wrapper">
        <div className="dp-sub-section-label">
          {personaDetails?.label}
          <hr className="dp-underline" />
        </div>
        <div className="personas-container">
          {personaDetails?.personas?.map((persona, i) => (
            <div key={i} className="client-persona-wrapper">
            <Image
              src={persona?.img || ''}
              width={700}
              height={700}
              alt="sarah image"
              className="personaImg"
            />
            <p className="persona-header">{persona?.header}</p>
            <p className="persona-description">
              {persona?.desc}
            </p>
          </div>
          ))}
        </div>
      </div>
      )}
      {wireframeDetails?.label && (
      <div className="wireframes-wrapper">
        <div className="dp-sub-section-label">
          {wireframeDetails?.label}
          <hr className="dp-underline" />
        </div>
        <div className="wireframes-container">
          {wireframeDetails?.wireframes?.map((wireframe, i) => (
            <div key={i} className="wireframe-container">
              <Image
                src={wireframe?.img || ''}
                width={700}
                height={700}
                alt="wireframe image"
                className="wireframeImg"
              />
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default DesignProcess;


const clientProcess = [
  {
    label: `1. Sign-Up`,
    desc: `User signs up and sets their location.`,
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2FhomeMade%2Fsign-up.png?alt=media'
  },
  {
    label: `2. Onboarding`,
    desc: `Users provide basic information to complete their profile, ensuring they can fully utilize the platform's features.`,
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2FhomeMade%2Fonboarding-one.png?alt=media'
  },
  {
    label: `3. Search and Discovery`,
    desc: `Searches for chefs or dishes based on filters.`,
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2FhomeMade%2Fbrowse-page-one.png?alt=media'
  },
  {
    label: `4. Profiles Visit`,
    desc: `Visits a chef’s profile to view certifications and reviews.`,
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2FhomeMade%2Fprofile-page-1.png?alt=media'
  },
  {
    label: `5. Chat`,
    desc: `Initiates a chat to discuss availability.`,
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2FhomeMade%2Fchat-page-one.png?alt=media'
  },
];

const chefProcess = [
  {
    label: `1. Registration`,
    desc: ` Chef signs up and uploads certifications and employment history.`,
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2FhomeMade%2Flogin.png?alt=media'
  },
  {
    label: `2. Onboarding`,
    desc: `Users provide basic information to complete their profile, ensuring they can fully utilize the platform's features.`,
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2FhomeMade%2Fonboarding-2.png?alt=media'
  },
  {
    label: `3. Profile Completion`,
    desc: `Adds dishes, specialties, and pricing.`,
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2FhomeMade%2Fprofile-completion.png?alt=media'
  },
  {
    label: `4. Engagement`,
    desc: `Interacts with users and manages bookings.`,
    img: 'https://firebasestorage.googleapis.com/v0/b/exclusiveideas-c9470.appspot.com/o/muftau-dev%2Fprojects%2FhomeMade%2Fchat-page-one.png?alt=media'
  },
];



export const DesignProcessCont = () => (
  <div className="designProcess-wrapper">
    <div className="wireframes-wrapper">
      <div className="dp-sub-section-label">
        c. User Journey Mapping
        <hr className="dp-underline" />
      </div>
      <div className="scenario-container">
        <div className="scenario-label">
          Scenario 1: Hiring a Chef
          <hr className="dp-underline" />
        </div>
        <div className="scenario-content">
          <div className="scenario-images-container">
            {clientProcess?.map((process, i) => (
              <div key={i} className="scenarioImg-container">
                <Image
                  src={process?.img ||  ''}
                  width={1000}
                  height={1000}
                  alt="scenario image"
                  className="scenarioImg"
                />
                <div className="processDetails">
                  <p className="scenario-image-label">{process?.label}</p>
                  <p className="scenarioDesc">{process?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="scenario-container">
        <div className="scenario-label">
          Scenario 2: Chef Onboarding
          <hr className="dp-underline" />
        </div>
        <div className="scenario-content">
          <div className="scenario-images-container chef">
            {chefProcess?.map((process, i) => (
              <div key={i} className="scenarioImg-container">
                <Image
                  src={process?.img ||  ''}
                  width={1000}
                  height={1000}
                  alt="scenario image"
                  className="scenarioImg"
                />
                <div className="processDetails">
                  <p className="scenario-image-label">{process?.label}</p>
                  <p className="scenarioDesc">{process?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
