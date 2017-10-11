import { applyMiddleware, createStore } from 'redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './reducers/index';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);
