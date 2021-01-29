/*            <div class="book_info">
                <h1>Id : {this.props.id}</h1>
                <h3>Book Name : {this.props.name}</h3>
                <img src= {this.props.book_cover} />
                <h4>Description: {this.props.description}</h4>
                <h5>ISBN : {this.props.ISBN} </h5>
                <h5>Price : {this.props.price} $</h5>
                <h5>Page Count : {this.props.pages}</h5>
                <h5>Author : {this.state.author_name} </h5>
            </div>
            */

class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="book_info">
                <img src= {this.props.book_cover} />
                <h2>{this.props.name}</h2>
                <h3>{this.props.author.name}</h3>
                <h4>${this.props.price}</h4>
                <button type="button">Add to Cart</button>
            </div>
        )
    }
}

class CreateBooksFromDB extends React.Component {
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
            <div className="search_list">
                <input type="text" name="search" placeholder="Search book..." onChange={this.searchBook}/>
                {
                this.state.loading 
                ? <p>Loading Books...</p> 
                : <> {this.state.filtered_books} </>
                }
            </div>
        )
    }
}

const book_list = document.querySelector('#book_list');
ReactDOM.render(React.createElement(CreateBooksFromDB), book_list);