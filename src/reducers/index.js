import {combineReducers} from 'redux';

import characters from './characters';
import notification from './notification';

export default combineReducers({
    //list reducers...
    characters,
    notification
});