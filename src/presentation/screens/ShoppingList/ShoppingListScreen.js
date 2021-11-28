import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native';
import shoppingListStyles from './ShoppingListStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { kcWhite } from '../../constants/AppColors';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import CreateShoppingListScreen from './CreateShoppingListScreen';


function ShoppingListScreen(props) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%", alignItems: 'center' }}>
            <View style={shoppingListStyles.titleLineStyle}>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={shoppingListStyles.buttonStyle}
                    onPress={() => props.navigation.navigate('Create List')}>
                    <Text style={shoppingListStyles.buttonText}>Create shopping list</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

ShoppingListScreen.propTypes = {

}

export default ShoppingListScreen

