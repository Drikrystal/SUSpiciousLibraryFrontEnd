class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return (
            <div>
                <h1>Welcome!</h1>
            </div>
        )
    }
}

router.register("index", Index)
