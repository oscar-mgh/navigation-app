import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'white',
				paddingHorizontal: 40,
				paddingVertical: 20,
			}}
		>
			<Text style={styles.title}>Icons</Text>

			<Text>
				<TouchableIcon iconName='image-outline' />
				<TouchableIcon iconName='location-outline' />
				<TouchableIcon iconName='notifications-outline' />
				<TouchableIcon iconName='folder-outline' />
				<TouchableIcon iconName='cloud-done-outline' />
				<TouchableIcon iconName='print-outline' />
				<TouchableIcon iconName='pizza-outline' />
				<TouchableIcon iconName='code-outline' />
				<TouchableIcon iconName='battery-full-outline' />
				<TouchableIcon iconName='barbell-outline' />
				<TouchableIcon iconName='mail-unread-outline' />
				<TouchableIcon iconName='cube-outline' />
			</Text>
		</View>
	);
};

export default Tab1Screen;
