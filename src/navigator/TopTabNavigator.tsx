import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AlbumsScreen, ChatScreen, ContactsScreen} from '../screens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
	const {top: paddingTop} = useSafeAreaInsets();

	return (
		<Tab.Navigator
			style={{paddingTop}}
			sceneContainerStyle={{backgroundColor: 'white'}}
			screenOptions={({route}) => ({
				tabBarPressColor: 'transparent',
				tabBarShowIcon: true,
				tabBarStyle: {
					borderTopColor: 'white',
					elevation: 0,
					borderTopWidth: 0,
				},
				tabBarIndicatorStyle: {
					backgroundColor: colors.primary,
					elevation: 0,
					borderWidth: 0,
				},
				tabBarIcon: () => {
					let iconName: string = '';
					switch (route.name) {
						case 'Chat':
							iconName = 'chatbubble-ellipses-outline';
							break;
						case 'Contacts':
							iconName = 'people-outline';
							break;
						case 'Albums':
							iconName = 'albums-outline';
							break;
					}
					return (
						<Icon
							name={iconName}
							size={25}
							color={colors.primary}
						/>
					);
				},
			})}
		>
			<Tab.Screen
				name='Chat'
				component={ChatScreen}
			/>
			<Tab.Screen
				name='Contacts'
				component={ContactsScreen}
			/>
			<Tab.Screen
				name='Albums'
				component={AlbumsScreen}
			/>
		</Tab.Navigator>
	);
};

export default TopTabNavigator;
