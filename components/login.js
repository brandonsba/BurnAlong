import React from 'react';
import { Text, View, Button, Image, TextInput, AsyncStorage } from 'react-native';

import { Scene, Router, Actions, Reducer, ActionConst, Tabs, Modal, Drawer, Stack, Lightbox } from "react-native-router-flux";

import { style } from '../styles/login';

import { BURNALONG } from '../config';

var DeviceInfo = require('react-native-device-info');

export class Login extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			username: '',
			password: ''
		};
	}
	
	updateUsername(value) {
		this.setState({ 'username': value });
	}
	
	updatePassword(value) {
		this.setState({ 'password': value });
	}
	
	async handleLogin() {
		var username = this.state.username;
		var password = this.state.password;
		
		try {
			let response = await fetch(BURNALONG.API_URL + '/login', {
				method: 'POST',
				
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					//'AuthToken': null,
					//'deviceID': DeviceInfo.getUniqueID(),
					'deviceID': 'BRANDONSMITH',
					'AppVersion': BURNALONG.VERSION
				},
				
				body: JSON.stringify({
					'emailAddress': username,
					'password': password
				})
			});
			
			let responseJson = await response.json();
			
			if (responseJson.sCode == 200) {
				try {
					await AsyncStorage.setItem('AuthToken', responseJson.AuthToken);
					await AsyncStorage.setItem('UserID', responseJson.details.uid);
				} catch (error) {
					// Error saving data
				}
				
				Actions.home({});
			}
		} catch(error) {
			console.error(error);
		}
	}
	
	handleGoogleLogin() {}
	
	handleAmazonLogin() {}
	
	render() {
		return(
			<View style={style.LoginView}>
				<View style={style.LoginForm}>
					<View style={style.LoginFormWrapper}>
						<View style={style.LoginLogoWrapper}>
							<Image style={style.LoginLogo} resizeMode="contain" source={require('../images/logo.png')} />
						</View>
						
						<View style={style.LoginInputWrapper}>
							<TextInput style={style.LoginInput} placeholder="Username" onChangeText={this.updateUsername.bind(this)} value={this.state.username} />
							<TextInput style={style.LoginInput} placeholder="Password" onChangeText={this.updatePassword.bind(this)} value={this.state.password} />
							
							<Text color="#000000" style={style.LoginBtn} onPress={this.handleLogin.bind(this)}>Login</Text>
						</View>
					</View>
					
					<View style={style.LoginSocialWrapper}>
						<Image style={style.LoginSocialIcon} resizeMode="contain" source={require('../images/google-plus-icon.png')} />
						<Image style={style.LoginSocialIcon} resizeMode="contain" source={require('../images/amazon-icon.png')} />
						<Image style={style.LoginSocialIcon} resizeMode="contain" source={require('../images/facebook-icon.png')} />
					</View>
				</View>
				
				<View style={style.LoginFooter}>
					<Text style={style.LoginFooterText}>New to BurnAlong?</Text>
					<Text style={style.CreateAccountBtn}>Create an Account</Text>
				</View>
			</View>
		);
	}
}