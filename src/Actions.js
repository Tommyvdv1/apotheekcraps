import {
	STATE_HOME,
   	STATE_MIDDEN,
   	STATE_CONTACT,
} from './Constants';

export const Home = () => (dispatch) => {
	dispatch({
		type:STATE_HOME,
	});
}

export const MenuItem = (index) => (dispatch) => {
	dispatch({
		type:STATE_MIDDEN,
		payload:index,
	});
}

export const setState = () => (dispatch) => {
	dispatch({
		type: STATE_CONTACT,
		payload: true,
	});
}
