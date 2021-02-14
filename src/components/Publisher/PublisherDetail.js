import React from 'react';
import { withRouter } from "react-router-dom";
import { connect}  from "react-redux";
import { compose } from 'redux';

class PublisherDetail extends React.Component {

    render() {
        return (
            <div className="book_info">
                <h2>{this.props.detail.name}</h2>
                <h4>{this.props.detail.description ? this.state.props.description : ""}</h4>
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
