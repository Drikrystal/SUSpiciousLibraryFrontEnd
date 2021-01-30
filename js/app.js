class App extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = { routes: routes, current_route : routes.initial_route}
        setTimeout(() => {
            this.setState({
                current_route : routes.books
            });
        }, 2000)
    }

    render() {
        return (
            <div>
                <this.state.current_route></this.state.current_route>
            </div>
        )
    }
}

const app = document.querySelector('#app');
ReactDOM.render(React.createElement(App), app);