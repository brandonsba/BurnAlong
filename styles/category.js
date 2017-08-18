import { StyleSheet } from 'react-native';

var style = StyleSheet.create({
	CategoryImage: {
		position: 'relative',
		left: 0,
		right: 0,
		height: 200
	},
	
	CategoryName: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		right: 0,
		padding: 10,
		color: '#FFFFFF',
		backgroundColor: 'rgba(0, 0, 0, 0.25)',
	}
});

module.exports = {
	style
}