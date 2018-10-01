import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as charactersActions from '../actions/charactersActions';
import { SUCCESS } from '../constants/notificationType';

class Notification extends Component {

constructor(props) {
    super(props);         
}

onClose = ()  => {    
    this.props.showNotiofication({isShow: false});    
};

render() {
    return (
      <div onClick={this.onClose} style={{background: SUCCESS, position: "fixed", bottom: "0", right: "0", margin: "20px", padding: "20px"}}>       
        <h3 style={{color: "#fff"}}> {this.props.notification.msn} </h3>        
      </div>
    );
  }
}

const mapStateToProps = state => ({   
    notification: state.notification,
});
  
const mapDispatchToProps = dispatch =>
    bindActionCreators(charactersActions, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
