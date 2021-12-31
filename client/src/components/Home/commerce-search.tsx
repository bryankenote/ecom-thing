import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export function CommerceSearch() {
    const [text, setText] = useState('');

    let jsonData = require('../../api/dummyData');

    const handleChange = (event) => { 
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // I will want to have imported the data first 
        // Then I want to convert the JSON data into js --> is this where I want to do this?? not sure yet 
        // After that, search the data for the movie title I'm looking for by filtering the array of objects
        // I know what info I need, but not quite sure how to 'present' it...(still working on this)
    }

    return (
        <div>
            <form className='CommerceSearch' onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Search"
                />            
            </form>
            <div>
                {jsonData}
            </div>
        </div>


    );
}