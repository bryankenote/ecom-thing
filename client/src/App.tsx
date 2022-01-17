import React from 'react';
import Catalog from './components/Pages/Catalog';
import Product from './components/Pages/ProductDetail';
import Login from './components/Pages/Login';
import { Routes, Route } from 'react-router';
import { LocalizationContext, localStrings } from './localization';
import './App.css';

function App() {
	return (
		<LocalizationContext.Provider value={localStrings}>
			<div className="App">
				<Routes>
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/product" element={<Product />} />
					<Route path="/" element={<Login />} />
				</Routes>
			</div>
		</LocalizationContext.Provider>
	);
}

export default App;
