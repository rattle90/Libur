import React from "react";
import "./App.css";
import ParallaxSection from "./components/ParallaxSection";
import WordsSection from "./components/WordsSection";
import SliderSection from "./components/SliderSection";
import ButtonSection from "./components/ButtonSection";

function App() {
  return (
    <div className="App">
      <ParallaxSection />
      <WordsSection />
      <SliderSection />
      <ButtonSection />
    </div>
  );
}

export default App;
