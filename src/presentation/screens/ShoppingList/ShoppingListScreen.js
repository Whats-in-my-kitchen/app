import React from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import { Text,Touchable,View } from 'react-native';
import shoppingListStyles from './ShoppingListStyles';
import {Entypo} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
=======
import { Text,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { kcWhite } from '../../constants/AppColors';
>>>>>>> bca09f1eeb1da0c7e33546b4aac84994bec235d5


function ShoppingListScreen(props) {
    return (
<<<<<<< HEAD
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
=======
        <SafeAreaView style={{backgroundColor:kcWhite, height:"100%"}}>
            <Text>Shopping List Screen</Text>
        </SafeAreaView>
>>>>>>> bca09f1eeb1da0c7e33546b4aac84994bec235d5
    )
}

ShoppingListScreen.propTypes = {

}

export default ShoppingListScreen

