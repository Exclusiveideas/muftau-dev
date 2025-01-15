'use client';

import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 992) => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    if (!window) return

    setIsMobile(window.innerWidth < breakpoint);

    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
