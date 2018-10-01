import React, { Component } from 'react';
import marvel from './images/marvel-logo.png';
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
            <img src={marvel} className="App-logo" alt="logo" />            
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

