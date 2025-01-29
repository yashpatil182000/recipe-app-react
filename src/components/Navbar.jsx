import React from "react";
import TastyTreasuresLogo from "../assets/TastyTreasuresLogo.png";

function Navbar() {
  return (
    <div className="bg-[#2B2525] py-5 flex justify-center">
      <img src={TastyTreasuresLogo} alt="" />
    </div>
  );
}

export default Navbar;
