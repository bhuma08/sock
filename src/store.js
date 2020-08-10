import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import SockReducer from './reducer/SockReducer'

const store = createStore(SockReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;