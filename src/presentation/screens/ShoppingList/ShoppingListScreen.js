import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native';
import shoppingListStyles from './ShoppingListStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { kcWhite, kcLightGrey, kcDarkGrey } from '../../constants/AppColors';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import CreateShoppingListScreen from './CreateShoppingListScreen';
import { connect } from 'react-redux';
import { KTUserList } from '../../components/ListTile/KTListTile';
import { ListItem, Avatar, Icon, Image } from "react-native-elements";

function ShoppingListScreen({ shoppingList, navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%", flexDirection: 'column' }}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                {
                    shoppingList.map((item, i) => (

                        <TouchableOpacity key={i}
                            onPress={() => navigation.navigate('Grocery Items', { item: item })}>
                            <ListItem key={i}>
                                <Avatar
                                    square
                                    overlayContainerStyle={{ backgroundColor: kcDarkGrey }}
                                    //onPress={() => navigation.navigate('Grocery Items',item)}
                                    title={item ? item.name[0] : 'U'} />
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>

                    ))
                }

            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity
                    style={shoppingListStyles.buttonStyle}
                    onPress={() => navigation.navigate('Create List')}>
                    <Text style={shoppingListStyles.buttonText}>Create shopping list</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    shoppingList: state.shoppingList.shoppingList,
});

export default connect(mapStateToProps, {})(ShoppingListScreen);

