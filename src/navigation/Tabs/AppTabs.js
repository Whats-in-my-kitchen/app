import React, { useState,useEffect} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ShoppingListScreen from "../../presentation/screens/ShoppingList/ShoppingListScreen";
import InventoryScreen from '../../presentation/screens/Inventory/InventoryScreen';
import SettingsScreen from "../../presentation/screens/Settings/SettingsScreen";
import { Ionicons,Entypo,MaterialIcons } from '@expo/vector-icons'; 
import { kcPrimaryColor, kcLightGrey } from '../../presentation/constants/AppColors';
const Tabs = createBottomTabNavigator()


export const AppTabs=()=>{
    return( 
      <Tabs.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon:({focused,color,size}) =>{
          let iconName;
          if (route.name ==='ShoppingList'){
            iconName = focused ? <Entypo name="shopping-bag" size={24} color={kcPrimaryColor} /> :<Entypo name="shopping-bag" size={24} color={kcLightGrey} />
          }
          if (route.name ==='Inventory'){
            iconName = focused ? <MaterialIcons name="inventory" size={24} color={kcPrimaryColor} /> :<MaterialIcons name="inventory" size={24} color={kcLightGrey} />
          }
          if (route.name ==='Settings'){
            iconName = focused ?<Ionicons name="settings" size={24} color={kcPrimaryColor} /> :<Ionicons name="settings" size={24} color={kcLightGrey} />
          }
          return iconName
        }
      })}

       tabBarOptions={{
          activeTintColor: '#B30200',
          showLabel: false,
          inactiveTintColor: 'gray',

        }}
      >
        <Tabs.Screen name="ShoppingList" component={ShoppingListScreen}/>
        <Tabs.Screen name="Inventory" component={InventoryScreen}/>
        <Tabs.Screen name="Settings" component={SettingsScreen}/>
      </Tabs.Navigator>
    )
}

