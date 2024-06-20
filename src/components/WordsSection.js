import React, { useState, useEffect } from "react";
import "./WordsSection.css";

const WordsSection = () => {
  const [showWords, setShowWords] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowWords(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`words ${showWords ? "show" : ""}`}>
      <p>Kata-kata pertama tentang dirinya.</p>
      <p>Kata-kata kedua tentang dirinya.</p>
      <p>Kata-kata ketiga tentang dirinya.</p>
    </div>
  );
};

export default WordsSection;
