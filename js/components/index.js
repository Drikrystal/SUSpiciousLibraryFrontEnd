class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return (
            <div className="content_container">
                <h1>Welcome!</h1>
            </div>
        )
    }
}

router.register("index", Index)
