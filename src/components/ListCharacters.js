import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as charactersActions from '../actions/charactersActions';
import * as load from '../loadCharacters';

class ListCharacters extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      characters: [],
      filter: '',
      isHidden: true,
      showFilter: false,
    }
    
    if(this.props.characters.length == 0){
      load.getCharacters();       
    }

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }  
  
  handleFilterChange(event) {    
    this.setState({filter: event.target.value});     
    let PATTERN = new RegExp(event.target.value);
    function doFilter(str) {
      return PATTERN.test(str.name);
    }  
    let lista = this.props.characters.filter(doFilter);     
    this.setState({      
      characters: lista,
      showFilter: true
    });    
  }

  closeFilter(){
    this.setState({showFilter: false});
  }

  render() {    

    return (
      <div>        
        <h1 style={{color: "red"}}>Falta: Detalhes, msn feedback save, github, testes auto</h1>
        <h3 style={{color: "blue"}}>Lista de personagens</h3>
        
        <label>Buscar: </label>
        <input type="text" value={this.state.filter} onChange={this.handleFilterChange}  />

      {this.state.showFilter &&  
        <div style={{background: "#ccc", position: "absolute"}}>           
          <button style={{float: "right"}} onClick={this.closeFilter.bind(this)}>Fechar</button>
          <ul className="card-list">
            { this.state.characters.map(character => (
              <li key={character.id}>
                <div className="card" style={{width: "110px"}}>
                  <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="Avatar" 
                  style={{width:"100%"}} />
                  <div className="container">
                    <p style={{"font-size": "14px"}}>{character.name} </p>                                   
                    <Link to={'/detail/'+ character.id }>Detalhes</Link> - 
                    <Link to={'/character/'+ character.id  }>Editar</Link>                    
                  </div>
                </div> 
              </li>
            )) }
          </ul>
        </div>
      }
        <ul className="card-list">
          { this.props.characters.map(character => (
            <li key={character.id}>
              <div className="card">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="Avatar" 
                style={{width:"100%"}} />
                <div className="container">
                  <h4><b>{character.name} </b></h4> 
                  <p>{character.description} </p>                   
                  <Link to={'/detail/'+ character.id }>Detalhes</Link> - 
                  <Link to={'/character/'+ character.id  }>Editar</Link>                    
                </div>
              </div> 
            </li>
          )) }
        </ul>        
      </div>

    );
  }
}

//variavel que será ouvida pelo componente
const mapStateToProps = state => ({
  characters: state.characters,
  notification: state.notification,
});

//repassa as actions para ser acessado na this.prop
const mapDispatchToProps = dispatch =>
  bindActionCreators(charactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListCharacters);