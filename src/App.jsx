import React from 'react';
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Digital Store</h1>
      <ProductCard
        title="Ebook: How to Learn Fast"
        price="$9.99"
        onBuy={() => alert('Thanks for buying!')}
      />
    </div>
  );
};

export default App;
