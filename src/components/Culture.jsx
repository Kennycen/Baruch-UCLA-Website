"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Culture = () => {
  return (
    <div
      id="culture"
      className="flex flex-col lg:flex-row justify-center gap-4 lg:px-[2rem] xl:px-[12rem]"
    >
      <div className="lg:w-1/2 p-8 flex items-center">
        <div>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-orange mb-2 text-xl tracking-widest font-semibold md:text-2xl"
          >
            CHINESE CULTURE
          </motion.h2>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-bold text-4xl md:text-5xl mb-6 tracking-wider text-red"
          >
            Learn about Chinese Culture and Tradition
          </motion.h1>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-10 md:text-l"
          >
            We are committed to teaching the Baruch community about China's rich
            traditions and culture. Through workshops, events, and discussions,
            we provide opportunities for students to explore Chinese heritage,
            fostering cultural appreciation and a more inclusive campus.
          </motion.p>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="https://www.instagram.com/baruch_ucla/"
              target="_blank"
              className="bg-orange py-4 px-8 rounded-md text-black font-semibold hover:bg-red hover:text-white duration-500 ease-in-out"
            >
              Read More
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="lg:w-1/2 flex justify-center px-10 lg:p-0"
      >
        <Image
          src="/images/misc/chinese_culture.png"
          alt=""
          height={500}
          width={500}
          className="rounded-xl w-full drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
};

export default Culture;