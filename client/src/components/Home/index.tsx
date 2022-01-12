import React, { useState } from 'react';
import './style.css';
import { CommerceSearch } from './commerce-search';
import { Product } from './product_page';
//import movies from '../../api/dummyData/movies.json';

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const page = selectedProduct ? <Product item={selectedProduct} /> : <CommerceSearch setProduct={setSelectedProduct} />;
  
  return (
    <div>
      <header>
          <h1>E-Commerce App</h1>
      </header>
      <main>
          {page}
      </main>
  </div>
  );
}

export default Home;
