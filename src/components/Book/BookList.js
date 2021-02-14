import React from 'react';
import { connect}  from "react-redux";
import { bindActionCreators } from "redux";
import { fetchBooks } from "../../store/actions/thunks/dataActions";
import { AddBookToCart } from "../../store/actions/thunks/cartActions";
import { Link } from "react-router-dom";

class BookItem extends React.Component {
    render() {
        return (
            <div>
                <Link to={"book/" + this.props.id}><img src= {this.props.book_cover} alt="book-cover"/></Link> 
                <h2>{this.props.name}</h2>
                <h3>{this.props.author ? this.props.author.name : "No Author"}</h3>
                <h4>${this.props.price}</h4>
            </div>
        )
    }
}

class LoadBooks extends React.Component {
    componentDidMount() {
        this.props.loadBooks()
    }

    render(){
        return (
            <div className="content_container">
                <input type="text" name="search" placeholder="Search book..." onChange={this.searchBook}/>
                <div className="search_list">
                    { this.props.isFetching ? <p>Loading Books...</p>
                    : this.props.books.map((book, i) =>  { 
                        return <div className="book_info" key={i}>
                            <BookItem {...book} ></BookItem> 
                            <button onClick={() => this.props.addToCart(book.id)}>Add To Cart</button>
                        </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books : state.book.books,
        isFetching : state.book.isFetching,
        session : state.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadBooks: bindActionCreators(fetchBooks, dispatch),
        addToCart : bindActionCreators(AddBookToCart, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadBooks)