import React from 'react';

export function Product(props) {
    return (
        <div>
            <h2>{props.item.title}</h2>
            <img src={props.item.img} alt=""/>
            <h3>Price: {props.item.price}</h3>
        </div>
    )
}