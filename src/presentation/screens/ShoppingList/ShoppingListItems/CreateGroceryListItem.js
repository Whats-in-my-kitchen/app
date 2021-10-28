import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
function CreateGroceryListItem({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Create Grocery List Item Screen</Text>
    </SafeAreaView>
  );
}

CreateGroceryListItem.propTypes = {
  navigation: PropTypes.object,
};

export default CreateGroceryListItem;
