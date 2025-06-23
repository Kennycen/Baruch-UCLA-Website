"use client";
import React from "react";
import { motion } from "motion/react";

const Hero = (): React.JSX.Element => {
  const generationNumber: number = 15; // Change according to each year
  const startYear: number = 2025; // Change number based on starting year
  const endYear: number = 2026; // Change number based on ending year

  const handleExploreClick = (): void => {
    const momentSection = document.getElementById("moment");
    if (momentSection) {
      momentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/images/misc/heroBackground.png")] bg-no-repeat bg-cover bg-center h-screen'
    >
      <div className="max-w-2xl max-md:mt-7">
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#e9a033] font-semibold py-5 text-xl md:text-2xl"
        >
          LET&apos;S
        </motion.p>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-6xl md:text-6xl lg:text-8xl font-bold pb-5"
        >
          Welcome
        </motion.h1>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-6xl md:text-6xl lg:text-8xl font-bold pb-5"
        >
          Generation {generationNumber}
        </motion.h1>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-5 text-gray-200 text-lg"
        >
          Baruch UCLA {startYear} Fall term - {endYear} Spring term <br />
          United Chinese Language Association Club at Baruch College
        </motion.p>
        <div className="flex items-center mt-8">
          <motion.button
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="relative"
            onClick={handleExploreClick}
          >
            <span className="bg-[#e9a033] hover:bg-[#992933] hover:text-white text-black text-md font-semibold px-6 py-3 rounded-md transition cursor-pointer">
              Explore More
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
