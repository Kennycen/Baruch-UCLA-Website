import React from 'react'
import './Culture.css'

const Culture = () => {
  return (
    <section className="culture" id="culture">
        <div className="culture-text">
            <h5>Chinese Culture</h5>
            <h2>Learn about Chinese Culture and Tradition</h2>
            <p>We are committed to teaching the Baruch community about China's rich traditions and culture. Through workshops, events, and discussions, we provide opportunities for students to explore Chinese heritage, fostering cultural appreciation and a more inclusive campus.</p>
            <a href="https://www.instagram.com/baruch_ucla/" class="btn">Read more</a>
        </div>

        <div className="culture-img">
            <img src="chinese_culture.png"/>
        </div>
    </section>
  )
}

export default Culture