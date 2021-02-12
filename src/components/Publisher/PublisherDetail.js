import { API } from "../../api.js";
import React from 'react';
import { withRouter } from "react-router-dom";

class PublisherDetail extends React.Component {

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
            return <div className="error">Error Loading Publisher</div>
        }
        return (
            <div className="content-container">
                <div className="book-info">
                    <h2>{this.state.detail.name}</h2>
                    <h4>{this.state.detail.description ? this.state.detail.description : ""}</h4>
                </div>
            </div>
        )
    }
}

export default withRouter(PublisherDetail);