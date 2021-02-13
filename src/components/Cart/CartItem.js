import React from 'react';
import * as types from "../../store/constants/ActionTypes"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

class CartItem extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="book-info">
                <Link to={"/book/" + this.props.book.id}><img src= {this.props.book.book_cover}/></Link>
                <span className="title"><Link to={"/book/" + this.props.book.id}>{this.props.book.name}</Link></span>
                <span className="author"><Link to="/author/">{this.props.book.author ? this.props.book.author.name : "No Author"}</Link></span>
                <span className="price">${this.props.book.price}</span>
                <button type="button" onClick={() => this.props.remove()}>x</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => 
{
    return {
        remove: () => dispatch({
            type: types.DELETE_BOOK_FROM_CART,
            payload: {
                id: ownProps.book.id
            }
        }),
        increase: () => dispatch({
            type: types.INCREASE_BOOK_AMOUNT_IN_CART,
            payload: {
                id: ownProps.book.id
            }
        }),
        decrease: () => dispatch({
            type: types.DECREASE_BOOK_AMOUNT_IN_CART,
            payload: {
                id: ownProps.book.id,
                amount : ownProps
            }
        })
    }
}

export default connect(null, mapDispatchToProps)(CartItem)