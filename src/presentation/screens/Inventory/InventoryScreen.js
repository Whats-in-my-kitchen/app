import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { kcWhite, kcDarkGrey } from '../../constants/AppColors';
import { SafeAreaView } from 'react-native-safe-area-context';
import inventoryScreenStyles from './InventoryScreenStyles';
import { createStackNavigator, createAppContainer } from '@react-navigation/native-stack';
import AddGroceryItemScreen from './AddGroceryItemScreen';
import { connect } from 'react-redux';
import { ListItem, Avatar, Icon, Image } from "react-native-elements";

function InventoryScreen({ navigation, groceryItem }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%", flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'column' , justifyContent: 'flex-start'}}>
                    { 
                    groceryItem.map((items, i) => (
                    
                    <ListItem key={i}>
                    <Avatar
                    square
                    overlayContainerStyle={{backgroundColor: kcDarkGrey}}
                    onPress={() => console.log("pressed")}
                    title={items.name[0]} />
                    <ListItem.Content>
                    <ListItem.Title>{items.name}</ListItem.Title>
                    <ListItem.Subtitle>{items.count}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
                    ))
                    }
         
        
                    
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={inventoryScreenStyles.inventoryButtonStyle}
                    onPress={() => navigation.navigate('Add Grocery Items')}>
                    <Text style={inventoryScreenStyles.inventoryButtonText}>Add items to Inventory</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

InventoryScreen.propTypes = {

}


const mapStateToProps = (state) => ({
    groceryItem: state.inventoryList.groceryItem,
});

export default connect(mapStateToProps, {})(InventoryScreen);

