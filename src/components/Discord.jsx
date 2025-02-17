'use client'
import React from 'react'
import { motion } from "motion/react"

const Discord = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center px-10 py-10 gap-4'>
        <div className='mb-2 md:mr-4 lg:mr-8 text-center'>
            <motion.h1
              initial={{y:-30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 0.5}} 
              className='font-bold text-5xl mb-4'>Join Our Community
            </motion.h1>
            <motion.p 
              initial={{y:-30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 0.7}}>
              Come and chat with us, have some fun!
            </motion.p>
        </div>
        <a href="https://discord.com/invite/8kfVbWvC4Q" target='_blank' className='bg-orange py-4 px-8 rounded-md text-black font-semibold hover:bg-red hover:text-white duration-500 ease-in-out'>Join Discord</a>
    </div>
  )
}

export default Discord