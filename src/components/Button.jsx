import React from 'react'

export const Button = ({ children, ...props }) => (
  <button {...props} style={{
    backgroundColor: '#7e22ce',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }}>
    {children}
  </button>
)
