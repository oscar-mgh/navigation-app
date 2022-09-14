import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../themes/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

// interface RouteParams {
// 	id: number;
// 	name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

const PersonScreen = ({route, navigation}: Props) => {
	const {setUsername} = useContext(AuthContext);

	const params = route.params;
	useEffect(() => {
		navigation.setOptions({
			title: params.name,
		});
	}, []);

	useEffect(() => {
		setUsername(params.name);
	}, [params.name]);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>{JSON.stringify(params, null, 4)}</Text>
		</View>
	);
};
export default PersonScreen;
