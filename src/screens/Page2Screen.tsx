import {Button, StyleSheet, Text, View} from 'react-native';
import {colors, styles} from '../themes/appTheme';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Page2Screen = () => {
	const navigator = useNavigation();

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Page2Screen</Text>
			<Button
				title='Go to page 3'
				color={colors.primary}
				onPress={() => navigator.navigate('Page3Screen')}
			/>
		</View>
	);
};

export default Page2Screen;
