import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as charactersActions from '../actions/charactersActions';
import * as load from '../loadCharacters';
import search from '../images/search-icon.png';

class ListCharacters extends Component {

  constructor(props) {
    super(props);
    
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

  openFilter(){
    this.setState({
      characters: this.props.characters,
      showFilter: true
    });
  }

  closeFilter(){
    this.setState({showFilter: false});
  }

  render() {    

    return (
      <div>            
      
        <button onClick={this.openFilter.bind(this)} className="button-one">
          <img src={search} style={{width: "15px", margin: "2px"}} />
          <span>Buscar</span>
        </button>
        <hr />
        {this.state.showFilter &&
          // TODO transforma em componente 
          <div>
            <div className="back-modal"></div>
            <div className="modal-ref" >           
              <button style={{float: "right"}} onClick={this.closeFilter.bind(this)} className="button-one">Fechar</button>
              <h2>Buscar personagem</h2>
              <div className="row">
                <div className="col-25">
                  <label>Nome do personagem</label>  
                </div>
                <div className="col-75">
                  <input type="text" className="search-input" value={this.state.filter} onChange={this.handleFilterChange}  />
                </div>
              </div>  
              <hr />
              <ul className="card-list">
                { this.state.characters.map(character => (
                  <li key={character.id}>
                    <div className="card" style={{width: "110px"}}>
                      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="Avatar" 
                      style={{width:"100%"}} />
                      <div className="container">
                        <p style={{"font-size": "14px"}}>{character.name} </p>                                   
                        <Link to={'/detail/'+ character.id }><button className="button-one">Detalhes</button></Link> 
                        <Link to={'/character/'+ character.id  }><button className="button-one">Editar</button></Link>  
                      </div>
                    </div> 
                  </li>
                )) }
              </ul>
            </div>
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
                  <Link to={'/detail/'+ character.id } ><button className="button-one">Detalhes</button></Link> 
                  <Link to={'/character/'+ character.id } ><button className="button-one">Editar</button></Link>                    
                </div>
              </div> 
            </li>
          )) }
        </ul>        
      </div>

    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  notification: state.notification,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(charactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListCharacters);