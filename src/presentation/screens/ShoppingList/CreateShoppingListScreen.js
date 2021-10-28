import React, {useState} from "react";
import PropTypes from "prop-types";
import { Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import shoppingListStyles from "./ShoppingListStyles";
import { kcWhite } from '../../constants/AppColors';

function CreateShoppingListScreen({ navigation }) {
  return (
    <SafeAreaView  style = {{flex:1,backgroundColor:kcWhite, height:"100%"}}> 
      <View style= {{alignItems:'center', height: '40%'}}>
        <View  style={shoppingListStyles.titleLineStyle}>

          <Text style={shoppingListStyles.titleStyle}>Create List</Text>

          <TouchableOpacity 
              style={shoppingListStyles.buttonStyle}>
                  <Text style={shoppingListStyles.buttonText}>🖫</Text> 
          </TouchableOpacity>
        </View>

        <View style={{width:'100%', alignItems:'center', marginTop:20}}>
          <TextInput style={{width:'80%', height:'24%', margin:12, backgroundColor:'#e5e5e5',borderRadius:4, padding:10}}
            placeholder='Name of the list'/>
          <TextInput style={{width:'80%', height:'32%', margin:12, backgroundColor:'#e5e5e5',borderRadius:4, padding:10}}
            placeholder='Description (Optional)'/>
        </View>
      </View>

      <View style = {{alignItems:'center'}}>
      <View  style={shoppingListStyles.titleLineStyle}>

        <Text style={shoppingListStyles.titleStyle}>Share With</Text>

        <TouchableOpacity 
            style={{width:40,
              alignSelf:'flex-end',}}>
                <Text style ={{fontSize:12,color:'gray',textAlign:'center'}}>View all</Text> 
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
}

CreateShoppingListScreen.propTypes = {
  navigation: PropTypes.object,
};

export default CreateShoppingListScreen;
