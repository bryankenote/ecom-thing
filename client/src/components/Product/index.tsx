import React from "react";
import { useLocation } from "react-router-dom";

interface ILocationState {
  item: {
    title: string;
    img: string;
    price: number;
  };
}

interface IProduct {}

function Product(props: IProduct) {
  const location = useLocation();
  const { item } = location.state as ILocationState;
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.img} alt="" />
      <h3>Price: {item.price}</h3>
    </div>
  );
}

export default Product;
