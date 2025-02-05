
import Image from 'next/image';
import './finalDemo.css';
import Link from 'next/link';

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
          <Link href={`/project/${prevProject}`} className="prev-project">
          <p>Previous Project: <span className='projectName'>{prevProject}</span></p>
        </Link>
        )}
        <a href={live} target="_blank" rel="noopener noreferrer" className="liveDemo-container">
          <p>Live Demo</p>
        </a>
        {nextProject && (
          <Link href={`/project/${nextProject}`} className="next-project">
          <p>Next Project: <span className='projectName'>{nextProject}</span></p>
        </Link>
        )}
      </div>
    </div>
  );
};

export default FinalDemo;
