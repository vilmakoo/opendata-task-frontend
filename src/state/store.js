import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './dataReducer';

const reducer = combineReducers({
  data: dataReducer
});


const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;