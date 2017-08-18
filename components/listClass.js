import React from 'react';
import { Text, View, TouchableHighlight, ScrollView, Button, Image, TextInput, AsyncStorage } from 'react-native';

import { BURNALONG } from '../config';

import { Scene, Router, Actions, Reducer, ActionConst, Tabs, Modal, Drawer, Stack, Lightbox } from "react-native-router-flux";

import { style } from '../styles/listClass';

export class ListClass extends React.Component {
	constructor(props) {
		super(props);
		
		this.classDetails = this.props.classDetails;
	}
	
	showClass() {
		Actions.showClass({ classDetails: this.classDetails });
	}
	
	render() {
		return(
			<View>
				<TouchableHighlight onPress={this.showClass.bind(this)}>
					<Image style={style.ListClassThumbnail} contain={true} source={{ uri: this.classDetails.thumb_image_uri }} />
				</TouchableHighlight>
			</View>
		);
	}
}
