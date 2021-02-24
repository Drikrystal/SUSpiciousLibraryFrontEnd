import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RegisterUser } from "../store/actions/thunks/registerActions";


class Register extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event)
    {
        event.preventDefault()
        let user = {
            "username" : event.target.username.value,
            "email" : event.target.email.value,
            "password" : event.target.password.value,
        }
        this.props.register(user)
    }

    render() {
        if (this.props.isLoggedIn) {
            this.props.history.goBack();
            return null
        }
        // check if there are any errors
        let usernameError = null
        let passwordError = null
        let emailError = null

        if (this.props.registerError.username) {
            usernameError = this.props.registerError.username.map((err) => {
                return <span className="error">{err}</span>
            })
        }

        if (this.props.registerError.email) {
            emailError = this.props.registerError.email.map((err) => {
                return <span className="error">{err}</span>
            })
        }

        if (this.props.registerError.password) {
            passwordError = this.props.registerError.password.map((err) => {
                return <span className="error">{err}</span>
            })
        }
        

        return (
            <div className="content-container">
                <h1>Customer Register</h1>
                <form onSubmit={this.handleSubmit} method="POST">
                    <input type="text" placeholder="Username" name="username" />
                    {usernameError}
                    <span>Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.</span>
                    <input type="password" placeholder="Password" name="password" />
                    {passwordError}
                    <input type="email" placeholder="E-Mail" name="email" />
                    {emailError}
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => 
{
    return {
        isLoggedIn : state.session.isLoggedIn,
        registerError : state.session.registerError
    }
}

const mapDispatchToProps = (dispatch) => 
{
    return {
        register: bindActionCreators(RegisterUser, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)