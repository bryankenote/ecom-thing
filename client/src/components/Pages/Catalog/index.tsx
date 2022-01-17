import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import movies from '../../../api/dummyData/movies.json';
import { LocalizationContext } from '../../../localization';

function Catalog() {
	const strings = useContext(LocalizationContext);

	const [text, setText] = useState('');

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const [filteredMovies, setFilteredMovies] = useState([]);

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
						<p>
							{strings.title}: {item.title}
						</p>
						<img src={item.img} alt="" />
						<p>
							{strings.price}: {item.price}
						</p>
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
