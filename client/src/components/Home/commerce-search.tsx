import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export function CommerceSearch() {
    const [text, setText] = useState('');

    const handleChange = (event) => { //problem with event? not sure on issue here
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //still working on handling submission event 
    }

    return (
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
    );
}