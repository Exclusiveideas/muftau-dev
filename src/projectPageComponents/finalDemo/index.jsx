
import Image from 'next/image';
import './finalDemo.css';

const FinalDemo = ({ demoImg, live, prevProject, nextProject }) => {
  return (
    <div className="finalDemo-wrapper">
      <div className="fd-image-container">
        <Image
          src={demoImg || ''}
          width={2500}
          height={2500}
          alt="demo image"
          className="demoPlaceholderImg"
        />
      </div>
      <div className="demo-nextProject">
        {prevProject && (
          <a href={`/project/${prevProject}`} className="prev-project">
          <p>Previous Project: <span className='projectName'>{prevProject}</span></p>
        </a>
        )}
        <a href={live} target="_blank" rel="noopener noreferrer" className="liveDemo-container">
          <p>Live Demo</p>
        </a>
        {nextProject && (
          <a href={`/project/${nextProject}`} className="next-project">
          <p>Next Project: <span className='projectName'>{nextProject}</span></p>
        </a>
        )}
      </div>
    </div>
  );
};

export default FinalDemo;
