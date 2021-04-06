import React,{Component} from 'react';
import { View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,Image} from 'react-native';
  import {Card} from "react-native-elements";
  import DropDownPicker from 'react-native-dropdown-picker';
  import Welcomeclass from './Welcomescreen';
  export default class Locationandpreference extends Component{
      constructor(){
super();
this.state= {
    favouriteSport:'basketball'
}
}


render(){
    
    
    return(
        <View style={StyleSheet.containerStyle}>
<Text style={StyleSheet.titlestyle}>Welcome!</Text>

<View style={Stylesheet.textContainer1}>
<Text style={Stylesheet.textStyle1}>
    Choose your favourite sport:
</Text>

</View>
<View style={Stylesheet.dropdownContainer}>
<DropDownPicker
items={[
    {label:Football,value:football},
    {label:Tennis,value:tennis},
    {label:Badminton,value:badminton},
    {label:Basketball,value:basketball},]}

    defaultValue={this.state.favouriteSport}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}

    dropDownStyle={{backgroundColor: '#b7f7ef'}}
    onChangeItem={item => this.setState({
        favouriteSport: item.value  })}

/>
</View>

</View>
)
}}
    const styles=StyleSheet.create({
        titlestyle:{
fontSize:50,
colour:"red",
},

dropdownContainer:{
    flex: 1,
    backgroundColor: '#1e2761',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle1: {
    fontSize: 30,
    fontWeight: "30",
    paddingBottom: 30,
    color: "#ff3d00"
  },
  textContainer1: {
      flex:1,
    backgroundColor: '#1e2761',
    alignItems: 'center',
    justifyContent: 'center',
  }
    })
