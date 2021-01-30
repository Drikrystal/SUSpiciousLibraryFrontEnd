class Router {
    constructor() {
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
    register(route, component)
    {
        this.routes[route] = component
    }

    change_route(route_key) {
        if (route_key != this.current_route){
            if (this.routes[route_key]) {
                this.current_route = this.routes[route_key]
            } else {
                this.current_route = this.routes[404]
            }
            this.notify();
        }
    }
}

// const router, so that the instance of the router is accessible from everywhere,
// and every class/component can change the current route
const router = new Router()