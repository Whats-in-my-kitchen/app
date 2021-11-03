import React from 'react'
import PropTypes from 'prop-types'
import { View,Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { kcWhite } from '../../constants/AppColors';
import { SafeAreaView } from 'react-native-safe-area-context';
import inventoryScreenStyles from './InventoryScreenStyles';
import {createStackNavigator, createAppContainer} from '@react-navigation/native-stack';
import AddGroceryItemScreen from './AddGroceryItemScreen';

function InventoryScreen(props) {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:kcWhite, height:"100%", alignItems:'center'}}>
        <View style={inventoryScreenStyles.titleLineStyle}>

           <Text style ={inventoryScreenStyles.titleStyle}>Inventory</Text>
           {/* Creating a button */}
           <TouchableOpacity
                style={inventoryScreenStyles.buttonStyle}
                onPress={()=>props.navigation.navigate('AddGroceryItemScreen')}>
                    <Text style={inventoryScreenStyles.buttonText}>+</Text>
                    </TouchableOpacity>
        </View>

            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:32,
                fontWeight:'bold',
                color:'white',
                textAlign:'center'}}>
                    Add a grocery item to get started!
                </Text>
            </View>
       </SafeAreaView>
    )
}

InventoryScreen.propTypes = {

}

export default InventoryScreen

