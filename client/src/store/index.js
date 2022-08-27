import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'react-thunk';
import rootReducer from './reducer';


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))