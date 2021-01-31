class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Route {this.props.route} is not found</h1>
            </div>    
        )
    }
}

router.register(404, NotFoundPage)