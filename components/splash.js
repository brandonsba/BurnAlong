import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { style } from '../styles/splash';

export class Splash extends React.Component {
	constructor(props) {
		super(props);
	}
	
	async isAuthenticated() {
		const authToken = await AsyncStorage.getItem('AuthToken');
		
		if (authToken) {
			return true;
		}
		
		return false;
	}
	
	componentDidMount() {
		if (this.isAuthenticated()) {
			Actions.home({});
		} else {
			Actions.login({});
		}
	}
	
	render() {
		return(
			<View style={style.SplashView}>
				<Image style={style.SplashImage} source={require('../images/logo.png')} />
			</View>
		);
	}
}