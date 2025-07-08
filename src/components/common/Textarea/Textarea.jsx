import './Textarea.scss'
import React from 'react'

const Textarea = ({ value, onChange, label, register, placeholder = ' ', name, id, disabled, ...props }) => {
  return (
    <div className={`textarea ${disabled ? 'textarea_disabled' : ''}`}>
      <textarea
        placeholder={placeholder}
        className="textarea__textarea"
        disabled={disabled}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...register(name)}
        {...props}
      />
      <label className="textarea__label" htmlFor={id}>
        <div className="textarea__label-text">{label}</div>
      </label>
    </div>
  )
}
export default Textarea
