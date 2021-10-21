import React from 'react'
import PropTypes from 'prop-types'
import { View,Text } from 'react-native'
import WelcomeScreen from '../../presentation/screens/Welcome/WelcomeScreen';
import RegisterScreen from '../../presentation/screens/Auth/Register/RegisterScreen';
import LoginScreen from '../../presentation/screens/Auth/Login/LoginScreen';

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function AuthStack(props) {
    return (
        <Stack.Navigator initialRouteName="Welcome"  screenOptions={{
            //   header:()=>null
          }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options = {{header:()=>null}}/>
            <Stack.Screen name="Signup" component={RegisterScreen} options = {{header:()=>null}}/>
            <Stack.Screen name="Login" component={LoginScreen} options = {{header:()=>null}}/>
            
          </Stack.Navigator>
    )
}
AuthStack.propTypes = {

}

export default AuthStack;

