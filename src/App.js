import React from "react";
import "./App.css";
import ParallaxSection from "./components/ParallaxSection";
import WordsSection from "./components/WordsSection";
import SliderSection from "./components/SliderSection";

function App() {
  return (
    <div className="App">
      <ParallaxSection />
      <WordsSection />
      <SliderSection />
    </div>
  );
}

export default App;
