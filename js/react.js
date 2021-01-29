'use strict';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handle_click() 
    {
        API.login("user", "pass")
    }

    render() {
        return (
            <button onClick={this.handle_click}>Login</button>
        )
    }
}

const domContainer = document.querySelector('#login');
ReactDOM.render(React.createElement(LoginButton), domContainer);

class GetUserButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handle_click(){
        user = API.get_current_user()
        alert("You are : " + user.username + "\n"
            + "Your mail : " + user.email + "\n"
            + "Your user id : " + user.id)
    }
    render() {
        return (
            <button onClick={this.handle_click}>Get Logged in User</button>
        )
    }
}

const get_user = document.querySelector('#get_user');
ReactDOM.render(React.createElement(GetUserButton), get_user);