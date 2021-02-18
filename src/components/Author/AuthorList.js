import React from 'react';
import { Link } from "react-router-dom";
import { fetchAuthors } from "../../store/actions/thunks/dataActions.js";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'

class Author extends React.Component {
    render() {
        return (
            <div className="book-info">
                <Link to={"/author/" + this.props.id}><img src= {this.props.author_image}/></Link>
                <span className="title"><Link to={"/author/" + this.props.id}>{this.props.name}</Link></span>
            </div>
        )
    }
}

class LoadAuthors extends React.Component {
    componentDidMount(){
        this.props.loadAuthors()
    }
    render(){
        return (
            <div className="content-container">
                <input type="text" name="search" placeholder="Search author..." onChange={this.searchAuthor}/>
                <div className="search-list">
                    { this.props.isFetching ? <p>Loading Authors...</p>
                    : this.props.authors.map((author, i) =>  {
                           return <Author key={i} {...author} ></Author> 
                        })
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        authors : state.author.authors,
        isFetching : state.author.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAuthors: bindActionCreators(fetchAuthors, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadAuthors)