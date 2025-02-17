'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Events = () => {

  return (
    <div id='event' className='flex flex-col justify-center items-center gap-4 pt-16 px-10 mb-16 xl:px-[10rem]'>
        <div className='text-5xl font-bold mb-8'>Our Events</div>
        <div className='w-full flex flex-col md:flex-row justify-around gap-6 text-white mb-8'>
            <motion.div
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: 0.3}} 
                className='h-[30rem] xl:h-[35rem] md:w-1/3 bg-cover rounded-2xl flex items-end p-5 drop-shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out cursor-pointer' style={{ backgroundImage: "url('/images/misc/GIM.png')" }}>
                <div>
                    <h3 className='text-xl '>GIM <br /> General Interest Meeting</h3>
                </div>
            </motion.div>
            <motion.div 
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: 0.5}}
                className='h-[30rem] xl:h-[35rem] md:w-1/3 bg-cover rounded-2xl flex items-end p-5 drop-shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out cursor-pointer' style={{ backgroundImage: "url('/images/misc/CLP.png')" }}>
                <div>
                    <h3>CLP <br /> Cultural Learning Program</h3>
                </div>
            </motion.div>
            <motion.div 
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: 0.7}}
                className='h-[30rem] xl:h-[35rem] md:w-1/3 bg-cover rounded-2xl flex items-end p-5 drop-shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out cursor-pointer' style={{ backgroundImage: "url('/images/misc/SOC.png')" }}>
                <div>
                    <h3>SOCIAL <br /> Social Events</h3>
                </div>
            </motion.div>
        </div>
        <div className=''>
            <a href="https://www.instagram.com/baruch_ucla/" target='_blank' className='bg-orange py-4 px-8 rounded-md text-black font-semibold hover:bg-red hover:text-white duration-500 ease-in-out'>See More</a>
        </div>
    </div>
  )
}

export default Events