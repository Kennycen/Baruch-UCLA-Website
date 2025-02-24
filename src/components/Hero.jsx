"use client";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/misc/heroBackground.png')" }}
    >
      <div className="w-full bg-black h-full absolute opacity-[30%]"></div>
      <div className="container px-6 z-10">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-orange font-semibold py-5 text-xl md:text-2xl"
        >
          LET'S
        </motion.h2>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold pb-5 "
        >
          Welcome
        </motion.h1>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold pb-10"
        >
          Generation 14
        </motion.h1>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-md text-gray-300 md:text-l lg:text-xl font-semibold pb-16"
        >
          Baruch UCLA 2024 Fall term -2025 Spring term <br /> United Chinese
          Language Association Club at Baruch Bernard College
        </motion.p>
        <motion.a
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          href="#about"
          target="_blank"
          className="bg-orange py-4 px-8 rounded-md text-black font-semibold hover:bg-red hover:text-white duration-500 ease-in-out"
        >
          Explore More
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
