import React, {useState} from "react";
import PropTypes from "prop-types";
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import shoppingListStyles from "./ShoppingListStyles";
import { kcWhite } from '../../constants/AppColors';
import { FontAwesome5 } from '@expo/vector-icons';
import {ListItem, Avatar, Icon} from 'react-native-elements'
import StylesWelcomeScreen from "../Welcome/WelcomeScreenStyles";
import { KTUserList } from "../../components/ListTile/KTListTile";

const list= [
  {
    username: 'Blake',
    avatar_url: 'imgur.com/a/WegoCBq',
  },
  {
    username: 'Sherry',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    username: 'Nathan',
    avatar_url: 'xyz',
  }
]

function CreateShoppingListScreen({ navigation }) {
  return (
    <SafeAreaView  style = {{flex:1,backgroundColor:kcWhite, height:"100%"}}> 
      <View style= {{alignItems:'center', height: 256}}>
        <View style={shoppingListStyles.titleLineStyle}>

          <Text style={shoppingListStyles.titleStyle}>Create List</Text>

          <TouchableOpacity 
              style={shoppingListStyles.buttonStyle}>
                  {/* <Text style={shoppingListStyles.buttonText}> ↓ </Text>  */}
                  <FontAwesome5 style={{textAlign:'center', fontSize:14}} name="save"  color="white" />
          </TouchableOpacity>
        </View>

        <View style={{width:'100%', alignItems:'center', marginTop:16}}>
          <TextInput style={{width:'80%', height:50, margin:12, backgroundColor:'#e5e5e5',borderRadius:8, paddingLeft:15}}
            placeholder='Name of the list'/>
          <TextInput style={{width:'80%', height:75, margin:12, backgroundColor:'#e5e5e5',borderRadius:8, paddingLeft:15}}
            placeholder='Description (Optional)'/>
        </View>
      </View>

    

        
        <View>
          <View style={shoppingListStyles.titleLineStyle}>
        <Text style={shoppingListStyles.titleStyle}>Share with</Text>
        <TouchableOpacity 
            style={{width:50,
              alignSelf:'flex-end'}}>
        <Text style ={{fontSize:13,color:'gray',textAlign:'center'}}>View all</Text> 
        </TouchableOpacity>
        </View>
          {
            <KTUserList
            userList={list}/>
          }
        </View>
    </SafeAreaView>
  );
}

CreateShoppingListScreen.propTypes = {
  navigation: PropTypes.object,
};

export default CreateShoppingListScreen;
