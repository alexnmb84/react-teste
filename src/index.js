import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ListCharacters from './components/ListCharacters';
import FormCharacter from './components/FormCharacter';
import PageNotFound from './components/PageNotFound';
import CharacterDetail from './components/CharacterDetail';

import {Provider} from "react-redux";
import store from './store';

import * as load from './loadCharacters';

ReactDOM.render(
    
    <Provider store={store} >

        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/characters" component={ListCharacters} />
                <Route path="/detail/:characterId" component={CharacterDetail} />
                <Route path="/character/:characterId" component={FormCharacter} />        
                <Route path='*' component={PageNotFound} />
            </Switch>
        </BrowserRouter>

    </Provider>
, document.getElementById('root'));
registerServiceWorker();
