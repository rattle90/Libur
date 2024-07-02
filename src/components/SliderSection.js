import React, { useState, useEffect } from "react";
import foto1 from "../Assets/oo ini cheesecakeny ya.jpg";
import foto2 from "../Assets/pikachu dr mana iniiii.jpeg";
import foto3 from "../Assets/pose andalan neh.jpeg";
import foto4 from "../Assets/sapa yg bikin blushing nihhh.webp";
import foto5 from "../Assets/tjieee malu-malu nii.jpg";
import foto6 from "../Assets/wisuda atau apa ini.jpg";
import foto7 from "../Assets/yg dibelakang sapa tuh.jpeg";
import foto8 from "../Assets/ngetawain apa si kakk.jpeg";
import foto9 from "../Assets/model ya kak.jpeg";
import foto10 from "../Assets/minggir dulu, proarmy reg2 mo lewattt.jpeg";
import foto11 from "../Assets/mikirin apa si sampe senyum gitu.jpeg";
import foto12 from "../Assets/met ultahhhh.jpeg";
import foto13 from "../Assets/masi bocilll.jpeg";
import foto14 from "../Assets/mangap oi, makan kok mingkem siii.jpeg";
import foto15 from "../Assets/lulus niiii.jpg";
import foto16 from "../Assets/lucunyaaaaa.jpeg";
import foto17 from "../Assets/kacamata asliny maneee.jpeg";
import foto18 from "../Assets/enak banget ya.jpeg";
import foto19 from "../Assets/disney princess yg mana lagi ini.jpg";
import foto20 from "../Assets/cuteeeeee.webp";
import foto21 from "../Assets/culik aku kakakkk.webp";
import foto22 from "../Assets/cantiknyooooo.jpeg";
import foto23 from "../Assets/cantik sekaleee.jpeg";
import foto24 from "../Assets/bagus pohonnya.jpeg";
import foto25 from "../Assets/asekkk.webp";
import foto26 from "../Assets/artis cilik ya kakk.jpeg";
import "./SliderSection.css";

const images = [
  { src: foto1, description: "Deskripsi gambar 1" },
  { src: foto2, description: "Deskripsi gambar 2" },
  { src: foto3, description: "Deskripsi gambar 3" },
  { src: foto4, description: "Deskripsi gambar 3" },
  { src: foto5, description: "Deskripsi gambar 3" },
  { src: foto6, description: "Deskripsi gambar 3" },
  { src: foto7, description: "Deskripsi gambar 1" },
  { src: foto8, description: "Deskripsi gambar 2" },
  { src: foto9, description: "Deskripsi gambar 3" },
  { src: foto10, description: "Deskripsi gambar 3" },
  { src: foto11, description: "Deskripsi gambar 3" },
  { src: foto12, description: "Deskripsi gambar 3" },
  { src: foto13, description: "Deskripsi gambar 1" },
  { src: foto14, description: "Deskripsi gambar 2" },
  { src: foto15, description: "Deskripsi gambar 3" },
  { src: foto16, description: "Deskripsi gambar 3" },
  { src: foto17, description: "Deskripsi gambar 3" },
  { src: foto18, description: "Deskripsi gambar 3" },
  { src: foto19, description: "Deskripsi gambar 1" },
  { src: foto20, description: "Deskripsi gambar 2" },
  { src: foto21, description: "Deskripsi gambar 3" },
  { src: foto22, description: "Deskripsi gambar 3" },
  { src: foto23, description: "Deskripsi gambar 3" },
  { src: foto24, description: "Deskripsi gambar 3" },
  { src: foto25, description: "Deskripsi gambar 1" },
  { src: foto26, description: "Deskripsi gambar 2" },
];

const SliderSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider-section">
      <div className="slider">
        <button className="prev" onClick={handlePrev}>❮</button>
        <div
          className="slides"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          {images.map((image, i) => (
            <div className="slide" key={i}>
              <img
                src={image.src}
                alt={`Slide ${i}`}
              />
              <div className="description">{image.description}</div>
            </div>
          ))}
        </div>
        <button className="next" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};

export default SliderSection;
