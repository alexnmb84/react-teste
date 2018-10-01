import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

class CharacterDetail extends Component {

  constructor(props) {
    super(props);    
    this.state = this.findCharacterSelected(this.props.match.params.characterId);        
  }

  findCharacterSelected(id) {    
    let selected = {};    
    this.props.characters.forEach(character => {
      if (character.id == id) {    
        selected = character;
      }
    });
    return selected;
  }

  render() {

    if (!this.state.id) {
      return <Redirect to='/' />
    }

    return (
      <div>      
        <div className="container-form">
          <h2>Detalhes do personagem</h2>
          <div className="row">
            <div className="col-25">
              <img src={`${this.state.thumbnail.path}.${this.state.thumbnail.extension}`} alt="Avatar" 
                style={{width:"100%"}} />
                <h3>{this.state.name}</h3> 
            </div>
            <div className="col-75">  
              <h3>Séries</h3>
              <ul>
                { this.state.series.items.map(serie => (
                  <li key={serie.resourceURI}>
                    {serie.name}              
                  </li>
                )) }
              </ul>
            </div>
          </div>         
          <div style={{textAlign: "right"}}>
            <Link to={'/' }><button className="button-one">Voltar</button></Link>             
          </div>
        </div>
      </div>
    );
  }
} 

const mapStateToProps = state => ({  
  characters: state.characters,
});

export default connect(mapStateToProps, null)(CharacterDetail);

