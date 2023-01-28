import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import "./style.css";



const Header = () => {

    const [cart, setCart] = useState([]);

    return (
        <div>
            <ul className="nav">
                <li className="prod">
                    <Link to='/' element={<Home cart={cart} setCart={setCart} />}> Home  </Link>
                </li>
                <li className="prod1">
                    <Link to="/cart" element={<Cart cart={cart} setCart={setCart} />}> Cart </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header