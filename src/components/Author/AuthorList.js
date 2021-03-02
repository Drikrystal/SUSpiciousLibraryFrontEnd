import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

class Author extends React.Component {
    render() {
        return (
            <div className="book-info">
                <Link to={"/author/" + this.props.id}><img src= {this.props.author_image} alt="author"/></Link>
                <span className="title"><Link to={"/author/" + this.props.id}>{this.props.name}</Link></span>
            </div>
        )
    }
}

class LoadAuthors extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {filtered_authors: this.props.authors}
        this.searchAuthor = this.searchAuthor.bind(this)
    }

    searchAuthor(input) {
        this.setState({
            filtered_authors : this.props.authors.filter(author => {
                return author.name.toLowerCase().includes(input.target.value.toLowerCase())
            })
        })
    }

    render(){
        return (
            <div className="content-container">
                <input type="text" name="search" placeholder="Search author..." onChange={this.searchAuthor}/>
                <div className="search-list">
                    {
                        this.state.filtered_authors.map((author, i) =>  {
                           return <Author key={i} {...author} ></Author> 
                        })
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        authors : state.author.authors
    }
}

export default connect(mapStateToProps)(LoadAuthors)