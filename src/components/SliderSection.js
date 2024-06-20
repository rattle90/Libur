import React, { useState, useEffect } from "react";
import "./SliderSection.css";

const images = [
  "path-to-image1.jpg",
  "path-to-image2.jpg",
  "path-to-image3.jpg",
];

const SliderSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {images.map((image, i) => (
          <img key={i} src={image} alt={`Slide ${i}`} />
        ))}
      </div>
    </div>
  );
};

export default SliderSection;
