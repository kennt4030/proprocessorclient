import React, { Component } from 'react';
import Auth from './auth/Auth';
import SiteBar from './home/Navbar';
import Splash from './home/Splash';

import './App.css';
import Sidebar from './site/Sidebar'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

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

    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <route path='/' exact={true}>
          <Splash sessionToken={this.state.sessionToken} />
        </route>
      )
    } else {
      return (
        <route path="/auth" exact={true} >
          <Auth setToken={this.setSessionState} />
        </route>
      )
    }

  }

  render() {
    return (
      <Router>
        <div>
          <SiteBar clickLogout={this.logout}/>
          {this.protectedViews()}
        </div>
      </Router>

    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src="./assets/pro-logo.png" className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Pro Processor</h1>
        </header>
        <p className="App-intro">
          Injection Molding Data Management.
        </p>
        <Router>
          <Sidebar />
        </Router>
      </div>
    );
  }
}


export default App;
