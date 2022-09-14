import {View, Text, Button} from 'react-native';
import {colors, styles} from '../themes/appTheme';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

export default function AlbumsScreen() {
	const {logOut, authState} = useContext(AuthContext);
	const {isLoggedIn} = authState;
	return (
		<View>
			<Text style={styles.title}>AlbumsScreen</Text>
			{isLoggedIn && (
				<View style={{...styles.globalMargin}}>
					<Button
						title='Logout'
						onPress={logOut}
						color={colors.primary}
					/>
				</View>
			)}
		</View>
	);
}
