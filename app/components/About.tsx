"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = (): React.JSX.Element => {
  return (
    <section
      id="about"
      className="md:grid md:grid-cols-2 max-w-5xl mx-4 md:mx-auto md:py-10 m-5"
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Image
          src="/images/misc/About.JPG"
          alt="UCLA Family"
          className="hidden md:block w-full max-w-lg rounded-l-xl object-cover h-96 md:h-[600px] rounded-2xl"
          width={400}
          height={500}
        />
      </motion.div>
      <div className="relative flex items-center justify-center">
        <div className="max-md:py-20 px-6 md:px-10 text-center">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-[#e9a033] mb-2"
          >
            ABOUT US
          </motion.h2>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-bold text-5xl"
          >
            Mission Statement
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-4 text-gray-600 leading-relaxed"
          >
            Dedicated to promoting Chinese American awareness and understanding
            of Chinese culture. Our mission is based on four key pillars. UCLA
            organizes cultural festivals to celebrate and educate others about
            Chinese traditions, fosters a supportive community among members,
            encourages volunteerism in New York City, and offers a mentorship
            program to build connections between new and existing members.
          </motion.p>
          <motion.button
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="rounded-lg bg-[#e9a033] text-sm px-14 py-3 mt-6 text-white hover:bg-[#992933] transition-colors font-semibold cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/baruchucla/",
                "_blank"
              )
            }
          >
            Read More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;
