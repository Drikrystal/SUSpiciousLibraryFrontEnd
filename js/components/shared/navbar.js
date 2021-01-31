class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return (
            <div className="top_nav">
                <button onClick={() => router.change_route('index')}>Index</button>
                <button onClick={() => router.change_route('book')}>Books</button>
            </div>
        )
    }
}

