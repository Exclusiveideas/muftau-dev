import { useRef } from "react";
import gsap from "gsap";

const FollowCursorComponent = ({ children, className }) => {
    const parentRef = useRef(null);
    const childRef = useRef(null);

    const addedPixels = 0
  
    const handleMouseMove = (e) => {
      const parentBounds = parentRef.current.getBoundingClientRect();
      const parentWidth = parentBounds.width;
      const parentHeight = parentBounds.height;
      const x = e.clientX - parentBounds.left - (parentWidth / 2); // Cursor X relative to parent
      const y = e.clientY - parentBounds.top - (parentHeight / 2); // Cursor Y relative to parent
  
      gsap.to(childRef.current, {
        x: x > 0 ? Math.min(x, (parentWidth / 2) - addedPixels) : Math.max(x, -(parentWidth / 2) + addedPixels),
        y: y > 0 ? Math.min(y, (parentHeight / 2) - addedPixels) : Math.max(y, -(parentHeight / 2) + addedPixels),
        duration: 0.4,
        ease: "power2.out",
      });
    };
  
    const handleMouseLeave = () => {
      // Reset child element to its original position
      gsap.to(childRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

  return (
    <div ref={parentRef} 
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave} className={`followCursorComponent ${className}`}>
      <div ref={childRef} className="child">{children}</div>
    </div>
  );
};

export default FollowCursorComponent;
