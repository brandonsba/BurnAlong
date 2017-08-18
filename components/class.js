import React from 'react';
import { Text, View, TouchableHighlight, ScrollView, Button, Image, TextInput, AsyncStorage } from 'react-native';

import { BURNALONG } from '../config';

import { style } from '../styles/category';

export class Category extends React.Component {
	constructor(props) {
		super(props);
		
		this.categoryId = this.props.categoryId;
		this.categoryImageUrl = this.props.categoryImageUrl.replace('public://', BURNALONG.CATEGORY_IMAGES_ROOT + '/');
	}
	
	async fetchClasses() {
		try {
			const authToken = await AsyncStorage.getItem('AuthToken');
			
			let response = await fetch(BURNALONG.API_URL + '/classes?categoryid=' + this.categoryId, {
				method: 'GET',
				
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'AuthToken': authToken,
					'deviceID': 'BRANDONSMITH',
					'AppVersion': BURNALONG.VERSION
				}
			});
			
			let responseJson = await response.json();
		} catch(error) {
			console.error(error);
		}
	}
	
	render() {
		return(
			<View>
				<TouchableHighlight onPress={this.fetchClasses.bind(this)}>
					<Image contain={true} style={style.CategoryImage} source={{ uri: this.categoryImageUrl }}/>
				</TouchableHighlight>
				<Text style={style.CategoryName}>{this.props.categoryName}</Text>
			</View>
		);
	}
}
