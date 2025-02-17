'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <div id='about' className='flex flex-col lg:flex-row justify-center gap-4 lg:px-[2rem] xl:px-[12rem]'>
        <motion.div 
          initial={{y:-30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 0.5}}
          className='lg:w-1/2 flex justify-center px-10 lg:p-0'>
            <Image src='/images/misc/About.JPG' width={500} height={500} className='rounded-xl w-full drop-shadow-xl' alt=''/>
        </motion.div>
        <div className='px-10 lg:w-1/2 flex items-center'>
            <div>
              <motion.h2 
                initial={{y:-30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.5}}
                className='text-orange mb-2 text-xl tracking-widest font-semibold md:text-2xl'>ABOUT US
              </motion.h2>
              <motion.h1 
                initial={{y:-20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 0.8}}
                className='font-bold text-4xl md:text-5xl mb-6 tracking-wider'>UCLA Mission Statement
              </motion.h1>
              <motion.p 
                initial={{y:-20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1}}
                className='mb-10 md:text-l'>
                  Dedicated to promoting Chinese American awareness and understanding of Chinese culture. Our mission is based on four key pillars. UCLA organizes cultural festivals to celebrate and educate others about Chinese traditions, fosters a supportive community among members, encourages volunteerism in New York City, and offers a mentorship program to build connections between new and existing members.
              </motion.p>
              <motion.a 
                initial={{y:-20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1.1}}
                href="https://www.linkedin.com/company/baruchucla/" target='_blank' className='bg-orange py-4 px-8 rounded-md text-black font-semibold hover:bg-red hover:text-white duration-500 ease-in-out'>
                  Read More
              </motion.a>
            </div>
        </div>
    </div>
  )
}

export default About