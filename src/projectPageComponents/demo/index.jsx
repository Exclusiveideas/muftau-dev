import Image from "next/image";
import "./demo.css";

const Demo = () => {
  return (
    <div className="demo-wrapper">
      <div className="image-container">
        <Image
          src={`/images/project/demo-placeholder.png`}
          width={2500}
          height={2500}
          alt="demo image"
          className="demoPlaceholderImg"
        />
      </div>
    </div>
  );
};

export default Demo;
