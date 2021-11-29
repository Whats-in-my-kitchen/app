import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native'
import shoppingListStyles from '../ShoppingListStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem, Avatar, Icon, Image } from "react-native-elements";
import { kcWhite, kcLightGrey, kcDarkGrey } from '../../../constants/AppColors';
function ItemsShoppingList({ route }) {
    const { item } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%", flexDirection: 'column' }}>
            <View>
                {
                    item.groceryItem ?
                        <View>
                            {item.groceryItem.map((items, i) => (
                                <ListItem key={i}>
                                    <Avatar
                                        square
                                        overlayContainerStyle={{ backgroundColor: kcDarkGrey }}
                                        title={items.name[0]} />
                                    <ListItem.Content>
                                        <ListItem.Title>{items.name}</ListItem.Title>
                                        <ListItem.Subtitle>{items.count}</ListItem.Subtitle>
                                    </ListItem.Content>
                                    <ListItem.CheckBox
                                        checked={items.status}
                                        onPress={() => console.log("pressed")}
                                    />
                                </ListItem>
                            ))}
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                <TouchableOpacity
                                    style={shoppingListStyles.buttonStyle}
                                    onPress={() => navigation.navigate('Add Grocery Items')}>
                                    <Text style={shoppingListStyles.buttonText}>Create shopping list</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <TouchableOpacity
                                style={shoppingListStyles.buttonStyle}
                                onPress={() => navigation.navigate('Add Grocery Items')}>
                                <Text style={shoppingListStyles.buttonText}>Create shopping list</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        </SafeAreaView>
    )
}

ItemsShoppingList.propTypes = {

}

export default ItemsShoppingList

