import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../themes/appTheme';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

interface Props {
	iconName: string;
}

export default function TouchableIcon({iconName}: Props) {
	const {passFavIcon} = useContext(AuthContext);

	return (
		<TouchableOpacity onPress={() => passFavIcon(iconName)}>
			<Icon name={iconName} size={77} color={colors.primary} />
		</TouchableOpacity>
	);
}
