import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

import { Login } from './components/login';
import { Home } from './components/home';
import { ListClassesByCategory } from './components/listClassesByCategory';
import { ShowClass } from './components/showClass';
import { Splash } from './components/splash';

import { Scene, Router, Actions, Reducer, ActionConst, Tabs, Modal, Drawer, Stack, Lightbox } from "react-native-router-flux";

export default class App extends React.Component {
	render() {
		return(
			<Router>
				<Scene key="root" hideNavBar={true}>
					<Scene key="splash" component={Splash} timeout={2000} title="BurnAlong" initial />
					
					<Scene key="login" component={Login} title="Login" />
					
					<Scene key="home" component={Home} title="Home" />
					<Scene key="listClassesByCategory" component={ListClassesByCategory} title="List Classes by Category" />
					<Scene key="showClass" component={ShowClass} title="Show Class" />
				</Scene>
			</Router>
		);
	}
}