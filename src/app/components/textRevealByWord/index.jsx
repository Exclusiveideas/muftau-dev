import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./textRevealByWord.css"; // Import the CSS file

const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Tracks scroll progress
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`text-reveal-container ${className}`}>
      <div className="text-reveal-content">
        <p className="text-reveal-text">
          {words.map((word, i) => {
            const start = i / (words.length + 20);
            const end = start + 1 / (words.length + 20);
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  const isHighlighted =
    children.toLowerCase() === "selectively" ||
    children.toLowerCase() === "skilled";

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
