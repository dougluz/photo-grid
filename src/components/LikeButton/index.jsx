import React from 'react'
import './button.css'

export const Button = ({ children }) => (
  <button type='button' className='primary-button'>{children}</button>
)