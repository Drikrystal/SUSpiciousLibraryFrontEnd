// why dis work but doesn't work in code thi

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"author_name" : ""}
    }

    componentDidMount()
    {
        axios.get("http://localhost:5000/api/author/" + this.props.author + "/").then((response) => {
            this.setState({
                "author_name" : response.data.name
            })
        }).catch((error) => {
            this.setState({
                "author_name" : "Error"
            })
            console.log(error)
        })
                
    }
    render() {
        return (
            <div class="book_info">
                <img src= {this.props.book_cover} />
                <h2>{this.props.name}</h2>
                <h3>{this.state.author_name} </h3>
                <h4>${this.props.price}</h4>
                <button type="button">Add to Cart</button>
            </div>
        )
    }
}

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

class CreateBooksFromDB extends React.Component {
    constructor(props){
        super(props)
        this.state = { books : [] }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/api/book/?author=13").then((response) => {
            response.data.results.forEach((book) => {
                let e = <Book key={book.id} {...book} ></Book>
                this.setState({
                    books: [...this.state.books, e]
                })
            })
        });
    }

    render(){
        return (  
            <>
            {this.state.books}
            </>
        )
    }
}

const book_list = document.querySelector('#book_list');
ReactDOM.render(React.createElement(CreateBooksFromDB), book_list);