import { Route, BrowserRouter as Router } from 'react-router-dom'
import { CreateBooksFromDB } from './components/book'
import { Home } from './components/home'
import { BookDetail } from './components/bookdetail'
import { Login } from './components/login'
import { ViewCart } from './components/viewcart'
import App from "./App";

function Routes() {
  return (
    <Router>
      <App></App>
      <Route path="/" exact component={Home}></Route>
      <Route path="/books" exact component={CreateBooksFromDB}></Route>
      <Route path="/bookdetail" exact component={BookDetail}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/viewcart" exact component={ViewCart}></Route>
    </Router>
  )
}

export default Routes;
