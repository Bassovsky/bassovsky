import React from 'react';

export const Card = ({ children, ...props }) => (
  <div {...props} className='rounded-xl shadow-md'>
    {children}
  </div>
);

export const CardContent = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);
