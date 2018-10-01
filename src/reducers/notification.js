export default function notification(state = {}, action) {
     
    switch (action.type) {
      case "SHOW_NOTIFICATION":          
        return action.param;
  
      case "HIDE_NOTIFICATION":
        return action.param;
  
      default:
        return state;
    }
  }