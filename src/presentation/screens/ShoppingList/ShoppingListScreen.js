import React from 'react'
import PropTypes from 'prop-types'
import { Text,Touchable,View } from 'react-native';
import shoppingListStyles from './ShoppingListStyles';
import {Entypo} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


function ShoppingListScreen(props) {
    return (
        <View style = {{flex:1}}>
        <View  style={shoppingListStyles.titleLineStyle}>

            <Text style={shoppingListStyles.titleStyle}>Shopping List</Text>
            {/* Creating a button.  */}
            <TouchableOpacity 
                style={shoppingListStyles.buttonStyle}
                onPress={()=>{
                    alert("Create new List");
                }}
                >
                    <Text style={shoppingListStyles.buttonText}>+</Text> 
            </TouchableOpacity>
        </View>
        
             <View style= {{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>
                Create a new list to get started!
            </Text> 
            </View>
        </View>
    )
}

ShoppingListScreen.propTypes = {

}

export default ShoppingListScreen

