import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./textRevealByWord.css"; // Import the CSS file

const TextRevealByWord = ({ text, className, section, altTargetRef }) => {
  const [targettedRef, setTargettedRef] = useState(null)
  const [rangeAddition, setRangeAddition] = useState(17)
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targettedRef,
    offset: ["start end", "end start"], // Tracks scroll progress
  });
  const words = text.split(" ");

  useEffect(() => {
    if(altTargetRef) {
      setTargettedRef(altTargetRef)
      setRangeAddition(10)
    } else {
      setTargettedRef(targetRef)
      setRangeAddition(17)
    }
  }, [altTargetRef])
  

  return (
    <div ref={targetRef} className={`text-reveal-container ${className}`}>
      <div className="text-reveal-content">
        <p className="text-reveal-text">
          {words.map((word, i) => {
            const start = i / (words.length + rangeAddition);
            const end = start + 1 / (words.length + rangeAddition);
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]} section={section}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range, section }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  const experienceHighlights = ['a', 'decade'];
  const aboutHighlights = ['selectively', 'skilled'];
  const clientsHiglights = ['innovative'];

  let words;
  
  if(section == 'about') {
    words = aboutHighlights
  } else if(section == 'experience') {
    words = experienceHighlights
  } else if(section == 'clients') {
    words = clientsHiglights
  }

  const isHighlighted = words.includes(children.toLowerCase())

  return (
    <span className="word">
      <span
        style={{
          color: isHighlighted ? "#EB5939" : "#B7AB98",
        }}
        className="word-background"
      >
        {children}
      </span>
      <motion.span
        style={{
          opacity: opacity,
          color: isHighlighted ? "#EB5939" : "#B7AB98",
        }}
        className="word-visible"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
