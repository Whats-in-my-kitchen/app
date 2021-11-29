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
        <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%", alignItems: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{
                    fontSize: 18,
                    color: 'gray',
                }}>
                    {
                    shoppingList.map((id, i) => (
                    <TouchableOpacity key={i}>
                    <ListItem key={i}>
                    <Avatar
                    square
                    overlayContainerStyle={{backgroundColor: kcDarkGrey}}
                    onPress={() => navigation.navigate('Grocery Items')}
                    title={id.name[0]} />
                    <ListItem.Content>
                    <ListItem.Title>{id.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
                </TouchableOpacity>
                
                    ))
                    }
                </Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

