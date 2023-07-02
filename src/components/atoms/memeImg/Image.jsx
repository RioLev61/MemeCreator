import React from 'react'
import './Image.css'

const Image = ({ srcImg, imgAlt }) => {
  return (
    <img
      src={`./memes/${srcImg}.jpg`}
      className="figure-img mt-3 d-block m-auto"
      alt={imgAlt}
    />
  )
}

export default Image
