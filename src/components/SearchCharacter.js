import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchCharacter extends Component {

    constructor(props) {
        super(props);       
    }

    //TODO Filter

    render() {
        return (
        <div>        
            <h1 style={{color: "blue"}}>Buscar personagem.</h1>        
        </div>
        );
    }
}

const mapStateToProps = state => ({  
    characters: state.characters,
  });
  
export default connect(mapStateToProps, null)(SearchCharacter);
