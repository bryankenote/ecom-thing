import React, { useState } from 'react';
import movies from '../../api/dummyData/movies.json';

const tempProdVar = movies[0];

export function Product(tempProdVar) {
    return (
        <div>
            <h2>{tempProdVar.title}</h2>
            <img src={tempProdVar.img} alt=""/>
            <h3>Price: {tempProdVar.price}</h3>
        </div>
    )
}