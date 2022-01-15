import React from 'react';
import Catalog from './components/Catalog';
import Product from './components/Product';
import Login from './components/Login/login';
import { Routes, Route } from 'react-router';
import './App.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/product" element={<Product />} />
				<Route path="/" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
