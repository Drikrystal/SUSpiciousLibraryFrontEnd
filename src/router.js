import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from "./App";
import Home from './components/home'

import LoadBooks from './components/booklist'
import LoadAuthors from './components/authorlist'
import LoadPublishers from './components/publisherlist';

import BookDetail from './components/bookdetail'
import AuthorDetail from './components/authordetail'
import PublisherDetail from './components/publisherdetail';
import { Login } from './components/login';

function Routes() {
  return (
    <Router>
      <App></App>
      <Route path="/" exact component= { Home }></Route>
      <Route path="/books" component= { LoadBooks }></Route>
      <Route path="/authors" component={ LoadAuthors }></Route>      
      <Route path="/publishers" component={ LoadPublishers }></Route>      
      <Route path="/book/:id" component={ BookDetail }></Route>
      <Route path="/author/:id" component={ AuthorDetail }></Route>      
      <Route path="/publisher/:id" component={ PublisherDetail }></Route>
      <Route path="/login" component={ Login }></Route>      
    </Router>
  )
}

export default Routes;
