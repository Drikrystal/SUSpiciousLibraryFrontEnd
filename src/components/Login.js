import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { LoginUser } from "../store/actions/thunks/loginActions";


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = { redirect : '' }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event)
    {
        event.preventDefault()
        let username = event.target.username.value
        let password = event.target.password.value
        this.props.login(username, password)
    }

    render() {
        if (this.props.isLoggedIn) {
            this.props.history.goBack();
            return null
        }
        return (
            <div className="content-container">
                <h1>Customer Login</h1>
                <form onSubmit={this.handleSubmit} method="POST">
                    <input type="text" placeholder="Username" name="username" />
                    <input type="password" placeholder="Password" name="password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => 
{
    return {
        isLoggedIn : state.session.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => 
{
    return {
        login: bindActionCreators(LoginUser, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)