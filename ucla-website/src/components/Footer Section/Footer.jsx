import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <h2>Connect with Us!</h2>
          <div className="social-Icon">
            <a href="https://www.instagram.com/baruch_ucla/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCfxRby3jYmi7Fm5kIQLNk3A" target="_blank"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://www.facebook.com/baruchucla" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.tiktok.com/@baruch_ucla" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
          </div>
          <div className="footer-Nav">
            <h2>Location</h2>
            <p>55 Lexington Ave <br/> New York, NY 10010</p>
          </div>
        </div>
        <div className="footer-bottom">
            <p>&copy;Copyright BaruchUCLA 2024</p>
        </div>
      </footer>
  )
}

export default Footer