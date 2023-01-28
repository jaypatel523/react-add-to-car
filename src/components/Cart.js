import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context';
import SingleProduct from './SingleProduct';
import "./style.css";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [cart])


    return (
        <div>
            <span>My Cart </span>
            <br />
            <span> Total ${total} </span>
            <div className="productContainer">
                {cart.map((prod) => {
                    return (
                        <SingleProduct key={prod.id} prod={prod} >
                        </SingleProduct>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart