import { StyleSheet } from 'react-native';

var style = StyleSheet.create({
	SplashView: {
		backgroundColor: '#E8E8E8',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		flex: 1
	},
	
	SplashImage: {
    	width: 200,
    	resizeMode: 'contain'
   	}
});

module.exports = {
	style
}