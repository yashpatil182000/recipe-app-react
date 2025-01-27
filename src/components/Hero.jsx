import React from "react";

function Hero() {
  return (
    <div
      className="bg-[url(./assets/hero-bg-4.jpg)] md:h-[350px] h-[250px] bg-no-repeat
      bg-contain md:bg-cover flex items-start md:items-center
"
    >
      <div className="md:w-[50%] w-[80%] md:px-10 mt-8 md:mt-0 px-5 ">
        <p className="text-lg md:text-5xl mb-2 ">
          Every Recipe You Need, <br /> One Click Away
        </p>
        <p className="text-xs font-light opacity-80">
          Browse, cook, and enjoy with our extensive recipe collection. Whether
          you’re a novice or an expert, there’s something here for everyone!
        </p>
      </div>
    </div>
  );
}

export default Hero;
