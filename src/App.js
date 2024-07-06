import React from "react";
import "./App.css";
import ParallaxSection from "./components/ParallaxSection";
import WordsSection from "./components/WordsSection";
import SliderSection from "./components/SliderSection";
import PlaylistSection from "./components/PlaylistSection";

function App() {
  return (
    <div className="App">
      <ParallaxSection />
      <WordsSection />
      <SliderSection />
      <PlaylistSection />
    </div>
  );
}

export default App;
