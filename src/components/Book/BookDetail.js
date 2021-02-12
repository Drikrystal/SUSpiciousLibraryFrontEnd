import { API } from "../../api.js";
import React from 'react';
import { withRouter } from "react-router-dom";

export class BookDetail extends React.Component {

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
            <div className="content-container">
                <div className="book-detail">
                    <img src= {this.state.detail.book_cover} />
                    <h2>{this.state.detail.name}</h2>
                    <h3>{this.state.detail.author ? this.state.detail.author.name : "No Author"}</h3>
                    <h4>${this.state.detail.price}</h4>
                    <h4>{this.state.detail.description}</h4>
                </div>
            </div>
        )
    }
}

export default withRouter(BookDetail);