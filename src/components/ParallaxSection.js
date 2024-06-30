import React, { useEffect } from "react";
import "./ParallaxSection.css";

const ParallaxSection = () => {
  useEffect(() => {
    const cursorLight = document.querySelector(".cursor-light");

    const moveCursorLight = (e) => {
      cursorLight.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
    };

    document.addEventListener("mousemove", moveCursorLight);

    return () => {
      document.removeEventListener("mousemove", moveCursorLight);
    };
  }, []);

  return (
    <div className="parallax">
      <div className="text-container heart-container">
        <h1>Happy Birthday</h1>
        <h2>My Favorite Person</h2>
        <span className="heart heart1"></span>
        <span className="heart heart2"></span>
        <span className="heart heart3"></span>
        <span className="heart heart4"></span>
        <span className="heart heart5"></span>
        <span className="heart heart6"></span>
        <div className="cursor-light"></div>
      </div>
    </div>
  );
};

export default ParallaxSection;
