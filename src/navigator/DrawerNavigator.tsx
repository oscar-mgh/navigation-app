import React, {useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	const {width} = useWindowDimensions();

	return (
		<Drawer.Navigator
			screenOptions={{
				drawerType: width >= 768 ? 'permanent' : 'front',
				headerShown: false,
			}}
		>
			<Drawer.Screen
				name='StackNavigator'
				component={StackNavigator}
			/>
			<Drawer.Screen
				name='Article'
				component={SettingsScreen}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
