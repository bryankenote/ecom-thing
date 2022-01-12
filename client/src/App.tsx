import React from 'react';
import Catalog from './components/Catalog';
import Product from './components/Product';
import './App.css';
import { Routes, Route } from 'react-router';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/product" element={<Product />} />
			</Routes>
		</div>
	);
}

export default App;
