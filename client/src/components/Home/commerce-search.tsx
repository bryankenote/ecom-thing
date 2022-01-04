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
            movie.title === text
        )))
    }

    return (
        <div>           
            <input
                type="text"
                value={text}
                onChange={handleChange}
            />
            <button 
                type="submit"
                value="Search"
                onClick={handleClick}>
                    Search
            </button>           
            <div>
                {filteredMovies.map(mappedMovie => (
                    <>
                        <p>
                            {mappedMovie.title}
                        </p>
                        <img src={mappedMovie.img}/>
                        <p>
                            Price: {mappedMovie.price}
                        </p>
                    </>                           
                ))}
            </div>
        </div>


    );
}