import "./whatIDoText.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WhatIDoText = ({ children }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Tracks scroll progress
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={targetRef} className="whatIDoText-wrapper">
      <p className="whatIDo-word-background">{children}</p>
      <motion.div
        style={{
          width,
        }}
        className="whatIDo-word-visible"
      >
        <p>{children}</p>
      </motion.div>
    </div>
  );
};

export default WhatIDoText;
