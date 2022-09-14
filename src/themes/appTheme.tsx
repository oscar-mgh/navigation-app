import {StyleSheet} from 'react-native';

export const colors = {
	primary: 'green',
};

export const styles = StyleSheet.create({
	globalMargin: {
		marginHorizontal: 40,
	},
	globalLargeText: {
		fontSize: 26,
		fontWeight: 'bold',
		color: 'black',
		marginVertical: 20,
	},
	title: {
		fontSize: 32,
		alignSelf: 'center',
		marginVertical: 40,
		color: 'black',
	},
	largeButton: {
		width: 100,
		height: 75,
		backgroundColor: 'black',
		borderRadius: 9,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 20,
	},
	largeButtonText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
	avatarContainer: {
		alignItems: 'center',
		marginTop: 20,
	},
	avatarStyles: {
		width: 130,
		height: 130,
		borderRadius: 100,
	},
	menuContainer: {
		marginVertical: 20,
		marginHorizontal: 35,
	},
	menuButton: {
		marginVertical: 10,
	},
	menuText: {
		fontSize: 24,
		color: 'black',
	},
});
