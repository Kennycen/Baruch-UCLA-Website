'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Pillars = () => {
  return (
    <div id='pillar' className='container mx-auto text-center py-10 px-4'>
        <h1 className='text-5xl font-bold mb-4'>Pillars</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 py-5 gap-6'>
            <motion.div 
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.5}}
                className='flex flex-col items-center'>
                <div className='overflow-hidden rounded-full'> 
                    <Image src='/images/misc/family.png' className='rounded-full mb-2 transform transition-transform duration-500 hover:scale-150 cursor-pointer' width={100} height={100} alt='' />
                </div>
                <h1 className='font-semibold'>Family</h1>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.6}} 
                className='flex flex-col items-center'>
                <div className='overflow-hidden rounded-full'>
                    <Image src='/images/misc/service.png' className='rounded-full mb-2 transform transition-transform duration-500 hover:scale-150 cursor-pointer' width={100} height={100} alt=''/>
                </div>
                <h1 className='font-semibold'>Service</h1>
            </motion.div>
            <motion.div    
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.7}} 
                className='flex flex-col items-center'>
                <div className='overflow-hidden rounded-full'>
                    <Image src='/images/misc/culture.png' className='rounded-full mb-2 transform transition-transform duration-500 hover:scale-150 cursor-pointer' width={100} height={100} alt=''/>
                </div>
                <h1 className='font-semibold'>Culture</h1>
            </motion.div>
            <motion.div 
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.8}}
                className='flex flex-col items-center'>
                <div className='overflow-hidden rounded-full'>
                    <Image src='/images/misc/Mentorship.png' className='rounded-full mb-2 transform transition-transform duration-500 hover:scale-150 cursor-pointer' width={100} height={100} alt=''/>
                </div>
                <h1 className='font-semibold'>Mentorship</h1>
            </motion.div>
            
        </div>
    </div>
  )
}

export default Pillars