import store from './store';
import { ERROR } from './constants/notificationType';

export function getCharacters() {   
    fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3a8fbf996490ab19a8606f5aeb164d34&hash=a0a4336d8d167a986ab73610fe74b03c")
    .then(res => res.json())
    .then(
      (result) => {          
        store.dispatch({type: 'LOAD_CHARACTERS', characters: result.data.results});         
      },
      (error) => {
        store.dispatch({type: 'SHOW_NOTIFICATION', param: {isShow: true, msn: "Erro ao carregar personagens!", type: ERROR}}); 
      }
    )    
}