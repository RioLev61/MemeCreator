import React from 'react'
import './Button.css'

const Button = ({type, btnText}) => {
  return (
    <section className='sectionBtn'>
      <button type={type} className="btn mt-4 mb-4 btnDownloadImg">
      {btnText}
    </button>
    </section>
  )
}

export default Button
