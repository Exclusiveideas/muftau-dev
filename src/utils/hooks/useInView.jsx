import { useState, useEffect, useRef } from 'react';

const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.85) {
          setIsInView(true); // Element is 85% in view
        } else {
          setIsInView(false); // Element is not 85% in view
        }
      },
      {
        threshold: 0.85, // Trigger when 85% of the element is in view
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
