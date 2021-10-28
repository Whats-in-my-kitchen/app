import React from 'react'
import PropTypes from 'prop-types'
import { View,Text } from 'react-native'
import { kcWhite } from '../../constants/AppColors';
import { SafeAreaView } from 'react-native-safe-area-context';

function InventoryScreen(props) {
    return (
        <SafeAreaView style={{backgroundColor:kcWhite, height:"100%"}}>
           <Text>Inventory Screen</Text>
       </SafeAreaView>
    )
}

InventoryScreen.propTypes = {

}

export default InventoryScreen

