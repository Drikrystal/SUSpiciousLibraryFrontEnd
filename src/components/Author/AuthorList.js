import { API } from "../../api.js";
import React from 'react';
import { Link } from "react-router-dom";

class Author extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="book_info">
                <Link to={"/author/" + this.props.id}><img src= {this.props.author_image}/></Link>
                <span className="title"><Link to={"/author/" + this.props.id}>{this.props.name}</Link></span>
            </div>
        )
    }
}

export default class LoadAuthors extends React.Component {
    constructor(props){
        super(props)
        this.state = { loading: true, authors : [], filtered_authors: [] }
        // bind "this" so the function will have a reference to this component and its state
        this.searchAuthor = this.searchAuthor.bind(this)
    }

    componentDidMount() {
        API.instance.get("author").then((response) => {
            response.data.results.forEach((author) => {
                let e = <Author key={author.id} {...author} ></Author>
                this.setState({
                    authors: [...this.state.authors, e], 
                    filtered_authors : [...this.state.authors, e]
                })
            })
            this.setState({
                loading : false
            })
        });
    }

    searchAuthor(input) {
        this.setState({
            filtered_authors : this.state.authors.filter(author => {
                return author.props.name.toLowerCase().includes(input.target.value.toLowerCase())
            })
        })
    }

    render(){
        return (
            <div className="content_container">
                <input type="text" name="search" placeholder="Search author..." onChange={this.searchAuthor}/>
                <div className="search_list">
                    {
                    this.state.loading 
                    ? <p>Loading Authors...</p> 
                    : <> {this.state.filtered_authors} </>
                    }
                </div>
            </div>
        )
    }
}
