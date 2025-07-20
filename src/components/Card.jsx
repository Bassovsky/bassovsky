import React from 'react'

export const Card = ({ children, ...props }) => (
  <div {...props} style={{
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    padding: '1rem',
    marginTop: '1rem'
  }}>
    {children}
  </div>
)

export const CardContent = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
)
