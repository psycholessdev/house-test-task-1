import './Button.scss'
import React from 'react'

const Button = ({ children, disabled, ...props }) => {
  return (
    <button className={`button ${disabled ? 'button_disabled' : ''}`} {...props}>
      <span className="button__text">{children}</span>
    </button>
  )
}
export default Button
