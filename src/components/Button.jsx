import React from 'react'

const Button = ({ styles, text, link }) => {
  return (
    <a href={link} type='button' className={`py-4 px-6 bg-secondary font-grotesk font-semibold text-[18px] text-white text-center outline-none rounded-lg duration-500 ${styles}`}>{text}</a>
  )
}

export default Button