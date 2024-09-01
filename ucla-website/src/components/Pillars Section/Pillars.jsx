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
            <PillarRows pillar='Family' src='Family.png'/>
            <PillarRows pillar='Service' src='Service.png'/>
            <PillarRows pillar='Culture'src='Culture.png'/>
            <PillarRows pillar='Mentorship' src='Mentorship.png'/>
        </div>
    </section>
  )
}

export default Pillars