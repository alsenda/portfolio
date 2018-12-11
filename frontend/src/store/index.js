import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (initialState = {}) => createStore(
  reducers,
  initialState,
  composeEnhancers(
    applyMiddleware(
    ),
  )
);

export default store;