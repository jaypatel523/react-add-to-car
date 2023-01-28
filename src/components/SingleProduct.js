import React, { useContext } from 'react'
import { CartContext } from '../Context';
import "./style.css";


const SingleProduct = ({ prod }) => {

    const { cart, setCart } = useContext(CartContext)
    // console.log(prod);
    const { id, image, name, price } = prod;
    return (
        <div className="products">
            <img src={image} alt="" />
            <div className="productDesc">
                <span> {name}</span>
                <span> ${price.substring(0, 3)} </span>
            </div>

            {cart.includes(prod) ? (
                <button
                    className="add remove"
                    onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
                >
                    Remove from Cart
                </button>
            ) : (
                <button className="add" onClick={() => setCart([...cart, prod])}>
                    Add to Cart
                </button>
            )}




        </div>
    )
}

export default SingleProduct