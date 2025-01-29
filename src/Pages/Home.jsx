import React, { useEffect } from "react";
import Hero from "../components/Hero.jsx";
import PopularPicks from "../components/PopularPicks.jsx";
import VegeterianPick from "../components/VegeterianPick.jsx";
import NonVegPicks from "../components/NonVegPicks.jsx";
import Num1Recipe from "../components/Num1Recipe.jsx";
import JokeSection from "../components/JokeSection.jsx";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <PopularPicks />
      <VegeterianPick />
      <NonVegPicks />
      <Num1Recipe />
      <JokeSection />
    </>
  );
}

export default Home;
