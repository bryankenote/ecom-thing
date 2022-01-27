import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import movies from '../../../api/dummyData/movies.json';
import { LocalizationContext } from '../../../localization';
import Product from '../../Generic/Product';

function Catalog() {
	const strings = useContext(LocalizationContext);

	const [text, setText] = useState('');

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setText(event.target.value);
	};

	const [filteredMovies, setFilteredMovies] = useState<
		{ img: string; title: string; price: number }[]
	>([]);

	const handleClick = () => {
		setFilteredMovies(
			movies.filter((movie) =>
				movie.title.toLowerCase().includes(text.toLowerCase()),
			),
		);
	};

	return (
		<div>
			<header>
				<h1>{strings.catalogHeader}</h1>
			</header>
			<input type="text" value={text} onChange={handleChange} />
			<button onClick={handleClick}>{strings.search}</button>
			<div>
				{filteredMovies.map((item, index) => (
					<div key={index}>
						<Product item={item} />
						<Link to="/product" state={{ item }}>
							{strings.viewProduct}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Catalog;
