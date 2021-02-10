import { API } from "../api.js";
import React from 'react';
import { withRouter } from "react-router-dom";

class BookDetail extends React.Component {

    constructor(props){
        super(props)
        this.state = { detail : '' , error: ''}
    }

    componentDidMount()
    {
        API.instance.get(`${this.props.match.url}`).then((response) => {
            this.setState({
                detail : response.data
            })
        }).catch((error) => {
            this.setState({
                error : error
            })
        }) 
    }

    render() {        
        if (this.state.error) {
            return <div className="error">Error loading book</div>
        }
        return (
            <div className="book_info">
                <img src= {this.state.detail.book_cover} alt="book-cover"/>
                <h2>{this.state.detail.name}</h2>
                <h3>{this.state.detail.author ? this.state.detail.author.name : "No Author"}</h3>
                <h4>${this.state.detail.price}</h4>
                <h4>{this.state.detail.description}</h4>
            </div>
        )
    }
}

export default withRouter(BookDetail);