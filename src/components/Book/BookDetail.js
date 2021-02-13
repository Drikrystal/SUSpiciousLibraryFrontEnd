import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { compose } from 'redux';
import { connect } from 'react-redux'

class BookDetail extends React.Component {
    render() {
        return (
            <div className="book_info">
                <Link to={"book/" + this.props.detail.id}><img src= {this.props.detail.book_cover} alt="book-cover"/></Link> 
                <h2>{this.props.detail.name}</h2>
                <h3>{this.props.detail.author ? this.props.detail.author.name : "No Author"}</h3>
                <h4>${this.props.detail.price}</h4>
            </div>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        detail : store.book.books.filter((book) => book.id.toString() === ownProps.match.params.id)[0]
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps)
)(BookDetail);
