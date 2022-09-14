import {AuthState} from './AuthContext';

type AuthAction =
	| {type: 'signIn'}
	| {type: 'includeFavIcon'; payload: string}
	| {type: 'setUser'; payload: string}
	| {type: 'logout'};

export const AuthReducer = (
	state: AuthState,
	action: AuthAction
): AuthState => {
	switch (action.type) {
		case 'signIn':
			return {
				...state,
				isLoggedIn: true,
				userName: 'no-username-yet',
			};
		case 'includeFavIcon':
			return {
				...state,
				favouriteIcon: action.payload,
			};
		case 'logout':
			return {
				...state,
				isLoggedIn: false,
				userName: undefined,
				favouriteIcon: undefined,
			};
		case 'setUser':
			return {
				...state,
				userName: action.payload,
			};

		default:
			return state;
	}
};
