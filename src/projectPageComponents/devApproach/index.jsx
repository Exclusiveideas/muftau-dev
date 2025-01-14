import "./devApproach.css";

const DevApproach = ({ number, techStack, onlyStack, keyDevSteps, optimizationDets }) => {
  return (
    <div className="devApproach-wrapper">
      <div className="da-section-label">
        {number}. Development Approach
        <hr className="da-underline" />
      </div>
      <div className="da-subsections-wrapper">
        <div className="da-sub-section-label">
          1. Technology Stack
          <hr className="da-underline" />
        </div>
        <div className="sub-sect-contentContainer">
          {techStack?.map((stack, i) => (
            <div key={i} className="technology-container">
              <p className="stack-type">{stack?.label}</p>
              <p className="stack-desc">{stack?.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {!onlyStack && (
        <>
          <div className="da-subsections-wrapper">
            <div className="da-sub-section-label">
              2. Key Development Steps
              <hr className="da-underline" />
            </div>
            <div className="sub-sect-contentContainer">
              {keyDevSteps?.map((steps, i) => (
                <div key={i} className="technology-container">
                  <p className="stack-type">{steps?.label}</p>
                  <div className="devSteps-desc">
                    <ol>
                      {steps?.desc?.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="da-subsections-wrapper">
            <div className="da-sub-section-label">
              3. Performance Optimization
              <hr className="da-underline" />
            </div>
            <div className="optimization-contentContainer">
              {optimizationDets?.highlight}
              <ol>
                {optimizationDets?.approaches?.map((approach, i) => (
                  <li key={i}>{approach}</li>
                ))}
              </ol>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DevApproach;
