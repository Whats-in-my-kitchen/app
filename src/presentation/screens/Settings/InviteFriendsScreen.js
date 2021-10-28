import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function InviteFriendsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Invite Friends Screen</Text>
    </SafeAreaView>
  );
}

InviteFriendsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default InviteFriendsScreen;
