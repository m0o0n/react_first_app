import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { newValues } from './redux/state'
import {subscribe} from './redux/state'

let renderEntireTree =(state)=>{
    ReactDOM.render(
        <React.StrictMode>
          <App state ={state} dispatch={store.dispatch.bind(store)}/>
          
        </React.StrictMode>,
        document.getElementById('root')
      );
}
renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

reportWebVitals();
