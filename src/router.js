import { Route, BrowserRouter as Router } from 'react-router-dom'
import { CreateBooksFromDB } from './components/book'
import { Home } from './components/home'
import App from "./App";

function Routes() {
  return (
    <Router>
      <App></App>
      <Route path="/" exact component={Home}></Route>
      <Route path="/books" exact component={CreateBooksFromDB}></Route>
    </Router>
  )
}

export default Routes;
