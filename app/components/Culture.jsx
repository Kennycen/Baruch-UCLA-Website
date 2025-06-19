"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Culture = () => {
  return (
    <section
      id="culture"
      className="md:grid md:grid-cols-2 max-w-5xl mx-4 md:mx-auto md:py-10 m-5"
    >
      <div className="relative flex items-center justify-center">
        <div className="max-md:py-20 px-6 md:px-10 text-center">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-[#e9a033] mb-2"
          >
            CHINESE CULTURE
          </motion.h2>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-bold text-5xl text-[#992933]"
          >
            Learn about Chinese Culture and Tradition
          </motion.h1>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-4 text-gray-600 leading-relaxed"
          >
            We are committed to teaching the Baruch community about China's rich
            traditions and culture. Through workshops, events, and discussions,
            we provide opportunities for students to explore Chinese heritage,
            fostering cultural appreciation and a more inclusive campus.
          </motion.p>
          <motion.button
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-lg bg-[#e9a033] text-sm px-14 py-3 mt-6 text-white hover:bg-[#992933] transition-colors font-semibold cursor-pointer"
            onClick={() =>
              window.open("https://www.instagram.com/baruch_ucla", "_blank")
            }
          >
            Read More
          </motion.button>
        </div>
      </div>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Image
          src="/images/misc/chinese_culture.png"
          alt="UCLA Family"
          className="hidden md:block w-full max-w-lg rounded-l-xl object-cover h-96 md:h-[600px] rounded-2xl"
          width={400}
          height={500}
        />
      </motion.div>
    </section>
  );
};

export default Culture;
