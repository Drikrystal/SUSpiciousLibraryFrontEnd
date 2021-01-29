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
        API.get_current_user().then((response) => {
            alert("You are : " + response.data[0].username + "\n"
            + "Your mail : " + response.data[0].email + "\n"
            + "Your user id : " + response.data[0].id)
        })
    }
    render() {
        return (
            <button onClick={this.handle_click}>Get Logged in User</button>
        )
    }
}

const get_user = document.querySelector('#get_user');
ReactDOM.render(React.createElement(GetUserButton), get_user);