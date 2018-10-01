import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as charactersActions from '../actions/charactersActions';

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
    this.props.showNotiofication({isShow: true, msn: "Salvo com sucesso!"});
    this.props.history.push(`/`);
  };

  render() {
   
    if (!this.state.id) {
      return <Redirect to='/' />
    }

    return (
      <div>          
        <h1 style={{color: "green"}}>Form do personagem</h1>    
        <h3>{this.props.match.params.characterId}</h3>        
              
        <label>First Name: </label>
        <input type="text" value={this.state.name} onChange={this.handleNameChange}  />
        <br />
        <label>First Descrição: </label>
        <textarea value={this.state.description} onChange={this.handleDescriptionChange}  />
        <br />       
        
        <button onClick={this.onSave}>Salvar</button>
        <Link to={'/' }>Voltar</Link> 
        
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

export default connect(mapStateToProps, mapDispatchToProps)(FormCharacter);
  