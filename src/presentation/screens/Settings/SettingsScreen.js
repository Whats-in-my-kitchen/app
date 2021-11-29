import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { kcWhite } from '../../constants/AppColors';
function SettingsScreen({ navigation }) {
    return (
        <SafeAreaView style={{ backgroundColor: kcWhite, height: "100%" }}>
            <Text>
                Settings
            </Text>
        </SafeAreaView>

    )
}

SettingsScreen.propTypes = {

}

export default SettingsScreen

