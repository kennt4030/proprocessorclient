import React, { Component } from 'react';
import Auth from './auth/Auth';
import Splash from './home/Splash';
import SiteBar from './home/Navbar';
import { routes } from './site/_routes';
import './App.css';
import Sidebar from './site/Sidebar';
import Press from './components/Press';
import Tool from './components/Tool';
import Plate from './components/Plate';
import Natural from './components/Natural';
import Colorant from './components/Colorant';
import Additive from './components/Additive';
import SetupSheet from './components/SetupSheet';
// import logo from './../logo.svg';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import { Link } from 'react-router-dom'


class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }

    // this is just reassigning variables
    this.setSessionState = this.setSessionState.bind(this);
    this.protectedViews = this.protectedViews.bind(this);
    this.logout = this.logout.bind(this);
  }

  setSessionState(token) {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });

  }

  componentWillMount() {
    const token = localStorage.getItem('token')

    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  logout(){
    this.setState({ sessionToken: '' });
    localStorage.removeItem('token');
  }

  protectedViews() {

    if (this.state.sessionToken === localStorage.getItem('token') && this.state.sessionToken !=="undefined") {
      return (
        
        <Switch>
        <Route path='/' exact={true}>
          <Splash sessionToken={this.state.sessionToken} />
        </Route>
        <Route path="/Press" exact={true}>
          <Press sessionToken={this.state.sessionToken} />
        </Route>
        <Route path="/Tool" exact={true}>
          <Tool sessionToken={this.state.sessionToken} />
        </Route>
        <Route path="/Plate" exact={true}>
          <Plate sessionToken={this.state.sessionToken} />
        </Route>
        <Route path="/Natural" exact={true}>
          <Natural sessionToken={this.state.sessionToken} />
        </Route>
        <Route path="/Colorant" exact={true}>
          <Colorant sessionToken={this.state.sessionToken} />
        </Route>
        <Route path="/Additive" exact={true}>
          <Additive sessionToken={this.state.sessionToken} />
        </Route>
        <Route path="/SetupSheet" exact={true}>
          <SetupSheet sessionToken={this.state.sessionToken} />
        </Route>
          {routes.map((route, index) =>(
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
            />
        ))}
        </Switch>
      )
    } else {
      return (
        <Route path="/auth" exact={true} >
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="file:///C:/Users/kenny/Downloads/proprocessinglogo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Pro Processor</h1>
        </header>
        <p className="App-intro">
          Injection Molding Data Management.
        </p>
        
        <Router>
          <div>
          <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/Press">Press</Link></li>
                <li><Link to="/Tool">Tool</Link></li>
                <li><Link to="/Plate">Plate</Link></li>
                <li><Link to="/Natural">Natural</Link></li>
                <li><Link to="/Colorant">Colorant</Link></li>
                <li><Link to="/Additive">Additive</Link></li>
                <li><Link to="/SetupSheet">Setup Sheet</Link></li>
            </ul>
            <SiteBar clickLogout={this.logout}/>

        </div>
    <div className="sidebar-route"></div>
    </div>
          {/* <Sidebar /> */}
          {this.protectedViews()}
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
