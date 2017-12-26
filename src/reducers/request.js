import {APROVE_REQUEST , ADD_REQUEST, REJECT_REQUEST } from '../types';

const initialState = { list: [] };

export default function (state = initialState, action) {
  if (action.type === ADD_REQUEST) {
    return { list: state.list.concat(action.request)};
  }

  if (action.type === APROVE_REQUEST) {
  	return {list: state.list.filter(el => action.request.cuit !== el.cuit)};
  }

  if (action.type === REJECT_REQUEST) {
  	return {list: state.list.filter(el => action.request.cuit !== el.cuit)};
  }

  return state;
}
