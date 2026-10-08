"use client";
import Image from "next/image";
import { motion } from "motion/react";

const pillars = [
  {
    src: "/misc/family.png",
    alt: "family pillar",
    label: "Family",
    delay: 0.5,
  },
  {
    src: "/misc/PILLARS_Service.jpg",
    alt: "service pillar",
    label: "Service",
    delay: 0.6,
  },
  {
    src: "/misc/PILLARS_Culture1.jpg",
    alt: "culture pillar",
    label: "Culture",
    delay: 0.7,
  },
  {
    src: "/misc/PILLAR_Mentorship1.jpg",
    alt: "mentorship pillar",
    label: "Mentorship",
    delay: 0.8,
  },
];

const Pillars = () => {
  return (
    <section id="pillars" className="container mx-auto text-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Pillars</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 py-5 gap-6">
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: pillar.delay }}
            className="flex flex-col items-center"
          >
            <div className="mb-2 h-[100px] w-[100px] overflow-hidden rounded-full">
              <Image
                src={pillar.src}
                className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-150 cursor-pointer"
                width={100}
                height={100}
                alt={pillar.alt}
              />
            </div>
            <h1 className="font-semibold">{pillar.label}</h1>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
