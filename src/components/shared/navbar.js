import React from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends React.Component{
    render()
    {
        return (
            <div className="top_nav">
                <div className ="container">
                    <Link to="/" className="logo">Buy<span>Books</span>Here</Link>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/book">Books</Link></li>
                        </ul>
                    </nav>
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
