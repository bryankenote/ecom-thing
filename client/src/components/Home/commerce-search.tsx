import React, { useState } from 'react';
import movies from '../../api/dummyData/movies.json';

export function CommerceSearch() {
    const [text, setText] = useState('');
    
    const handleChange = (event) => { 
        setText(event.target.value);
    }

    const [filteredMovies, setFilteredMovies] = useState([]);

    const handleClick = () => {
        setFilteredMovies(movies.filter(movie => (
            movie.title.toLowerCase().includes(text.toLowerCase())
        )))
    }

    return (
        <div>           
            <input
                type="text"
                value={text}
                onChange={handleChange}
            />
            <button onClick={handleClick}>
                Search
            </button>           
            <div>
                {filteredMovies.map((mappedMovie, index) => (
                    <div key={index}>
                        <p>
                            Title: {mappedMovie.title}
                        </p>
                        <img src={mappedMovie.img} alt=""/>
                        <p>
                            Price: {mappedMovie.price}
                        </p>
                    </div>                           
                ))}
            </div>
        </div>
    );
}