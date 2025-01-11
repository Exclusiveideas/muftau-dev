import { useState, useEffect, useRef } from 'react';

const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
          setIsInView(true); // Element is 80% in view
        } else {
          setIsInView(false); // Element is not 80% in view
        }
      },
      {
        threshold: 0.8, // Trigger when 80% of the element is in view
        ...options, // Allow for custom options
      }
    );

    // Start observing the element
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [isInView, elementRef];
};

export default useInView;
