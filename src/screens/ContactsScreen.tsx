import {View, Text, Button} from 'react-native';
import {colors, styles} from '../themes/appTheme';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

export default function ContactsScreen() {
	const {signIn, authState} = useContext(AuthContext);
	const {isLoggedIn} = authState;
	return (
		<View>
			<Text style={styles.title}>ContactsScreen</Text>
			{!isLoggedIn && (
				<View style={styles.globalMargin}>
					<Button
						title='SignIn'
						onPress={signIn}
						color={colors.primary}
					/>
				</View>
			)}
		</View>
	);
}
