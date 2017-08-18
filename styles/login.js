import React from 'react';

import { StyleSheet } from 'react-native';

var style = StyleSheet.create({
	
	LoginView: {
		flexDirection: 'column',
		backgroundColor: 'orange',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
	
	LoginLogo: {
		width: 280,
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	
	LoginBtn: {
		backgroundColor: 'orange',
		padding: 10,
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 18,
		borderRadius: 5
	},
	
	LoginFormWrapper: {
		padding: 0
	},
	
	LoginLogoWrapper: {
		borderBottomColor: '#F2F2F2',
		borderBottomWidth: 1,
		padding: 20
	},
	
	LoginInputWrapper: {
		paddingLeft: 20,
		paddingRight: 20,
		marginBottom: 10
	},
	
	LoginFooter: {
	},
	
	LoginFooterText: {
		fontSize: 16,
		marginTop: 25,
		marginBottom: 15,
		textAlign: 'center',
		color: '#FFFFFF'
	},
	
	CreateAccountBtn: {
		padding: 10,
		paddingLeft: 25,
		paddingRight: 25,
		borderColor: '#FFFFFF',
		borderWidth: 2,
		textAlign: 'center',
		color: '#FFFFFF',
		borderRadius: 5,
		fontSize: 18,
	},
	
	LoginSocialWrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		backgroundColor: '#F6F6F6',
		padding: 10,
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 5
	},
	
	LoginSocialIcon: {
		width: 42,
		height: 42,
		marginLeft: 5
	},
	
	LoginForm: {
		backgroundColor: '#FFFFFF',
		borderRadius: 5,
		shadowColor: '#000000',
		shadowOpacity: 0.10,
		shadowRadius: 15
	},
	
	LoginInput: {
		padding: 10,
		borderBottomColor: '#F2F2F2',
		borderBottomWidth: 2,
		marginBottom: 10
	}
});

module.exports = {
	style
}