import React, { useEffect, useRef } from 'react';
import './NavBar.css';

const NavBar = () => {
  const headerRef = useRef(null);
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('sticky', window.scrollY > 60);
      }
    };

    const handleMenuClick = () => {
      if (menuIconRef.current && navbarRef.current) {
        menuIconRef.current.classList.toggle('bx-x');
        navbarRef.current.classList.toggle('open');
      }
    };

    const handleLinkClick = () => {
      if (menuIconRef.current && navbarRef.current) {
        menuIconRef.current.classList.remove('bx-x');
        navbarRef.current.classList.remove('open');
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (menuIconRef.current) {
      menuIconRef.current.addEventListener('click', handleMenuClick);
    }

    if (navbarRef.current) {
      navbarRef.current.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', handleLinkClick);
      });
    }

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (menuIconRef.current) {
        menuIconRef.current.removeEventListener('click', handleMenuClick);
      }

      if (navbarRef.current) {
        navbarRef.current.querySelectorAll('a').forEach(link => {
          link.removeEventListener('click', handleLinkClick);
        });
      }
    };
  }, []);

  return (
    <header ref={headerRef}>
      <img src="Logo.png" alt="Baruch UCLA Logo" />

      <ul className="navbar" ref={navbarRef}>
        <li><a href="#home">Home 🏠</a></li>
        <li><a href="#pillar">Pillars 🧩</a></li>
        <li><a href="#about">About 📝</a></li>
        <li><a href="#event">Events 🎉</a></li>
        <li><a href="#culture">Culture 🎭</a></li>
        <li><a href="#team">Team 🧑‍💼</a></li>
      </ul>

      <div className="h-right">
        <a href="https://www.youtube.com/channel/UCfxRby3jYmi7Fm5kIQLNk3A">Follow Us</a>
        <a href="https://www.instagram.com/baruch_ucla/"><i className="ri-instagram-fill"></i></a>
        <a href="https://www.youtube.com/channel/UCfxRby3jYmi7Fm5kIQLNk3A"><i className="ri-youtube-fill"></i></a>
        <a href="https://www.facebook.com/baruchucla"><i className="ri-facebook-fill"></i></a>
        <div className="bx bx-menu" id="menu-icon" ref={menuIconRef}></div>
      </div>
    </header>
  );
}

export default NavBar;

