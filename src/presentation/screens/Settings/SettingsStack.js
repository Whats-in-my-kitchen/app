import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "./SettingsScreen";
const Stack = createStackNavigator();

function SettingsStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
    >
      <Stack.Screen name="Settings" component={SettingsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

SettingsStack.propTypes = {};

export default SettingsStack;
