import { API } from "../../api.js";
import React from 'react';
import { Link } from "react-router-dom";

class Publisher extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="book-info">
                <span className="title"><Link to={"/publisher/" + this.props.id}>{this.props.name}</Link></span>
            </div>
        )
    }
}

export default class LoadPublishers extends React.Component {
    constructor(props){
        super(props)
        this.state = { loading: true, publishers : [], filtered_publishers: [] }
        // bind "this" so the function will have a reference to this component and its state
        this.searchPublisher = this.searchPublisher.bind(this)
    }

    componentDidMount() {
        API.instance.get("publisher").then((response) => {
            response.data.results.forEach((publisher) => {
                let e = <Publisher key={publisher.id} {...publisher} ></Publisher>
                this.setState({
                    publishers: [...this.state.publishers, e], 
                    filtered_publishers : [...this.state.publishers, e]
                })
            })
            this.setState({
                loading : false
            })
        });
    }

    searchPublisher(input) {
        this.setState({
            filtered_publishers : this.state.publishers.filter(publisher => {
                return publisher.props.name.toLowerCase().includes(input.target.value.toLowerCase())
            })
        })
    }

    render(){
        return (
            <div className="content-container">
                <input type="text" name="search" placeholder="Search publisher..." onChange={this.searchPublisher}/>
                <div className="search-list">
                    {
                    this.state.loading 
                    ? <p>Loading Publishers...</p> 
                    : <> {this.state.filtered_publishers} </>
                    }
                </div>
            </div>
        )
    }
}
