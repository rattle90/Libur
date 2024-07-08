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
import foto27 from "../Assets/ras apa ini kucingny, lucu amatt.jpeg";
import foto28 from "../Assets/kawaiiiii.jpg";
import foto29 from "../Assets/tim hoodie putihhhh.jpg";
import foto30 from "../Assets/hai cantikkkk.jpg";
import foto31 from "../Assets/malu-malu nii.jpg";
import foto32 from "../Assets/posisiny gimana ini buns.jpg";
import foto33 from "../Assets/zzzzzzzzzzzz.jpg";
import "./SliderSection.css";

const images = [
  { src: foto1, description: "oo ini cheesecakeny ya" },
  { src: foto2, description: "pikachu dr mana iniiii" },
  { src: foto3, description: "pose andalan neh" },
  { src: foto4, description: "sapa yg bikin blushing nihhh" },
  { src: foto5, description: "tjieee malu-malu nii" },
  { src: foto6, description: "wisuda ya kak" },
  { src: foto7, description: "yg dibelakang sapa tuh" },
  { src: foto8, description: "ngetawain apa si kakk" },
  { src: foto9, description: "model ya kak" },
  { src: foto10, description: "proarmy reg2 mo lewattt" },
  { src: foto11, description: "mikirin apa si sampe senyum gitu" },
  { src: foto12, description: "met ultahhhh" },
  { src: foto13, description: "masi bocilll" },
  { src: foto14, description: "makan kok mingkem siii" },
  { src: foto15, description: "lulus niiii" },
  { src: foto16, description: "lucunyaaaaa" },
  { src: foto17, description: "kacamata asliny maneee" },
  { src: foto18, description: "enak banget ya" },
  { src: foto19, description: "disney princess yg mana lagi ini" },
  { src: foto20, description: "cuteeeeee" },
  { src: foto21, description: "culik aku kakakkk" },
  { src: foto22, description: "cantiknyooooo" },
  { src: foto23, description: "cantik sekaleee" },
  { src: foto24, description: "bagus pohonnya" },
  { src: foto25, description: "mana mukanyaaa" },
  { src: foto26, description: "artis cilik ya kakk" },
  { src: foto27, description: "beli dimana ya kucing imut gini" },
  { src: foto28, description: "kawaiiiii" },
  { src: foto29, description: "tim hoodie putihhhh" },
  { src: foto30, description: "hai cantikkkk" },
  { src: foto31, description: "malu-malu nii" },
  { src: foto32, description: "aga sengklek ya liatnya" },
  { src: foto33, description: "zzzzzzzzzzzz" },
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

  const getVisibleImages = () => {
    if (index + 3 > images.length) {
      return [...images.slice(index), ...images.slice(0, (index + 3) % images.length)];
    }
    return images.slice(index, index + 3);
  };

  return (
    <div className="slider-section">
      <h2 className="slider-title">About Her</h2>
      <div className="slider">
        <button className="prev" onClick={handlePrev}>❮</button>
        <div className="slides">
          {getVisibleImages().map((image, i) => (
            <div className="slide" key={i}>
              <img src={image.src} alt={`Slide ${index + i}`} />
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
