import React, { useState } from 'react';
import movies from '../../api/dummyData/movies.json';

interface ICommerceSearch {
    setProduct: (item: { title: string; img: string; price: number }) => void;
}

export function CommerceSearch(props: ICommerceSearch) {
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
                {filteredMovies.map((item, index) => (
                    <div key={index}>
                        <p>
                            Title: {item.title}
                        </p>
                        <img src={item.img} alt=""/>
                        <p>
                            Price: {item.price}
                        </p>
                        <button onClick={() => props.setProduct(item)}>
                            Add Item
                        </button>
                    </div>                           
                ))}
            </div>
        </div>
    );
}