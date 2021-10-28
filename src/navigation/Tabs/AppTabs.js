import React, { useState, useEffect, Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShoppingListScreen from "../../presentation/screens/ShoppingList/ShoppingListScreen";
import InventoryScreen from "../../presentation/screens/Inventory/InventoryScreen";
import SettingsScreen from "../../presentation/screens/Settings/SettingsScreen";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import { Text, Button } from "react-native";
import {
  kcPrimaryColor,
  kcDarkGrey,
} from "../../presentation/constants/AppColors";
import InventoryStack from "../../presentation/screens/Inventory/InventoryStack";
import ShoppingListStack from "../../presentation/screens/ShoppingList/ShoppingListStack";
import SettingsStack from "../../presentation/screens/Settings/SettingsStack";
const Tabs = createBottomTabNavigator();

export const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "ShoppingListStack") {
            iconName = focused ? (
              <Entypo name="shopping-bag" size={24} color={kcPrimaryColor} />
            ) : (
              <Entypo name="shopping-bag" size={24} color={kcDarkGrey} />
            );
          }
          if (route.name === "InventoryStack") {
            iconName = focused ? (
              <MaterialIcons
                name="inventory"
                size={24}
                color={kcPrimaryColor}
              />
            ) : (
              <MaterialIcons name="inventory" size={24} color={kcDarkGrey} />
            );
          }
          if (route.name === "SettingsStack") {
            iconName = focused ? (
              <Ionicons name="settings" size={24} color={kcPrimaryColor} />
            ) : (
              <Ionicons name="settings" size={24} color={kcDarkGrey} />
            );
          }
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#B30200",
        showLabel: false,
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="ShoppingListStack"
        component={ShoppingListStack}
        options={{  
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <Tabs.Screen
        name="InventoryStack"
        component={InventoryStack}
        options={{
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <Tabs.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
    </Tabs.Navigator>
  );
};
