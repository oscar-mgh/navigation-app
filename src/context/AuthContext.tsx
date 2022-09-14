import {createContext, useReducer} from 'react';
import {AuthReducer} from './AuthReducer';

export interface AuthState {
	isLoggedIn?: boolean;
	userName?: string;
	favouriteIcon?: string;
}

export const authInitialState: AuthState = {
	isLoggedIn: false,
	userName: undefined,
	favouriteIcon: undefined,
};

export interface AuthContextProps {
	authState: AuthState;
	signIn: () => void;
	logOut: () => void;
	passFavIcon: (iconName: string) => void;
	setUsername: (user: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
	const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

	const signIn = () => {
		dispatch({type: 'signIn'});
	};

	const passFavIcon = (iconName: string) => {
		dispatch({type: 'includeFavIcon', payload: iconName});
	};

	const logOut = () => {
		dispatch({type: 'logout'});
	};

	const setUsername = (user: string) => {
		dispatch({type: 'setUser', payload: user});
	};

	return (
		<AuthContext.Provider
			value={{
				authState,
				logOut,
				passFavIcon,
				signIn,
				setUsername,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
