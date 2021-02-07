import { API } from "../api.js";
import React from 'react';
import { withRouter } from "react-router-dom";

class BookDetail extends React.Component {

    constructor(props){
        super(props)
        this.state = { detail : '' }
    }
    
    componentDidMount()
    {
        API.instance.get(`${this.props.match.url}`).then((response) => {
            this.setState({
                detail : response.data
            })
        }).catch((error) => {
            console.log("Error loading book", error)
        }) 
    }

    render() {        
        return (
            <div className="book_info">
                <img src= {this.state.detail.book_cover} />
                <h2>{this.state.detail.name}</h2>
                <h3>{this.state.detail.author ? this.state.detail.author.name : "No Author"}</h3>
                <h4>${this.state.detail.price}</h4>
                <button type="button">Add to Cart</button>
            </div>
        )
    }
}

export default withRouter(BookDetail);
