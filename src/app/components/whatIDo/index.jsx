
import WhatIDoText from '@/app/homePageComps/whatIDoText';
import './whatIDo.css';
import Image from 'next/image';

const WhatIDo = () => {
  
  return (
    <div className="whatIDo-wrapper">
      <div className="whatIDo-bgImage">
        <Image
          src={`/images/planet.png`}
          width={1440}
          height={1440}
          alt="planet image"
          className="planetImg"
        /> 
      </div>
      <div className="whatIDo-contentWrapper">
        <p className="whatIDo-section-name">What I Do</p>
        <div className="textsContainer">
          <WhatIDoText>AI</WhatIDoText>
          <WhatIDoText>SAAS</WhatIDoText>
          <WhatIDoText>Cloud</WhatIDoText>
          <WhatIDoText>Full-Stack</WhatIDoText>
          <WhatIDoText>Automation</WhatIDoText>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo