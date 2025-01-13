import Image from "next/image";
import "./solution.css";

const keyFeatures = [
  {
    label: "Onboarding Process",
  },
  {
    label: "Profiles and Details",
  },
  {
    label: "Search and Discovery",
  },
  {
    label: "Real-Time Chat",
  },
];

const Solution = () => {
  return (
    <div className="solution-container">
      <div className="solution-section-label">
        2. Solution
        <hr className="solution-underline" />
      </div>
      <div className="keyFeatures-wrapper">
        <div className="favorite-section-label">
          Key Features (Favorite)
          <hr className="solution-underline" />
        </div>
        <div className="solutions-images-container">
          {keyFeatures?.map((feature, i) => (
            <div key={i} className="solutionsImg-container">
              <Image
                src={`/images/project/problem.png`}
                width={1000}
                height={1000}
                alt="solutions image"
                className="solutionsImg"
              />
              <p className="solution-image-label">{feature?.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solution;
