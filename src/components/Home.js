import React, { useContext, useEffect, useState } from 'react';
import "./style.css";
import product from "./product";
import SingleProduct from './SingleProduct';
import { CartContext } from "../Context"



const Home = () => {

    // const { cart, setCart } = useContext(CartContext);
    const { cart, setCart } = useContext(CartContext)



    return (
        <div className="productContainer">
            {product.map((prod) => {
                return <SingleProduct prod={prod} key={prod.id}>
                </SingleProduct>
            })}
        </div>
    )
}

export default Home;