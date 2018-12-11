import axios from 'axios';
import { FETCH_WORKS } from './types';

// export function changeAuth(isLoggedIn) {
//   return {
//     type: CHANGE_AUTH,
//     payload: isLoggedIn,
//   }
// }

export function fetchWorks() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_WORKS,
    payload: response,
  }
}