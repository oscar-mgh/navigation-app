import {useContext} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, styles} from '../themes/appTheme';

const SettingsScreen = () => {
	const {authState} = useContext(AuthContext);
	const {favouriteIcon} = authState;

	return (
		<View>
			<Text style={{...styles.globalLargeText, alignSelf: 'center'}}>
				User Settings
			</Text>
			<Text style={{...styles.globalMargin, fontSize: 20}}>
				{JSON.stringify(authState, null, 4)}
			</Text>
			{favouriteIcon && (
				<Text style={styles.globalMargin}>
					<Icon
						name={favouriteIcon}
						size={140}
						color={colors.primary}
					/>
				</Text>
			)}
		</View>
	);
};

export default SettingsScreen;
