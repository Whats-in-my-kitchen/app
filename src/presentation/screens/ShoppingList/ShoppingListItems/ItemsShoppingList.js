import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native-safe-area-context';
import {View, Text} from 'react-native'
import { kcWhite, kcLightGrey, kcDarkGrey } from '../../../constants/AppColors';
function ItemsShoppingList({item}) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%", flexDirection: 'column' }}>
            <View>
            <Text>
                {JSON.stringify(item)}
            </Text>
            </View>
        </SafeAreaView>
    )
}

ItemsShoppingList.propTypes = {

}

export default ItemsShoppingList

