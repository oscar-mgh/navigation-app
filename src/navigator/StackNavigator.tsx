import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PersonScreen, Page1Screen, Page2Screen, Page3Screen} from '../screens';

export type RootStackParams = {
	Page1Screen: undefined;
	Page2Screen: undefined;
	Page3Screen: undefined;
	PersonScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				cardStyle: {backgroundColor: 'white'},
				headerStyle: {
					elevation: 0,
				},
			}}
		>
			<Stack.Screen
				name='Page1Screen'
				component={Page1Screen}
				options={{title: 'Page 1'}}
			/>
			<Stack.Screen
				name='Page2Screen'
				component={Page2Screen}
				options={{title: 'Page 2'}}
			/>
			<Stack.Screen
				name='Page3Screen'
				component={Page3Screen}
				options={{title: 'Page 3'}}
			/>
			<Stack.Screen
				name='PersonScreen'
				component={PersonScreen}
				options={{title: 'Person Page'}}
			/>
		</Stack.Navigator>
	);
};
