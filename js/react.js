'use strict';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handle_click() 
    {
        axios.post('http://localhost:5000/login/', {
            username: 'user',
            password: 'pass'
        }).then((response) => {
            localStorage.setItem("token", response.data.token)
            alert("Logged in!")
        }, (error) => {
            console.log(error);
        });
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
        let token = localStorage.getItem("token")
        if (token !== null) {
            axios.get("http://localhost:5000/api/user/", {
                headers: { 'Authorization': "JWT " + localStorage.getItem("token") }
            }).then((response) => {
                alert("You are : " + response.data.results[0].username + "\n"
                + "Your mail : " + response.data.results[0].email + "\n" + "Is staff member : " + response.data.results[0].is_staff
                + "\n" + "Your user id : " + response.data.results[0].id)
            }).catch((error) => {
                alert("Token Expired, Please login again")
                localStorage.setItem("token", null)
                console.log(error);
            });
        }
        else {
            alert("Please login")
        }
    }
    render() {
        return (
            <button onClick={this.handle_click}>Get Logged in User</button>
        )
    }
}

const get_user = document.querySelector('#get_user');
ReactDOM.render(React.createElement(GetUserButton), get_user);