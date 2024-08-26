import React from 'react'

const ImageCont = (props) => {
  return (
    <div className="image-container">
        <img src={props.src}/>
        <h3>{props.title}</h3>
        <p>{props.name}</p>
    </div>
  )
}

export default ImageCont