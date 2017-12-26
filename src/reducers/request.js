import { INCREMENT, DECREMENT, ADD_REQUEST } from '../types';

const initialState = { list: [] };

export default function (state = initialState, action) {
  if (action.type === ADD_REQUEST) {
    return { list: state.list.concat(action.request)};
  }

  return state;
}
