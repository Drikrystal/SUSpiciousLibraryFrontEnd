import React from 'react';
import { Link } from "react-router-dom";
import { connect}  from "react-redux";

class Publisher extends React.Component {
    render() {
        return (
            <div className="book-info">
                <span className="title"><Link to={"/publisher/" + this.props.id}>{this.props.name}</Link></span>
            </div>
        )
    }
}

export class LoadPublishers extends React.Component {
    constructor(props){
        super(props)
        this.state = { filtered_publishers: this.props.publishers }
        this.searchPublisher = this.searchPublisher.bind(this)
    }
    searchPublisher(input) {
        this.setState({
            filtered_publishers : this.props.publishers.filter(publisher => {
                return publisher.name.toLowerCase().includes(input.target.value.toLowerCase())
            })
        })
    }
    render(){
        return (
            <div className="content-container">
                <input type="text" name="search" placeholder="Search publisher..." onChange={this.searchPublisher}/>
                <div className="search-list">
                { 
                    this.state.filtered_publishers.map((publisher, i) =>  {
                            return <Publisher key={i} {...publisher} ></Publisher> 
                        })
                }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        publishers : state.publisher.publishers,
    }
}

export default connect(mapStateToProps)(LoadPublishers)