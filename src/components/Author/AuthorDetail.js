import { API } from "../../api.js";
import React from 'react';
import { withRouter } from "react-router-dom";

class AuthorDetail extends React.Component {

    constructor(props){
        super(props)
        this.state = { detail : '' , error : '' }
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
            return <div className="error">Error Loading Author</div>
        }
        return (
            <div className="author_info">
                <img src= {this.state.detail.author_image} alt="author-image"/>
                <h2>{this.state.detail.name}</h2>
                <h4>{this.state.detail.about}</h4>
                <h4>Birth Date : {this.state.detail.birth_date ? this.state.detail.birth_date : "Unknown" }</h4>
                <h4>Death Date : {this.state.detail.death_date ? this.state.detail.death_date : "Unknown" }</h4>
            </div>
        )
    }
}

export default withRouter(AuthorDetail);