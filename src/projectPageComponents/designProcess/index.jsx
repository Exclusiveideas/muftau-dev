import Image from "next/image";
import "./designProcess.css";

const wireframes = [
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
];

const DesignProcess = () => {
  return (
    <div className="designProcess-wrapper">
      <div className="dp-section-label">
        3. Design Process
        <hr className="dp-underline" />
      </div>
      <div className="userPersona-wrapper">
        <div className="dp-sub-section-label">
          a. User Persona
          <hr className="dp-underline" />
        </div>
        <div className="personas-container">
          <div className="client-persona-wrapper">
            <Image
              src={`/images/project/sarah.jpeg`}
              width={700}
              height={700}
              alt="sarah image"
              className="personaImg"
            />
            <p className="persona-header">Client Persona</p>
            <p className="persona-description">
              {" "}
              Sarah, a working mother looking for chefs nearby who can prepare
              healthy meals for her family.
            </p>
          </div>
          <div className="client-persona-wrapper">
            <Image
              src={`/images/project/sarah.jpeg`}
              width={700}
              height={700}
              alt="sarah image"
              className="personaImg"
            />
            <p className="persona-header">Chef Persona</p>
            <p className="persona-description">
              Chef Alex, a freelance chef looking to expand his client base and
              showcase his culinary expertise.
            </p>
          </div>
        </div>
      </div>
      <div className="wireframes-wrapper">
        <div className="dp-sub-section-label">
          b. Wireframing and Prototyping
          <hr className="dp-underline" />
        </div>
        <div className="wireframes-container">
          {wireframes?.map((wireframe, i) => (
            <div key={i} className="wireframe-container">
              <Image
                src={`/images/project/${wireframe?.img}`}
                width={700}
                height={700}
                alt="sarah image"
                className="wireframeImg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;


const clientProcess = [
  {
    label: `1. Sign-Up`,
    desc: `User signs up and sets their location.`
  },
  {
    label: `2. Onboarding`,
    desc: `Users provide basic information to complete their profile, ensuring they can fully utilize the platform's features.`
  },
  {
    label: `3. Search and Discovery`,
    desc: `Searches for chefs or dishes based on filters.`
  },
  {
    label: `4. Profiles Visit`,
    desc: `Visits a chef’s profile to view certifications and reviews.`
  },
  {
    label: `5. Chat`,
    desc: `Initiates a chat to discuss availability.`
  },
];

const chefProcess = [
  {
    label: `1. Registration`,
    desc: ` Chef signs up and uploads certifications and employment history.`
  },
  {
    label: `2. Onboarding`,
    desc: `Users provide basic information to complete their profile, ensuring they can fully utilize the platform's features.`
  },
  {
    label: `3. Profile Completion`,
    desc: `Adds dishes, specialties, and pricing.`
  },
  {
    label: `4. Engagement`,
    desc: `Interacts with users and manages bookings.`
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
                  src={`/images/project/problem.png`}
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
                  src={`/images/project/problem.png`}
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
