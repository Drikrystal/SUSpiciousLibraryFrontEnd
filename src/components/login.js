import React from 'react';
import { API } from '../api';
import { Redirect } from "react-router-dom";

export class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = { redirect : '' }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount()
    {    
        let token = localStorage.getItem('token')
        if (token != null) {
            // if there is a token and token is valid for the user,
            // redirect, else do nothing and let the user login
            API.get_current_user(token).then((response) => {
                this.setState({
                    redirect : "/"
                })
            })
        }
    }

    handleSubmit(event)
    {
        event.preventDefault()
        let username = event.target.username.value
        let password = event.target.password.value
        API.login(username, password).then((response) => {
            localStorage.setItem("token", response.data.token)
            this.setState({
                redirect : "/"
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="content_container">
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