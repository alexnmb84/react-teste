export default function characters(state = [], action) {

    switch (action.type) {        
        case 'LOAD_CHARACTERS':             
            return action.characters   
        case 'UPDATE_CHARACTER':               
            let lista = [...state];            
            for(let i = 0; i < lista.length; i++) {
                if (lista[i].id == action.character.id) {    
                    lista[i] = action.character;
                }
            }           
            return lista;        
        default:
            return state;
    }

}