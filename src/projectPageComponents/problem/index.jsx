import Image from "next/image";
import "./problem.css";

const Problem = () => {
  return (
    <div className="problem-wrapper">
      <h4 className="problem-label">
        1. The Problem
        <hr className="problem-underline" />
      </h4>
      <div className="problem-content-wrapper">
        <div className="problem-higlight">
          <p>
            The culinary industry has a growing demand for personalized,
            professional cooking services. However, finding and hiring skilled
            chefs remains an inefficient, fragmented, and often frustrating
            process.
          </p>
        </div>
        <div className="problems-listing">
          <div className="left-problems-container">
            <p>
              <span className="header">a. User Challenges: </span> Difficulty in
              finding chefs with specific skill sets or dishes they specialize
              in. Lack of location-based recommendations for chefs or dishes.
              Inability to assess chefs’ qualifications and work history before
              hiring.
            </p>
            <p>
              <span className="header">b. Business Challenges: </span> Need for
              a scalable and responsive platform for real-time interactions.
              Integration of robust filtering and proximity-based search
              functionality.
            </p>
          </div>
          <div className="right-problems-container">
            {[1, 1, 1].map((ss, i) => (
              <div key={i} className="problemImg-container">
                <Image
                  src={`/images/project/problem.png`}
                  width={1000}
                  height={1000}
                  alt="problems image"
                  className="problemImg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;