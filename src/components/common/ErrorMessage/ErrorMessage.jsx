import './ErrorMessage.scss'
import React from 'react'

const ErrorMessage = ({ text }) => {
  if (!text?.message && !text) return undefined

  return (
    <div className="error-message">
      {text?.message || text}
    </div>
  )
}
export default ErrorMessage
