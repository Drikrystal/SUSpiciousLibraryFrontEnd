class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return (
            <div className="top_nav">
                <div className ="container">
                    <a className="logo" href="#index">Buy<span>Books</span>Here</a>

                    <nav>
                        <ul>
                            <li><a href="#index" onClick={() => router.change_route('index')}>Index</a></li>
                            <li><a href="#book"  onClick={() => router.change_route('book')}>Books</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

/*
    <div class="login-container">
        <form action="none">
            <input type="text" placeholder="Username" name="username">
            <input type="text" placeholder="Password" name="psw">
            <button type="submit">Login</button>
        </form>
    </div>
    */
