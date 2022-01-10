import React from 'react';
import './style.css';
import { CommerceSearch } from './commerce-search';
import { Product } from './product_page';
import movies from '../../api/dummyData/movies.json';

function Home() {
  const tempVar = movies[0];
  return (
    <div>
      <header>
          <h1>E-Commerce App</h1>
      </header>
      <main>
          <CommerceSearch />
          <Product movie={tempVar}/>
      </main>
  </div>
  );
}

export default Home;
