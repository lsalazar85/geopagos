import {  ADD_REQUEST } from '../types';


export const addRequest = (request, push) => {
	if(typeof push !== 'undefined'){
		push("/dashboard");
	}
	return { type: ADD_REQUEST, request: request };	
}