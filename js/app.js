class App extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = { current_route : null }
        this.routeListener = this.routeListener.bind(this)
        router.attach(this.routeListener);   
    }

    componentDidMount() 
    {
        // when the app is intially loaded, go to the index page
        router.change_route('index')
    }

    routeListener(route)
    {
        this.setState({
            current_route : route
        })
    }

    render() {
        return (
            <div>
                {
                this.state.current_route 
                ? <this.state.current_route></this.state.current_route>
                : <p>Loading...</p>
                }
            </div>
        )
    }
}

const app = document.querySelector('#app');
ReactDOM.render(React.createElement(App), app);