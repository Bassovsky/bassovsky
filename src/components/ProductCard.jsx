import React from 'react';
import Button from './Button';

const ProductCard = ({ title, price, onBuy }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '6px' }}>
    <h2>{title}</h2>
    <p>{price}</p>
    <Button onClick={onBuy}>Buy Now</Button>
  </div>
);

export default ProductCard;
