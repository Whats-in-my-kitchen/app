import React, { useState,useEffect} from "react";

import { AntDesign,Ionicons,Entypo,MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons'; 
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeOutlined,HomeFilled} from "@ant-design/icons";
import ShoppingListScreen from '../presentation/screens/ShoppingList/ShoppingListScreen';
const Tabs = createBottomTabNavigator()


export const AppTabs=()=>{
    return(
        <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ?
                <Entypo name={'home'} size={size+1} color={color}/>:<MaterialCommunityIcons name={'home'} size={size} color={color} />;
              } else if (route.name === 'Profile') {
                iconName = focused? <FontAwesome5 name="user-alt" size={size-2} color={color} />:<AntDesign name={'user'} size={size} color={color} />;
              }
              else if (route.name === 'Tags') {
                iconName = focused ?<AntDesign name={'tags'} size={size+2} color={color} />:<AntDesign name={'tagso'} size={size} color={color} />;
              }
              else if (route.name === 'Trends') {
                iconName = focused? <AntDesign name={'areachart'} size={size} color={color} />:<AntDesign name={'linechart'} size={size} color={color} />;
              }
              else if (route.name === 'Settings') {
                iconName = focused? <AntDesign name={'setting'} size={size} color={color} />:<AntDesign name={'setting'} size={size} color={color} />;
              }
              // You can return any component that you like here!
              return iconName;
            },
         

          })}
          tabBarOptions={{
            activeTintColor: '#B30200',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#252525',
                // paddingBottom: 0
          }
          }}
        >
            <Tabs.Screen name="ShoppingList" component={ShoppingListScreen}></Tabs.Screen>
            
        </Tabs.Navigator>
    )
}