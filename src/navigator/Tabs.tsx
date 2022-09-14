import React from 'react';
import {Text, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens';
import {StackNavigator} from './StackNavigator';
import {colors} from '../themes/appTheme';
import TopTabNavigator from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			screenOptions={({route}) => ({
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: 'black',
				tabBarLabelStyle: {
					fontSize: 15,
					fontWeight: 'bold',
					marginBottom: 7,
				},
				tabBarStyle: {
					borderTopColor: 'white',
					elevation: 0,
					borderTopWidth: 0,
				},
				headerShown: false,
				tabBarIcon: ({color, focused}) => {
					let iconName: string = '';
					switch (route.name) {
						case 'Tab1Screen':
							iconName = 'browsers-outline';
							break;
						case 'TopTabNavigator':
							iconName = 'laptop-outline';
							break;
						case 'StackNavigator':
							iconName = 'file-tray-stacked-outline';
							break;
					}
					return (
						<Icon
							name={iconName}
							size={21}
							color={colors.primary}
						/>
					);
				},
			})}
		>
			<Tab.Screen
				name='Tab1Screen'
				component={Tab1Screen}
				options={{title: 'BottomTabs'}}
			/>
			<Tab.Screen
				name='TopTabNavigator'
				component={TopTabNavigator}
				options={{title: 'TopTabNav'}}
			/>
			<Tab.Screen
				name='StackNavigator'
				component={StackNavigator}
				options={{title: 'Stack'}}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
