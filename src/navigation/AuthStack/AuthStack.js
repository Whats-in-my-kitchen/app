import React from 'react'
import PropTypes from 'prop-types'
import { View,Text } from 'react-native'
import WelcomeScreen from '../../presentation/screens/Welcome/WelcomeScreen';
import RegisterScreen from '../../presentation/screens/Auth/Register/RegisterScreen';
import LoginScreen from '../../presentation/screens/Auth/Login/LoginScreen';
import ForgotPasswordScreen from '../../presentation/screens/Auth/ForgotPassword/ForgotPasswordScreen'
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
<<<<<<< HEAD
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options = {{header:()=>null}}/>
=======

>>>>>>> c94571558cb87203ca1d1be7c5f1dfa86d2d2837
          </Stack.Navigator>
    )
}
AuthStack.propTypes = {

}

export default AuthStack;