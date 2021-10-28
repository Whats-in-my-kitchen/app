import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import InventoryScreen from "./InventoryScreen";
import AddGroceryItemScreen from "./AddGroceryItemScreen";
const Stack = createStackNavigator();

function InventoryStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Inventory"
      options={{
        headerRight: () => (
          <Ionicons name="add-circle" size={32} color={kcPrimaryColor} />
        ),
        
      }}
    >
      <Stack.Screen name="Inventory" component={InventoryScreen}></Stack.Screen>
      <Stack.Screen
        name="AddGroceryItemScreen"
        component={AddGroceryItemScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

InventoryStack.propTypes = {};

export default InventoryStack;
