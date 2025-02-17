'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    
    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (scrollY > 50) {
          setIsScroll(true);
        } else {
          setIsScroll(false)
        }
      })
    },[])

  return (
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 ${isScroll ? "bg-white backdrop-blur-lg shadow-md transition-all duration-500" : "transition-all duration-500"}`}>
      <Link href="/">
        <div className="relative w-24 h-24"> 
          <Image 
            src="/images/icons/logo.png" 
            alt="Baruch UCLA Logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>

      <ul className="container hidden lg:flex justify-center gap-6">
        <li><a href="#home" className='hover:text-orange hover:-translate-y-1 duration-500 ease-in-out inline-block font-semibold'>Home 🏠</a></li>
        <li><a href="#pillar" className='hover:text-orange hover:-translate-y-1 duration-500 ease-in-out inline-block font-semibold'>Pillars 🧩</a></li>
        <li><a href="#about" className='hover:text-orange hover:-translate-y-1 duration-500 ease-in-out inline-block font-semibold'>About 📝</a></li>
        <li><a href="#event" className='hover:text-orange hover:-translate-y-1 duration-500 ease-in-out inline-block font-semibold'>Events 🎉</a></li>
        <li><a href="#culture" className='hover:text-orange hover:-translate-y-1 duration-500 ease-in-out inline-block font-semibold'>Culture 🎭</a></li>
        <li><a href="#team" className='hover:text-orange hover:-translate-y-1 duration-500 ease-in-out inline-block font-semibold'>Team 🧑‍💼</a></li>
      </ul>

      <div className="w-auto lg:w-[21rem] flex items-center justify-between gap-3 px-2">
        <a href="https://www.youtube.com/channel/UCfxRby3jYmi7Fm5kIQLNk3A" target='_blank' className='hover:-translate-y-1 duration-500 ease-in-out hover:text-orange font-semibold'>Follow Us</a>
        <a href="https://www.instagram.com/baruch_ucla/" target='_blank'>
          <Image src='/images/icons/ig-icon.png' width={25} height={25} className='w-6 hover:-translate-y-1 duration-500 ease-in-out' alt=''/>
        </a>
        <a href="https://www.youtube.com/channel/UCfxRby3jYmi7Fm5kIQLNk3A" target='_blank'>
          <Image src='/images/icons/yt-icon.png' width={25} height={25} className='w-6 hover:-translate-y-1 duration-500 ease-in-out' alt=''/>
        </a>
        <a href="https://www.facebook.com/baruchucla" target='_blank'>
          <Image src='/images/icons/fb-icon.png' width={25} height={25} className='w-6 hover:-translate-y-1 duration-500 ease-in-out' alt=''/>
        </a>
        <button onClick={openMenu}>
          <Image src='/images/icons/menu-black.png' width={25} height={25} className='block lg:hidden' alt='' />
        </button>
      </div>

      {/* ------ Hamburger Menu -------- */}

      <ul ref={sideMenuRef} className='flex lg:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition duration-500'>
        <div className='absolute right-6 top-6' onClick={closeMenu}>
          <Image src='/images/icons/close-black.png' className='cursor-pointer' width={25} height={25} alt='' />
        </div>
        <li><a href="#home" onClick={closeMenu} className='border-b-2 border-orange pb-2 hover:text-orange duration-500 ease-in-out'>Home 🏠</a></li>
        <li><a href="#pillar" onClick={closeMenu} className='border-b-2 border-orange pb-2 hover:text-orange duration-500 ease-in-out'>Pillars 🧩</a></li>
        <li><a href="#about" onClick={closeMenu} className='border-b-2 border-orange pb-2 hover:text-orange duration-500 ease-in-out'>About 📝</a></li>
        <li><a href="#event" onClick={closeMenu} className='border-b-2 border-orange pb-2 hover:text-orange duration-500 ease-in-out'>Events 🎉</a></li>
        <li><a href="#culture" onClick={closeMenu} className='border-b-2 border-orange pb-2 hover:text-orange duration-500 ease-in-out'>Culture 🎭</a></li>
        <li><a href="#team" onClick={closeMenu} className='border-b-2 border-orange pb-2 hover:text-orange duration-500 ease-in-out'>Team 🧑‍💼</a></li>
      </ul>

    </nav>
  )
}

export default Navbar