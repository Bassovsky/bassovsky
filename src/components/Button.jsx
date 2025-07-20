import React from 'react';

const Button = ({ children, ...props }) => (
  <button
    style={{
      background: 'purple',
      color: 'white',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
    {...props}
  >
    {children}
  </button>
);

export default Button;
