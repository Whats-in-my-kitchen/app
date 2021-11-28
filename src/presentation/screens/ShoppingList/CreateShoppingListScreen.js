import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import shoppingListStyles from "./ShoppingListStyles";
import { kcWhite } from '../../constants/AppColors';

function CreateShoppingListScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%" }}>
      <View style={{ alignItems: 'center', height: 256 }}>
        <View style={shoppingListStyles.titleLineStyle}>
        </View>
        <View style={{ width: '100%', alignItems: 'center', marginTop: 16 }}>
          <TextInput style={{ width: '80%', height: 50, margin: 12, backgroundColor: '#e5e5e5', borderRadius: 8, paddingLeft: 15 }}
            placeholder='Name of the list' />
          <TextInput style={{ width: '80%', height: 75, margin: 12, backgroundColor: '#e5e5e5', borderRadius: 8, paddingLeft: 15 }}
            placeholder='Description (Optional)' />
        </View>
        <TouchableOpacity
          style={shoppingListStyles.buttonStyle}
          onPress={() => navigation.navigate('Shopping List')}>
          <Text style={shoppingListStyles.buttonText}>Save shopping list</Text>
        </TouchableOpacity>
      </View>



    </SafeAreaView>
  );
}

CreateShoppingListScreen.propTypes = {
  navigation: PropTypes.object,
};

export default CreateShoppingListScreen;
