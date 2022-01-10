import React from 'react';

export function Product(props) {
    return (
        <div>
            <h2>{props.movie.title}</h2>
            <img src={props.movie.img} alt=""/>
            <h3>Price: {props.movie.price}</h3>
        </div>
    )
}