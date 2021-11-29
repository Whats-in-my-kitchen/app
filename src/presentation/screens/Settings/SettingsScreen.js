import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { kcWhite, kcDarkGrey } from '../../constants/AppColors';
import {KTHeadingOne, KTHeadingThree, KTCaption, KTHeadingTwo} from '../../components/Text/KTText.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem, Avatar, Icon, Image } from "react-native-elements";
import settingsScreenStyles from './SettingsScreenStyles';
function SettingsScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%", flexDirection: 'column' }}>
            <KTHeadingTwo 
             text="General"
             color='black'
             font='bold'/>
             <TouchableOpacity style={settingsScreenStyles.settingsButtonStyle}
                    onPress={() => console.log('Account Settings')}>
                 <Text style={settingsScreenStyles.settingsButtonText}>
                Account Settings
                 </Text>
                 <ListItem.Chevron/>
             </TouchableOpacity>
        </SafeAreaView>

    )
}

SettingsScreen.propTypes = {

}

export default SettingsScreen

