import React, { useState, useCallback } from 'react';
import Catalog from './components/Pages/Catalog';
import Login from './components/Pages/Login';
import { Routes, Route } from 'react-router';
import { LocalizationContext, localStrings } from './localization';
import Checkout from './components/Pages/Checkout';
import './App.css';
import ProductDetail from './components/Pages/ProductDetail';
import { product } from './components/Generic/Product';
import TopBar from './TopBar';

export interface ICart {
	[title: string]: {
		product: product;
		quantity: number;
	};
}

function App() {
	const [cartItems, setCartItems] = useState<ICart>({});

	const onAdd = useCallback((product: product, quantity: number) => {
		setCartItems((cartItems) => {
			let cartItem = cartItems[product.title];
			let newQuantity;
			if (cartItem) {
				newQuantity = quantity + cartItem.quantity;
			} else {
				newQuantity = quantity;
			}
			return {
				...cartItems,
				[product.title]: { product, quantity: newQuantity },
			};
		});
	}, []);

	return (
		<LocalizationContext.Provider value={localStrings}>
			<div className="App">
				<TopBar />
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route
						path="/product"
						element={<ProductDetail onAdd={onAdd} />}
					/>
					<Route
						path="/checkout"
						element={<Checkout cartItems={cartItems} />}
					/>
				</Routes>
			</div>
		</LocalizationContext.Provider>
	);
}

export default App;
