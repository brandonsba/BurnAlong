import React from 'react';
import { Text, View, TouchableHighlight, ScrollView, Button, Image, TextInput, AsyncStorage } from 'react-native';

import { BURNALONG } from '../config';

import { ListClass } from '../components/listClass';

import { style } from '../styles/listClasses';

export class ListClassesByCategory extends React.Component {
	constructor(props) {
		super(props);
		
		this.classes = this.props.classes;
	}
	
	render() {
		var classes = [];
		
		for (var i in this.classes) {
			classes.push(<ListClass classDetails={this.classes[i].class_details}></ListClass>);
		}
		
		return(
			<ScrollView>
			{ classes }
			</ScrollView>
		);
	}
}
