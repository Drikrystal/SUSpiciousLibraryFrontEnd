import { Route, BrowserRouter as Router } from 'react-router-dom'
import CreateBooksFromDB from './components/book'
import BookDetail from './components/book_detail'
import Home from './components/home'
import App from "./App";

function Routes() {
  return (
    <Router>
      <App></App>
      <Route path="/" exact component={Home}></Route>
      <Route path="/book" exact component={CreateBooksFromDB}></Route>
      <Route path="/book/:id" component={ BookDetail }></Route>
    </Router>
  )
}

export default Routes;
