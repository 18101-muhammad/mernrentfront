import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import AdminPage from './pages/AdminPage';
import CustomerPage from './pages/CustomerPage';
import CustomerHome from './pages/customerHome';

import './App.css';



class App extends Component {
  render() {

  return ( 
    <Router>
        <Switch>
          <Route exact path = "/"  name="register" component={SignUpForm}/>
          <Route path = "/customer" name="customer" component={CustomerPage}/>
          <Route path = "/customer/home" name="customer home" component={CustomerHome}/>
          <Route  path = "/admin" name="admin" component={AdminPage}/>
          <Route path = "/signIn" name="sign in" component={SignInForm}/> 
      </Switch>
    </Router>
  );
}
}

export default App;
