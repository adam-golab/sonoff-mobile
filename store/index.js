import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

import initialState from './initialState';
import reducer from './reducer';

export default createStore(reducer, initialState, devToolsEnhancer());
