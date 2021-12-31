import React from 'react';
import './style.css';
import { CommerceSearch } from './commerce-search';

function Home() {
  return (
    <div>
    <header>
        <h1>E-Commerce App</h1>
    </header>
    <main>
        <CommerceSearch />
    </main>
</div>
  );
}

export default Home;
