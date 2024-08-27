import React from 'react'

const PillarRows = (props) => {
  return (
    <div className="row">
      <div className="row-img">
        <img src={props.src} alt={props.pillar || 'Pillar image'} />
      </div>
      <h4>{props.pillar}</h4>
    </div>
  );
}

export default PillarRows