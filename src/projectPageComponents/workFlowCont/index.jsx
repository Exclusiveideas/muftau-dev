import "./workflowCont.css";

const WorkFlowCont = ({ workflowContDets }) => {
  return (
    <div className="wf-wrapper">
      {workflowContDets?.map((wflow, i) => (
        <div key={i} className="wf-sub-wrapper">
          <div className="dp-sub-section-label">
            {wflow?.subsect_label}
            <hr className="dp-underline" />
          </div>
          <div className="wf-sub-content-container">
            {wflow?.subsect_info?.map((subsect, i) => (
            <div key={i} className="wf-contentContainer">
              <p>{subsect?.header}</p>
              <ol>
                {subsect?.desc?.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ol>
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkFlowCont;
