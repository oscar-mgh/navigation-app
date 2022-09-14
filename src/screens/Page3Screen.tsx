import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {colors, styles} from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Page3Screen = ({navigation}: Props) => {
	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Page3Screen</Text>
			<Button
				title='Go back'
				color={colors.primary}
				onPress={() => navigation.pop()}
			/>
			<View style={{marginVertical: 20}}>
				<Button
					color={colors.primary}
					title='Go to page 1'
					onPress={() => navigation.popToTop()}
				/>
			</View>
		</View>
	);
};

export default Page3Screen;
