import React from "react";
import "./App.css";
import Products from "./components/Products";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Users from "./components/Users";
 
function App() {
  return (
    <Router>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm" >
        
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item nav-link'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-item nav-link'>
            <Link to='/products'>Products</Link>
          </li>
          <li className='nav-item nav-link'>
            <Link to='/users'>Users</Link>
          </li>
          <li className='nav-item nav-link'>
            <Link to='/info'>Information</Link>
          </li>
        </ul>
      </div>
      <hr/>


      <Switch>
        <Route exact path='/' >
        </Route>
        <Route path='/products'>
        <Products/>
        </Route>
        <Route path='/users'>
          <Users/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
