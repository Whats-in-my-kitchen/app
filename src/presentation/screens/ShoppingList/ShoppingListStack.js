import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PropTypes from "prop-types";
import ShoppingListScreen from "./ShoppingListScreen";
import CreateShoppingListScreen from "./CreateShoppingListScreen";
import CreateGroceryListItem from "./ShoppingListItems/CreateGroceryListItem";
import ItemsShoppingList from "./ShoppingListItems/ItemsShoppingList";
const Stack = createStackNavigator();
function ShoppingListStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ShoppingList"
      options={{
        headerRight: () => (
          <Ionicons name="add-circle" size={32} color={kcPrimaryColor} />
        ),
      }}
    >
      <Stack.Screen name="ShoppingList" component={ShoppingListScreen}></Stack.Screen>
      <Stack.Screen name="CreateShoppingList" component={CreateShoppingListScreen} ></Stack.Screen>
      <Stack.Screen name="CreateGroceryListItem" component={CreateGroceryListItem}></Stack.Screen>
      <Stack.Screen name="ItemsShoppingList" component={ItemsShoppingList}></Stack.Screen>
    </Stack.Navigator>
  );
}

ShoppingListStack.propTypes = {
  navigation: PropTypes.object,
};

export default ShoppingListStack;
