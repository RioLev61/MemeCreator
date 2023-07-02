import React from 'react'
import Image from '../atoms/memeImg/Image'
import './Figure.css'

const Figure = ({
  imgAlt,
  memeTextUp,
  memeTextDown,
  memeImg,
  sketchPickerColor
}) => {
  const { r, g, b, a } = sketchPickerColor

  return (
    <figure className="text-center" id="exportar">
      <p
        className="textMeme fs-3 text-center"
        style={{ color: `rgba(${r},${g},${b},${a})`, wordWrap: 'break-word' }}
      >
        {memeTextUp}{' '}
      </p>
      <Image srcImg={memeImg} imgAlt={imgAlt} />
      <p
        className="textMeme fs-3 text-center "
        style={{ color: `rgba(${r},${g},${b},${a})` , wordWrap: 'break-word' }}
      >
        {memeTextDown}
      </p>
    </figure>
  )
}

export default Figure
