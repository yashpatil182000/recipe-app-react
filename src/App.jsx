import Hero from "./components/Hero";
import TastyTreasuresLogo from "./assets/TastyTreasuresLogo.png";
import PopularPicks from "./components/PopularPicks";
import VegeterianPick from "./components/VegeterianPick";
import NonVegPicks from "./components/NonVegPicks";
import Num1Recipe from "./components/Num1Recipe";

function App() {
  return (
    <div>
      <div className="bg-[#2B2525] py-5 flex justify-center">
        <img src={TastyTreasuresLogo} alt="" />
      </div>
      <Hero />
      <PopularPicks />
      <VegeterianPick />
      <NonVegPicks />
      <Num1Recipe />
    </div>
  );
}

export default App;
