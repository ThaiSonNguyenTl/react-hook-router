import React, { Component } from 'react';
import SideBar from './components/SideBar'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ContactPage from './pages/ContactPage';
class App extends Component {
  
  render() {
    return (
    
        <BrowserRouter>
          <SideBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/service" component={ServicePage} />
            <Route exact path="/signIn" component={SignInPage} />
            <Route exact path="/signUp" component={SignUpPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </BrowserRouter>
    
    );
  }
  
}
export default App;

