import React from 'react';
import { Text, View, ScrollView, Button, Image, TextInput, AsyncStorage } from 'react-native';

import { BURNALONG } from '../config';

import { Category } from '../components/category';

import { style } from '../styles/home';

export class Home extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			categories: {}
		};
		
		this.fetchCategories();
	}
	
	async fetchCategories() {
		try {
			const authToken = await AsyncStorage.getItem('AuthToken');
			
			let response = await fetch(BURNALONG.API_URL + '/categories', {
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
			console.log(responseJson);
			this.setState({ categories: responseJson });
		} catch(error) {
			console.error(error);
		}
	}
	
	render() {
		var categories = [];
		
		for (var i in this.state.categories) {
			categories.push(
				<Category key={this.state.categories[i].category} categoryId={this.state.categories[i].categoryid} categoryImageUrl={this.state.categories[i].imageuri} categoryName={this.state.categories[i].category}></Category>
			);
		}
		
		return(
			<ScrollView style={style.HomeView}>
				{ categories }
			</ScrollView>
		);
	}
}
