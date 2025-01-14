import "./reflection.css";

const Reflection = () => {
  return (
    <div className="reflection-wrapper">
      <div className="dp-section-label">
        5. Reflection
        <hr className="dp-underline" />
      </div>
      <div className="reflection-content-container">
        <ul>
          <li>
            <p className="listItem-Txt">
              <span className="boldTxt">User Feedback: </span>Early user testing helped refine
              features like the comments section and similar pictures
              recommendation system.
            </p>
          </li>
          <li>
            <p className="listItem-Txt">
              <span className="boldTxt">Scalability: </span>Sanity’s headless CMS and React’s modular approach allowed for future feature additions without significant rework.
            </p>
          </li>
          <li>
            <p className="listItem-Txt">
              <span className="boldTxt">Future Scope: </span>
              <span className="sub-list-item">- Add a private messaging feature.</span>
              <span className="sub-list-item">- Introduce AI-based tagging for images to improve search relevance.</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reflection;
