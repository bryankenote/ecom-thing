import React, { useState } from 'react';
import './style.css';
import { CommerceSearch } from './commerce-search';
import { Product } from './product_page';
//import movies from '../../api/dummyData/movies.json';

function Home() {
  const [selectedProduct, setSelectedProduct] = useState({});

  const setProduct = (newItem) => {
    setSelectedProduct(newState => {
      return {newItem}
    })
  }

  const page = selectedProduct ? <Product item={selectedProduct}/>: <CommerceSearch setProduct={setProduct}/>;
  
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
