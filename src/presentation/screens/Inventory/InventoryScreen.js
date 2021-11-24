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
            
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity
                style={inventoryScreenStyles.inventoryButtonStyle}
                onPress={()=>props.navigation.navigate('Add Grocery Items')}>
                    <Text style={inventoryScreenStyles.inventoryButtonText}>Add items to Inventory</Text>
                    </TouchableOpacity>
            </View>
       </SafeAreaView>
    )
}

InventoryScreen.propTypes = {

}

export default InventoryScreen

