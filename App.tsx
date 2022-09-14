import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import StackNavigator from './src/navigator/StackNavigator';
// import DrawerNavigator from './src/navigator/DrawerNavigator';
import CustomDrawer from './src/navigator/CustomDrawer';
// import Tabs from './src/navigator/Tabs';
import {StatusBar} from 'react-native';
import {AuthProvider} from './src/context/AuthContext';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				{/* <StackNavigator /> */}
				{/* <DrawerNavigator /> */}
				<CustomDrawer />
				{/* <Tabs /> */}
			</AuthProvider>
		</NavigationContainer>
	);
}
