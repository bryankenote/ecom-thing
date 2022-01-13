import React from 'react';

interface IProduct {
    item: {
        title: string;
        img: string;
        price: number;
    }
}

export function Product(props: IProduct) {
    return (
        <div>
            <h2>{props.item.title}</h2>
            <img src={props.item.img} alt=""/>
            <h3>Price: {props.item.price}</h3>
        </div>
    )
}