import "./projectOverview.css";

const ProjectOverview = () => {
  return (
    <div className="projectOverview">
      <div className="myRoleDescription">
        <h4 className="roleTitle">
          My Role
          <hr className="underline" />
        </h4>
        <p className="myRole">
          I was responsible for designing, developing, and deploying the entire
          Chef Hiring Marketplace. <br/> <br />This included creating the user interface,
          building the back-end, implementing features like real-time chat,
          search, filtering, and geolocation, and ensuring a smooth and
          efficient user experience from start to finish.
        </p>
      </div>
      <div className="aboutProject">
        <h4 className="roleTitle">
          WHat is HomeMade
          <hr className="underline" />
        </h4>
        <p className="about">
          HomeMade Marketplace is a web-based hiring platform
          designed to improve how individuals and businesses discover and
          engage professional chefs for various culinary needs. <br/> <br /> It bridges the
          gap between culinary experts and potential clients through a seamless
          digital experience, enhancing accessibility, convenience, and quality
          in the culinary services industry.
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
