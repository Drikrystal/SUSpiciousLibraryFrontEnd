class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return (
            <div>
                <h1>Welcome!</h1>
                <button onClick={() => router.change_route('books')}>Go to Books</button>
            </div>
        )
    }
}

router.register("index", Index)
