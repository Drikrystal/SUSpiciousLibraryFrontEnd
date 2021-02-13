import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { RemoveBookFromCart } from "../../store/actions/thunks/cartActions";

class CartItem extends React.Component{
    render() {
        return (
            <div className="book-info">
                <Link to={"/book/" + this.props.book.id}><img src= {this.props.book.book_cover} alt="book-cover"/></Link>
                <span className="title"><Link to={"/book/" + this.props.book.id}>{this.props.book.name}</Link></span>
                <span className="author"><Link to="/author/">{this.props.book.author ? this.props.book.author.name : "No Author"}</Link></span>
                <span className="price">${this.props.book.price}</span>
                <button type="button" onClick={() => this.props.remove(this.props.book.id)}>x</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => 
{
    return {
        remove : bindActionCreators(RemoveBookFromCart, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(CartItem)