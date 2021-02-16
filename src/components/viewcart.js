import React from 'react';
import { Link } from "react-router-dom";

export default class ViewCart extends React.Component {
    render() {
        return (
            <div className="content-container">
                <h1>Your Cart</h1>
                <div className="cart-list">
                    <div className="book-info">
                        <Link to="/bookdetail"><img src= {this.props.book_cover}/></Link>
                        <span className="title"><Link to="/bookdetail">{this.props.name}</Link></span>
                        <span className="author"><Link to="/authordetail">{this.author_name}</Link></span>
                        <span className="publisher"><Link to={"/publisher/" + this.props.publisher.id}>{this.props.publisher.id}</Link></span>
                        <span className="price">${this.props.price}</span>
                        <button type="button">x</button>
                    </div>
                </div>
            </div>
        )
    }
}