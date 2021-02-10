import React from 'react';
import { Link } from "react-router-dom";
import cartIcon from "./shopping-cart.svg";
import userIcon from "./user.svg";

export default class Navbar extends React.Component{
    render()
    {
        return (
            <div className="top_nav navbar sticky-top">
                <div className ="container-nav">
                    <Link to="/" className="logo">Buy<span>Books</span>Here</Link>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/books">Books</Link></li>
                            <li><Link to="/authors">Authors</Link></li>
                            <li><Link to="/publishers">Publishers</Link></li>
                        </ul>
                    </nav>
                    <div className="login-container">
                        <Link to="/login"><img src= {userIcon} alt="Cart Icon"/> Welcome, <span className="user-name">Login</span></Link>
                    </div>
                    <div className="cart-container">
                        <Link to="/cart"><img src= {cartIcon} alt="Cart Icon"/> <span className="cart-count">0</span></Link>
                    </div>
                </div>
            </div>
        )
    }
}

/*
    <div class="login-container">
        <form action="none">
            <input type="text" placeholder="Username" name="username">
            <input type="text" placeholder="Password" name="psw">
            <button type="submit">Login</button>
        </form>
    </div>
    */
