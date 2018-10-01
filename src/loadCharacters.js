import store from './store';

export function getCharacters() {

   
    fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3a8fbf996490ab19a8606f5aeb164d34&hash=a0a4336d8d167a986ab73610fe74b03c")
    .then(res => res.json())
    .then(
      (result) => {          
        store.dispatch({type: 'LOAD_CHARACTERS', characters: result.data.results});         
      },
      (error) => {
        console.log(error);
        // this.setState({
        //   isLoaded: true,
        //   error
        // });      
      }
    )
    
}