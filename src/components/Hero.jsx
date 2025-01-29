import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div
      className="bg-[url(./assets/hero-bg-7.jpg)] md:h-[350px] h-[250px]
      bg-cover flex items-start md:items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="md:w-[50%] w-[80%] md:px-10 mt-10 md:mt-0 px-5 "
      >
        <p className="text-lg md:text-5xl mb-2 ">
          Every Recipe You Need, <br /> One Click Away
        </p>
        <p className="text-xs font-light opacity-80">
          Browse, cook, and enjoy with our extensive recipe collection. Whether
          you’re a novice or an expert, there’s something here for everyone!
        </p>
      </motion.div>
    </div>
  );
}

export default Hero;
