import React, { useState } from 'react';
import movies from '../../api/dummyData/movies.json';

export function CommerceSearch() {
    const [text, setText] = useState('');

    const handleChange = (event) => { 
        setText(event.target.value);
    }

    const filteredMovies = () => { 
        return movies.filter((movie) => movie.title === text).map(filteredTitle => ( // not sure if this code will work
            <li>
                {filteredTitle.title} 
            </li>
        ))
    } // one big question I have is how to have the submit button filter the results, but then have those show up below

    const handleClick = () => {
        filteredMovies();  // at this point eliminate filteredMovies functions and put everything in here???
    }

    // in the JSX below, in between the div tags, not sure how to get the <li> after search to show up there
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
                onClick={filteredMovies}>
                    Search
            </button>           
            <div>
                {filteredMovies}
            </div>
        </div>


    );
}