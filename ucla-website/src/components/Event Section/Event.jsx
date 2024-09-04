import React from 'react'
import Box from './Box'
import './Event.css'

const Event = () => {
  return (
    <section className="event" id="event">
        <div className="center-text">
            <h2>Upcoming Events</h2>
        </div>

        <div className="event-content">
            <Box src='t1.jpg' event='GIM' name='General Interest Meeting'/>
            <Box src='t2.jpg' event='CLP' name='Cultural Learning Program'/>
            <Box src='social.png' event='SOC' name='Social Event'/>
        </div>

        <div className="center-btn">
            <a href="https://www.instagram.com/baruch_ucla/" className="btn">See More</a>
        </div>
    </section>
  )
}

export default Event