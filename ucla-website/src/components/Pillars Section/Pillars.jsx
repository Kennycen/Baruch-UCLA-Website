import React from 'react'
import PillarRows from './PillarRows'
import './Pillars.css'

const Pillars = () => {
  return (
    <section className="pillar" id="pillar">
        <div className="center-text-pillar">
            <h2>PILLARS</h2>
        </div>
        <div className="pillar-content">
            <PillarRows pillar='Family' src='family.png'/>
            <PillarRows pillar='Service' src='service.png'/>
            <PillarRows pillar='Culture'src='culture.png'/>
            <PillarRows pillar='Mentorship' src='mentorship.png'/>
        </div>
    </section>
  )
}

export default Pillars