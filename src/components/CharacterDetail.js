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
        <h1 style={{color: "pink"}}>Detalhes do personagem</h1>      
        <h3>{this.state.name}</h3>   
        <ul>
          { this.state.series.items.map(serie => (
            <li key={serie.resourceURI}>
              {serie.name}              
              {/* <img src={`${todo.thumbnail.path}.${todo.thumbnail.extension}`} />              */}
            </li>
          )) }
        </ul>
        <Link to={'/' }>Voltar</Link> 
      </div>
    );
  }
} 

const mapStateToProps = state => ({  
  characters: state.characters,
});

export default connect(mapStateToProps, null)(CharacterDetail);

/*
https://github.com/alexnmb84/react-teste.git

…or create a new repository on the command line
echo "# react-teste" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/alexnmb84/react-teste.git
git push -u origin master

git remote set-url origin git@github.com:alexnmb84/react-teste.git

…or push an existing repository from the command line
git remote add origin https://github.com/alexnmb84/react-teste.git
git push -u origin 

…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
*/