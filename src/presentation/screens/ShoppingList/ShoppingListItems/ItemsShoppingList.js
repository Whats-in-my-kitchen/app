import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native'
import { kcWhite, kcLightGrey, kcDarkGrey } from '../../../constants/AppColors';
function ItemsShoppingList({ route }) {
    const { item } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%", flexDirection: 'column' }}>
            <View>
                <Text>
                    {console.log('📝 📝' + item.groceryItem)}
                    {JSON.stringify(item.groceryItem)}
                </Text>
            </View>
        </SafeAreaView>
    )
}

ItemsShoppingList.propTypes = {

}

export default ItemsShoppingList

