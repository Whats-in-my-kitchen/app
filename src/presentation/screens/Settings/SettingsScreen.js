import React from 'react'
import PropTypes from 'prop-types'
import { Text,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import settingsScreenStyles from "./SettingsScreenStyles";
import { kcWhite } from '../../constants/AppColors';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
function SettingsScreen({navigation}) {
    return (
        <SafeAreaView style={{backgroundColor:kcWhite, height:"100%"}}>
         <View style= {{alignItems:'center', height: 256}}>
           <View style={settingsScreenStyles.titleLineStyle}>
               <text>General</text>

           </View>
            <TouchableOpacity
                style={settingsScreenStyles.settingsButtonStyle}
                onPress={()=>props.navigation.navigate('AccountSettingScreen')}>
                    <Text style={settingsScreenStyles.settingsButtonText}>Account Settings</Text>
                    <MaterialIcons name="arrow-foward-ios" size={22} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                style={settingsScreenStyles.settingsButtonStyle}
                onPress={()=>props.navigation.navigate('InviteFriendScreen')}>
                    <Text style={settingsScreenStyles.settingsButtonText}>invite/Manage Friends</Text>
                    <MaterialIcons name="arrow-foward-ios" size={22} color="#fff" />
                    </TouchableOpacity>
                    <view>
            <Text>
             Notification
                
            </Text>
            </view>
            <view><Text style={settingsScreenStyles.settingsButtonText}>items low</Text>
            </view>
            <view>
            <Text>
             Reporting
                
            </Text>
            </view>
            <view><Text style={settingsScreenStyles.settingsButtonText}>Report Bugs</Text></view>
        </View>
        </SafeAreaView>
    
    )
}

SettingsScreen.propTypes = {

}

export default SettingsScreen

