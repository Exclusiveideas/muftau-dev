import "./projectOverview.css";

const ProjectOverview = ({myRole, title, aboutProject}) => {
  return (
    <div className="projectOverview">
      <div className="myRoleDescription">
        <h4 className="roleTitle">
          My Role
          <hr className="underline" />
        </h4>
        <p className="myRole" dangerouslySetInnerHTML={{ __html: myRole }} />
      </div>
      <div className="aboutProject">
        <h4 className="roleTitle">
          WHat is {title}
          <hr className="underline" />
        </h4>
        <p className="about" dangerouslySetInnerHTML={{ __html: aboutProject }} />
      </div>
    </div>
  );
};

export default ProjectOverview;
