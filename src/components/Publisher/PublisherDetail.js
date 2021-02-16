import React from 'react';
import { withRouter } from "react-router-dom";
import { connect}  from "react-redux";
import { compose } from 'redux';

class PublisherDetail extends React.Component {

    render() {
        return (
          <div className="content-container">
            <div className="book-info">
                <h2>{this.props.detail.name}</h2>
                <h4>{this.props.detail.description ? this.state.props.description : "No Description"}</h4>
            </div>
          </div>
        )
    }
}
const mapStateToProps = (store, ownProps) => {
    return {
        detail : store.publisher.publishers.filter((publisher) => publisher.id.toString() === ownProps.match.params.id)[0]
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps)
)(PublisherDetail);
