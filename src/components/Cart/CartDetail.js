import React from 'react';
import { connect } from "react-redux";
import CartItem from "./CartItem";

class ViewCart extends React.Component {
    render() {
        if (!this.props.cart || this.props.cart.items.length === 0) 
        {
            return <div>Your Cart is empty</div>
        }
        return (
            <div className="content-container">
                <h1>Your Cart</h1>
                <div className="cart-list">
                    {this.props.cart.items.map((item, i) => {     
                        return (<CartItem key={i} book={item.book} amount={item.amount} />) 
                    })}
                </div>
                <div>Total : ${this.props.total} </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        cart: state.cart, 
        total: state.cart.total, 
        amount: state.cart.total_amount
    }
}

export default connect(mapStateToProps)(ViewCart)