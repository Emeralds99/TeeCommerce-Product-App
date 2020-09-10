import React from "react";
import "./App.css";
import Products from "./components/Products";
import Homepage from './components/Homepage.component'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Users from "./components/Users";
import Information from './components/information.component'
import Download from "./components/Download.csv";
 
function App() {
  return (
    <Router>
      <div >
        
        <ul className='d-flex flex-column flex-md-row  justify-content-left'>
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
            <Link to='/tickets'>Info</Link>
          </li>
          <Download/>
        </ul>
      </div>
      


      <Switch>
        <Route exact path='/' >
          <Homepage/>
        </Route>
        <Route path='/products'>
        <Products/>
        </Route>
        <Route path='/users'>
          <Users/>
        </Route>
        <Route path='/tickets'>
          <Information/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
