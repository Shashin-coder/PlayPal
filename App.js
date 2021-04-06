
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {CreateSwitchNavigator,CreateAppContainer} from 'react-navigation'
import Locationandpreference from './Locationandpreference';
import Welcomeclass from './Welcomescreen';
export default class App extends React.Component{
  render(){
  return (
    
      <AppContainer/>
  
  );
}}
const Switchnavigation=CreateSwitchNavigator({
  welcome:Welcomeclass,
  location:Locationandpreference
})
const Appcontainer=CreateAppContainer(
Switchnavigation
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
