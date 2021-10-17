import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { AppTabs } from "../navigation/Tabs/AppTabs";
import AuthStack from "../navigation/AuthStack/AuthStack";
import { Provider } from "react-redux";
import { store,persistor } from '../application/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';

export const Routes = ({ RouteProps }) => {
    const [loading, setLoading] = useState(false);
    const user = true;
    useEffect(()=>{
        setLoading(false)
    },[loading] )
    if (loading) {
      return (
        <Center>
          <ActivityIndicator size="large"></ActivityIndicator>
        </Center>
      );
    }
    return (
    <Provider store={store}>
     <PersistGate persistor={persistor}>
      <NavigationContainer>
        {user ? <AppTabs/> : <AuthStack></AuthStack>}
      </NavigationContainer>
    </PersistGate>
      </Provider>
    );
  }; 

  