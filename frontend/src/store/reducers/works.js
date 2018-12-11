import { FETCH_WORKS } from '../actions/types';
const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_WORKS:
      const works = action.payload.data.map(work => work.name);
      return [
        ...state,
        ...works,
      ];
    default: return state;
  }
}