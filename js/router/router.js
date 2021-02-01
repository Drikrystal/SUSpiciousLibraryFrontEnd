class Router {
    constructor() {
        // get the location hash and set the url to it
        // observers for route changes
        this.observers = []
        this.routes = {}
        this.current_route = null
    }

    // observer design
    attach(func) {
        this.observers.push(func);
    }

    detach(func) {
        this.observers = this.observers.filter(fnc => fnc !== func)
    }

    notify(){
        this.observers.forEach(observer => {
            observer(this.current_route) 
        });
    }
    // observer design end

    // routes to register to current router class
    register(route, component, props={})
    {
        this.routes[route] = {
            'component' : component,
            'props' : props
        }
    }

    change_route(route_key, props={}) {
        if (this.routes[route_key]){
            if (this.routes[route_key] != this.current_route) {
                this.current_route = this.routes[route_key]
                if (props){
                    this.current_route.props = props
                }
                window.location.hash = route_key
            }
        } else {
            this.routes[404] = {
                'component' : this.routes[404].component,
                'props' : {
                    'route' : route_key
                }
            } 
            this.current_route = this.routes[404]
        }
        this.notify();
    }
}

// const router, so that the instance of the router is accessible from everywhere,
// and every class/component can change the current route
const router = new Router()
