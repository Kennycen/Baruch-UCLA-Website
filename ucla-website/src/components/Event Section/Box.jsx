import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
        <img src={props.src}/>
        <h6>{props.event}</h6>
        <h4>{props.name}</h4>
    </div>
  )
}

export default Box