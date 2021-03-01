import React from 'react';
import { connect}  from "react-redux";
import { bindActionCreators } from "redux";
import { AddBookToCart } from "../../store/actions/thunks/cartActions";
import { Link } from "react-router-dom";

class BookItem extends React.Component {
    render() {
        let author_span = <span className="author">Unknown Author</span>
        if (this.props.author) {
            author_span = <span className="author"><Link to={"/author/" + this.props.author.id}>{this.props.author.name}</Link></span>
        }
        return (
            <div className="book-info">
                <Link to={"book/" + this.props.id}><img src= {this.props.book_cover} alt="book-cover"/></Link> 
                <span className="title"><Link to={"book/" + this.props.id}>{this.props.name}</Link></span>
                { author_span }
                <span className="publisher"><Link to={"/publisher/" + this.props.publisher.id}>{this.props.publisher.name}</Link></span>
                <span className="price">${this.props.price}</span>
            </div>
        )
    }
}

class LoadBooks extends React.Component {
    constructor(props){
        super(props)
        this.state = { filtered_books: this.props.books }
        this.searchBook = this.searchBook.bind(this)
    }
    searchBook(input) {
        this.setState({
            filtered_books : this.props.books.filter(book => {
                return book.name.toLowerCase().includes(input.target.value.toLowerCase())
            })
        })
    }
    render(){
        return (
            <div className="content-container">
                <input type="text" name="search" placeholder="Search book..." onChange={this.searchBook}/>
                <div className="search-list">
                    {
                        this.state.filtered_books.map((book, i) =>  { 
                            return <div className="book-info" key={i}>
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
        session : state.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : bindActionCreators(AddBookToCart, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadBooks)

// <span className="publisher"><Link to={"/publisher/" + this.props.publisher.id}>{this.props.publisher.name}</Link></span>
