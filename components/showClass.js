import React from 'react';
import { Text, View, WebView, TouchableHighlight, ScrollView, Button, Image, TextInput, AsyncStorage } from 'react-native';

import { BURNALONG } from '../config';

import { style } from '../styles/showClass';

import Video from 'react-native-video';

export class ShowClass extends React.Component {
	constructor(props) {
		super(props);
		
		this.classDetails = this.props.classDetails;
		console.log(this.classDetails);
		this.state = {
			videoUrl: null
		};
	}
	
	async loadVideo() {
		try {
			const authToken = await AsyncStorage.getItem('AuthToken');
			
			let response = await fetch(BURNALONG.API_URL + '/vidLink?vidId=' + this.classDetails.videoId + '&classId=' + this.classDetails.classid, {
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
			
			console.log(responseJson.vidSrcStandard);
			this.setState({ videoUrl: responseJson.vidSrcStandard });
		} catch(error) {
			console.error(error);
		}
	}
	
	render() {
		if (this.state.videoUrl == null) {
			this.loadVideo();
			
			return (
				<View><Text>Loading Video</Text></View>
			);
		} else {
let htmlString = `<!DOCTYPE html><html>
<style>
#videoId { width: 100%; left: 0; right: 0; margin: 0; padding: 0; z-index: 500; }
.videoBody { position: relative; }
.videoTitle { position: absolute; bottom: 10px; left: 10px; text-shadow: 0 0 4px rgba(0, 0, 0, 0.35); font-size: 18px; z-index: 999; }
.videoFooter { background: #F6F6F6; }
</style><body>
<div class=\"videoBody\">
	<video id=\"videoId\" webkit-playsinline=\"true\" playsinline=\"true\" autoplay> <source src=\"${this.state.videoUrl}\" type=\"video/mp4\" /> </video>
	<h3 class=\"videoTitle\">${this.classDetails.title}</h3>
</div>
<div class=\"videoFooter\">
	
</div>
</body>
</html>`;

			return(
				<WebView source={{ html: htmlString }} />
			);
		}
	}
}
