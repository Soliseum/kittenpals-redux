import {
	CHANGE_SEARCHFIELD,
	REQUEST_KITTENS_PENDING,
	REQUEST_KITTENS_SUCCESS,
	REQUEST_KITTENS_FAILED,
} from './constants';

const initialStateSearch = {
	searchField : '',
};

export const searchKittens = (state = initialStateSearch, action = {}) => {
	// console.log(action.type);
	switch (action.type) {
		case CHANGE_SEARCHFIELD:
			return Object.assign({}, state, { searchField: action.payload });
		// return  { ...state, searchField: action.payload} using object spread operator syntax
		default:
			return state;
	}
};

const initialStateKittens = {
	isPending : false,
	kittens   : [],
	error     : '',
};

export const requestKittens = (state = initialStateKittens, action = {}) => {
	switch (action.type) {
		case REQUEST_KITTENS_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_KITTENS_SUCCESS:
			return Object.assign({}, state, { kittens: action.payload, isPending: false });
		case REQUEST_KITTENS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false });
		default:
			return state;
	}
};
