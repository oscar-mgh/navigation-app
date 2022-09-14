import {
	Image,
	View,
	TouchableOpacity,
	Text,
	useWindowDimensions,
} from 'react-native';
import {
	createDrawerNavigator,
	DrawerContentComponentProps,
	DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens';
import {colors, styles} from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import Tabs from './Tabs';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
	const {width} = useWindowDimensions();

	return (
		<Drawer.Navigator
			screenOptions={{
				drawerType: width >= 768 ? 'permanent' : 'front',
				headerShown: false,
			}}
			drawerContent={(props) => <InsideMenu {...props} />}
		>
			<Drawer.Screen
				name='Tabs'
				component={Tabs}
			/>
			<Drawer.Screen
				name='SettingsScreen'
				component={SettingsScreen}
			/>
		</Drawer.Navigator>
	);
};

export default CustomDrawer;

const InsideMenu = ({navigation}: DrawerContentComponentProps) => {
	return (
		<DrawerContentScrollView>
			<View style={styles.avatarContainer}>
				<Icon
					name='person-circle-outline'
					size={137}
					color={colors.primary}
					style={styles.avatarStyles}
				/>
			</View>

			{/* Menu Options */}

			<View style={styles.menuContainer}>
				<TouchableOpacity
					style={{...styles.menuButton, flexDirection: 'row'}}
					onPress={() => navigation.navigate('Tabs')}
				>
					<Icon
						name='compass-outline'
						size={29}
						color='black'
					/>
					<Text style={{...styles.menuText, marginLeft: 15}}>
						Navigation
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{...styles.menuButton, flexDirection: 'row'}}
					onPress={() => navigation.navigate('SettingsScreen')}
				>
					<Icon
						name='settings-outline'
						size={29}
						color='black'
					/>
					<Text style={{...styles.menuText, marginLeft: 15}}>
						Settings
					</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	);
};
