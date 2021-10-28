import React from "react";
import PropTypes from "prop-types";
import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

function CreateShoppingListScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Create Shopping List Screen</Text>
    </SafeAreaView>
  );
}

CreateShoppingListScreen.propTypes = {
  navigation: PropTypes.object,
};

export default CreateShoppingListScreen;
