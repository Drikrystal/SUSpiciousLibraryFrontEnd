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
        // when the app is intially loaded, go to the hashed page,
        // otherwise go to the index
        if (window.location.hash){
            router.change_route(window.location.hash.replace("#", ""))
        } else{
            router.change_route('index')
        }
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
                <Navbar></Navbar>
                {
                this.state.current_route 
                ? <this.state.current_route.component {...this.state.current_route.props}/>
                : <p>Loading...</p>
                }
            </div>
        )
    }
}

const app = document.querySelector('#app');
ReactDOM.render(React.createElement(App), app);

window.onhashchange = ((e) => {
    router.change_route(e.newURL.split("#")[1])
});
