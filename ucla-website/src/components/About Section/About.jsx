import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="about-img">
            <img src='About.JPG'/>
        </div>

        <div className="about-text">
            <h5>About Us</h5>
            <h2>UCLA Mission Statement</h2>
            <p>Dedicated to promoting Chinese American awareness and understanding of Chinese culture. Our mission is based on four key pillars. UCLA organizes cultural festivals to celebrate and educate others about Chinese traditions, fosters a supportive community among members, encourages volunteerism in New York City, and offers a mentorship program to build connections between new and existing members.</p>
            <a href="https://www.linkedin.com/company/baruchucla/" class="btn">Read More</a>
        </div>
    </section>
  )
}

export default About