import { API } from "../../api.js";
import React from 'react';
import { Link } from "react-router-dom";

export class Book extends React.Component {
    constructor(props) {
        super(props);
        // author returned from the server might be deleted, (i.e. author attribute will be null), 
        // need null check it before setting it
        if (this.props.author !== null){
            this.author_name = this.props.author.name
        } else{
            this.author_name = "No Author"
        }
    }

    render() {
        let author_span = <span className="author">Unknown Author</span>
        if (this.props.author) {
            author_span = <span className="author"><Link to={"/author/" + this.props.author.id}>{this.props.author.name}</Link></span>
        }
        return (
            <div className="book-info">
                <Link to={"/book/" + this.props.id}><img src= {this.props.book_cover}/></Link>
                <span className="title"><Link to={"/book/" + this.props.id}>{this.props.name}</Link></span>
                { author_span }
                <span className="price">${this.props.price}</span>
                <button type="button">Add to Cart</button>
            </div>
        )
    }
}

export default class LoadBooks extends React.Component {
    constructor(props){
        super(props)
        this.state = { loading: true, books : [], filtered_books: [] }
        // bind "this" so the function will have a reference to this component and its state
        this.searchBook = this.searchBook.bind(this)
    }

    componentDidMount() {
        API.instance.get("book").then((response) => {
            response.data.results.forEach((book) => {
                let e = <Book key={book.id} {...book} ></Book>
                this.setState({
                    books: [...this.state.books, e], 
                    filtered_books : [...this.state.books, e]
                })
            })
            this.setState({
                loading : false
            })
        });
    }

    searchBook(input) {
        this.setState({
            filtered_books : this.state.books.filter(book => {
                return book.props.name.toLowerCase().includes(input.target.value.toLowerCase())
            })
        })
    }

    render(){
        return (
            <div className="content-container">
                <input type="text" name="search" placeholder="Search book..." onChange={this.searchBook}/>
                <div className="search-list">
                    {
                    this.state.loading 
                    ? <p>Loading Books...</p> 
                    : <> {this.state.filtered_books} </>
                    }
                </div>
            </div>
        )
    }
}

// <span className="publisher"><Link to={"/publisher/" + this.props.publisher.id}>{this.props.publisher.name}</Link></span>