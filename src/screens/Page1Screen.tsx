import React, {useEffect} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {colors, styles} from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}

const Page1Screen = ({navigation}: Props) => {
	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<Icon
					style={{marginLeft: 15, marginRight: 10}}
					name='menu'
					size={40}
					color={colors.primary}
					onPress={() => navigation.toggleDrawer()}
				/>
			),
		});
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Page1Screen</Text>
			<Button
				color={colors.primary}
				title='Go to page 2'
				onPress={() => navigation.navigate('Page2Screen')}
			/>
			<Text style={{...styles.globalLargeText, marginTop: 150}}>
				Navigate using arguments
			</Text>
			<View style={{flexDirection: 'row'}}>
				<TouchableOpacity
					style={{
						...styles.largeButton,
						backgroundColor: colors.primary,
					}}
					onPress={() =>
						navigation.navigate('PersonScreen', {
							id: 1,
							name: 'Peter',
						})
					}
				>
					<Icon name='man-outline' size={30} color='white' />
					<Text style={styles.largeButtonText}>Peter</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						...styles.largeButton,
						backgroundColor: colors.primary,
					}}
					onPress={() =>
						navigation.navigate('PersonScreen', {
							id: 2,
							name: 'Mary',
						})
					}
				>
					<Icon name='woman-outline' size={30} color='white' />
					<Text style={styles.largeButtonText}>Mary</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Page1Screen;
