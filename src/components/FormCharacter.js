import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as charactersActions from '../actions/charactersActions';
import { SUCCESS } from '../constants/notificationType';

class FormCharacter extends Component {

  constructor(props) {
    super(props);    
    this.state = this.findCharacterSelected(this.props.match.params.characterId);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);    
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

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }
  
  onSave = ()  => {
    this.props.updateCharacter(this.state);
    this.props.showNotiofication({isShow: true, msn: "Salvo com sucesso!", type: SUCCESS});
    this.props.history.push(`/`);
  };

  render() {
   
    if (!this.state.id) {
      return <Redirect to='/' />
    }

    return (
      <div>                    

        <div className="container-form">
          <h2>Personagem</h2>
          <div className="row">
            <div className="col-25">
              <img src={`${this.state.thumbnail.path}.${this.state.thumbnail.extension}`} alt="Avatar" 
                style={{width:"100%"}} />
            </div>
            <div className="col-75">          
              <label>Nome do personagem</label>           
              <input type="text" value={this.state.name} onChange={this.handleNameChange}  />
              <label>Descrição</label>
              <textarea placeholder="Escreva uma descrição.." style={{height: "200px"}} value={this.state.description} onChange={this.handleDescriptionChange}  />
            </div>
          </div>         
          <div style={{textAlign: "right"}}>
            <Link to={'/' }><button className="button-one">voltar</button></Link> 
             <button onClick={this.onSave} className="button-one">Salvar</button>
          </div>
        </div>
        
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

export default connect(mapStateToProps, mapDispatchToProps)(FormCharacter);
  