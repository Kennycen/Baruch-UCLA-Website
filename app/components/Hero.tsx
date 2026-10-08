"use client";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  const generationNumber: number = 16; // Change according to each year
  const startYear: number = 2026; // Change number based on starting year
  const endYear: number = 2027; // Change number based on ending year

  const handleExploreClick = (): void => {
    const momentSection = document.getElementById("moment");
    if (momentSection) {
      momentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className='relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/misc/heroBackground.png")] bg-no-repeat bg-cover bg-center h-screen'
    >
      {/* Scrim: dark on left for text, lighter on right to keep the photo */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/35"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-2xl">
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#e9a033] font-semibold py-3 md:py-5 text-xl md:text-2xl [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]"
        >
          LET&apos;S
        </motion.p>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold pb-3 md:pb-5 [text-shadow:0_4px_24px_rgba(0,0,0,0.95)]"
        >
          Welcome
        </motion.h1>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold pb-3 md:pb-5 [text-shadow:0_4px_24px_rgba(0,0,0,0.95)]"
        >
          Generation {generationNumber}
        </motion.h1>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-3 md:mt-5 text-white/95 text-base md:text-lg [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]"
        >
          Baruch UCLA {startYear} Fall term - {endYear} Spring term <br />
          United Chinese Language Association Club at Baruch College
        </motion.p>
        <div className="flex items-center mt-6 md:mt-8">
          <motion.button
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="relative"
            onClick={handleExploreClick}
          >
            <span className="bg-[#e9a033] hover:bg-[#992933] hover:text-white text-black text-md font-semibold px-6 py-3 rounded-md transition cursor-pointer shadow-lg shadow-black/40">
              Explore More
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
