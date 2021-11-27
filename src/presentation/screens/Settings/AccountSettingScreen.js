import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

function AccountSettingScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Account Settings</Text>
    </SafeAreaView>
  );
}

AccountSettingScreen.propTypes = {
  navigation: PropTypes.object,
};

export default AccountSettingScreen;