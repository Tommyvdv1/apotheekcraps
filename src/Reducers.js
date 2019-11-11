import React from 'react';
import Homepage from './Midden/Homepage/Homepage';
import {
   STATE_MIDDEN,
   STATE_CONTACT,
   STATE_HOME,
} from './Constants';

const initialState = {
	midden: [<Homepage/>],
	contactform: false,
}

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case STATE_HOME:
		return {
			...state,
			midden: [<Homepage/>],
			contactform: false,
		}
		case STATE_MIDDEN:
		return {
			...state,
			midden: [action.payload]
		}
		case STATE_CONTACT:
		return {
			...state,
			contactform: action.payload
		}
		default:
		return state;
	}

}