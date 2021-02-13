import React from 'react';
import { Link } from "react-router-dom";
import { fetchPublishers } from "../../store/actions/thunks/dataActions.js";
import { connect}  from "react-redux";
import { bindActionCreators } from "redux";

class Publisher extends React.Component {
    render() {
        return (
            <div className="book_info">
                <span className="title"><Link to={"/publisher/" + this.props.id}>{this.props.name}</Link></span>
            </div>
        )
    }
}

export class LoadPublishers extends React.Component {
    componentDidMount() {
        this.props.loadPublishers()
    }
    render(){
        return (
            <div className="content_container">
                <input type="text" name="search" placeholder="Search publisher..." onChange={this.searchPublisher}/>
                <div className="search_list">
                { this.props.isFetching ? <p>Loading Publishers...</p>
                    : this.props.publishers.map((publisher, i) =>  {
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
        isFetching : state.publisher.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPublishers: bindActionCreators(fetchPublishers, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadPublishers)