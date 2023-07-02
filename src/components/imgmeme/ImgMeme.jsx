import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import html2canvas from 'html2canvas'

import Subtitle from '../atoms/headlines/Subtitle'
import Figure from '../molecule/Figure'
import { options } from '../../utils/utils'
import Button from '../atoms/button/Button'
import './ImgMeme.css'
import InputForm from '../atoms/input/InputForm'

const ImgMemes = () => {
  const d = document
  const [memeImg, setMemeImg] = useState('1')
  const [memeTextUp, setMemeTextUp] = useState('')
  const [memeTextDown, setMemeTextDown] = useState('')
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: '31',
    g: '112',
    b: '19',
    a: '1'
  })
  const Swal = require('sweetalert2')

  const handleMemeImg = (e) => {
    setMemeImg(e.target.value)
  }

  const handleMemeTextUp = (e) => {
    setMemeTextUp(e.target.value)
  }

  const handleMemeTextDown = (e) => {
    setMemeTextDown(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    html2canvas(d.querySelector('#exportar')).then(function (canvas) {
      const img = canvas.toDataURL('memes/jpg')
      const link = d.createElement('a')
      link.download = 'new-meme.jpg'
      link.href = img
      link.click()
    })
   
    setMemeImg('1')
    setMemeTextUp('')
    setMemeTextDown('')
    setSketchPickerColor({
      r: '31',
      g: '112',
      b: '19',
      a: '1'
    })
   
    Swal.fire({
      icon: 'success',
      title: 'Felicitaciones!',
      text: 'El Meme ha sido descargado'
    })
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <Subtitle subtitleText="Ingresa el texto superior del Meme" />
          <InputForm
            onChange={handleMemeTextUp}
            value={memeTextUp}
            name="meme1"
          />
          <Subtitle subtitleText="Ingresa el texto inferior del Meme" />
          <InputForm
            onChange={handleMemeTextDown}
            value={memeTextDown}
            name="meme2"
          />
          <Subtitle subtitleText="Elegi tu imagen" />
          <select
            onChange={handleMemeImg}
            className="form-select form-select-lg mb-3 w-50 m-auto"
            arial-label=".form-select-lg example"
            value={memeImg}
          >
            {options.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              )
            })}
          </select>

          <Subtitle subtitleText="Selecciona el color del texto" />
          <section className="my-5 sketchpicker">
            <SketchPicker
              onChange={(color) => {
                setSketchPickerColor(color.rgb)
              }}
              color={sketchPickerColor}
            />
          </section>
          <section className="newMeme">
            <Figure
              memeTextUp={memeTextUp}
              memeTextDown={memeTextDown}
              memeImg={memeImg}
              imgAlt="meme"
              sketchPickerColor={sketchPickerColor}
            />
          </section>
          <Button type="submit" btnText="Descargar Meme" />
        </form>
      </section>
    </>
  )
}

export default ImgMemes
