import { combineReducers } from 'redux';
import worksReducer from './works';
// import authReducer from 'store/reducers/auth';

export default combineReducers({
  works: worksReducer,
  // auth: authReducer,
});