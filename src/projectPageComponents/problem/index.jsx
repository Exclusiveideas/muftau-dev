import Image from "next/image";
import "./problem.css";

const Problem = ({ title, noListing, problemHiglight, problemsList, problemImgs}) => {
  return (
    <div className="problem-wrapper">
      <h4 className="problem-label">
        1. {title ?? 'The Problem'}
        <hr className="problem-underline" />
      </h4>
      <div className="problem-content-wrapper">
        <div className="problem-higlight">
          <p>{problemHiglight}</p>
        </div>
        {!noListing && (
          <div className="problems-listing">
          <div className="left-problems-container">
            {problemsList?.map((problem, i) => (
              <p key={i}>
                <span className="header">{problem?.header}</span>{" "}
                {problem?.desc}
              </p>
            ))}
          </div>
          <div className="right-problems-container">
            {problemImgs?.map((pIMg, i) => (
              <div key={i} className="problemImg-container">
                <Image
                  src={pIMg || ''}
                  width={1000}
                  height={1000}
                  alt="problems image"
                  className="problemImg"
                />
              </div>
            ))}
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Problem;