import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Notification from './components/Notification';

import ListCharacters from './components/ListCharacters';

class App extends Component {

  constructor(props) {
    super(props);    
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>     
          <ListCharacters />
          {this.props.notification.isShow && <Notification />} 
        </div>    
    );
  }
}

const mapStateToProps = state => ({  
  notification: state.notification,
});

export default connect(mapStateToProps, null)(App);

