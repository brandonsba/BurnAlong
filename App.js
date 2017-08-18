import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

import { Login } from './components/login';
import { Home } from './components/home';
import { ListClassesByCategory } from './components/listClassesByCategory';
import { ShowClass } from './components/showClass';

import { Scene, Router, Actions, Reducer, ActionConst, Tabs, Modal, Drawer, Stack, Lightbox } from "react-native-router-flux";

const TabIcon = ({ selected, title }) => {
	return (
		<Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
	);
}

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} hideNavBar={true} initial />
      <Scene key="home" component={Home} title="Categories" />
      <Scene key="listClassesByCategory" component={ListClassesByCategory} title="Classes" />
      <Scene key="showClass" component={ShowClass} title="Class" />
      
        <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
        	<Scene key="home" title="Home" icon={TabIcon}>
        		<Scene key="home" component={Home} title="Home"></Scene>
        	</Scene>
       </Scene>
    </Scene>
  </Router>
);

export default App;