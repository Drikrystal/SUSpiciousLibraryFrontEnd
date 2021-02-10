import React from 'react';

export class Login extends React.Component {
    render() {
        return (
            <div className="content-container">
                <h1>Customer Login</h1>
                <form action="none">
                    <input type="text" placeholder="Username" name="username" />
                    <input type="password" placeholder="Password" name="psw" />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}