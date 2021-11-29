import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native-safe-area-context';

function ItemsShoppingList(props) {
    return (
        <SafeAreaView>
            <View>
            <Text>
                List of shopping List Items
            </Text>
            </View>
        </SafeAreaView>
    )
}

ItemsShoppingList.propTypes = {

}

export default ItemsShoppingList

