import {  ADD_REQUEST, APROVE_REQUEST, REJECT_REQUEST } from '../types';


export const addRequest = (request, push) => {
	if(typeof push !== 'undefined'){
		push("/dashboard");
	}
	return { type: ADD_REQUEST, request: request };	
}

export const approveRequest = (request) => ({type: APROVE_REQUEST, request: request });
export const rejectRequest = (request) => ({type: REJECT_REQUEST, request: request });