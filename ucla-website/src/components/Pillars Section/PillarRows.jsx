import React from 'react'

const PillarRows = (props) => {
  return (
    <div className="row">
        <div class="row-img">
            <img src={props.src}/>
        </div>
        <h4>{props.pillar}</h4>
    </div>
  )
}

export default PillarRows