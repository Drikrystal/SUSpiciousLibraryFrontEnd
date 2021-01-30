class App extends React.Component 
{
    render() {
        return (
            <div>
                <CreateBooksFromDB></CreateBooksFromDB>
            </div>
        )
    }
}

const app = document.querySelector('#app');
ReactDOM.render(React.createElement(App), app);