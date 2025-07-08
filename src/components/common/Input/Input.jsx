import './Input.scss'
import React from 'react'

const Input = ({ value, onChange, label, placeholder = ' ', type, name, id, register, sizeFull, disabled, ...props }) => {
  return (
    <div className={`input ${sizeFull ? 'input_size_full' : ''} ${disabled ? 'input_disabled' : ''}`}>
      <input
        placeholder={placeholder}
        disabled={disabled}
        className="input__input"
        type={type}
        id={id || `input_${name}`}
        name={name}
        value={value}
        onChange={onChange}
        {...register(name)}
        {...props}
      />
      <label className="input__label" htmlFor={id}>
        <div className="input__label-text">{label}</div>
      </label>
    </div>
  )
}
export default Input
