import Hero from "./components/Hero";
import Num1Recipe from "./components/Num1Recipe";
import PopularPicks from "./components/PopularPicks";
import VegeterianPick from "./components/VegeterianPick";
import TastyTreasuresLogo from "./assets/TastyTreasuresLogo.png";

function App() {
  return (
    <div>
      <div className="bg-[#2B2525] py-5 flex justify-center">
        <img src={TastyTreasuresLogo} alt="" />
      </div>
      <Hero />
      <PopularPicks />
      <VegeterianPick />
      <Num1Recipe />
    </div>
  );
}

export default App;
