import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	);
});
