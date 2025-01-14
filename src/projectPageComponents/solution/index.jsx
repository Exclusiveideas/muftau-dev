import Image from "next/image";
import "./solution.css";

const Solution = ({ title, keyFeatures }) => {
  return (
    <div className="solution-container">
      <div className="solution-section-label">
        2. {title ?? "Solution"}
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
                src={feature?.img || ""}
                width={1000}
                height={1000}
                alt="solutions image"
                className="solutionsImg"
              />
              <p className="solution-image-label">{feature?.label}</p>
              <div className="solutions-desc">
                <ol>
                  {feature?.desc?.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solution;
