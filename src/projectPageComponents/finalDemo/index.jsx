
import Image from 'next/image';
import './finalDemo.css';

const FinalDemo = () => {
  return (
    <div className="finalDemo-wrapper">
      <div className="fd-image-container">
        <Image
          src={`/images/project/demo-last.png`}
          width={2500}
          height={2500}
          alt="demo image"
          className="demoPlaceholderImg"
        />
      </div>
      <div className="demo-nextProject">
        <a href="https://home-made-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="liveDemo-container">
          <p>Live Demo</p>
        </a>
        <a href="/project/havenhub" rel="noopener noreferrer" className="next-project">
          <p>Next Project: HavenHub</p>
        </a>
      </div>
    </div>
  );
};

export default FinalDemo;
