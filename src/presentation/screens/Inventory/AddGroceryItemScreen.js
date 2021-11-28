import React, { useState } from "react";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, KeyboardAvoidingView } from 'react-native';
import inventoryScreenStyles from "./InventoryScreenStyles";
import { kcWhite } from '../../constants/AppColors';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";


function AddGroceryItemScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%" }}>
      <View style={{ alignItems: 'center', height: 256 }}>
        <View style={inventoryScreenStyles.titleLineStyle}>

        </View>

        <View style={{ width: '100%', alignItems: 'center', marginTop: 16 }}>
          <TextInput style={{ width: '80%', height: 50, margin: 12, backgroundColor: '#e5e5e5', borderRadius: 8, paddingLeft: 15 }}
            placeholder='Item Name' />
          <TextInput style={{ width: '80%', height: 50, margin: 12, backgroundColor: '#e5e5e5', borderRadius: 8, paddingLeft: 15 }}
            placeholder='Expected Item Count' />
        </View>

        <TouchableOpacity
          style={inventoryScreenStyles.inventoryButtonStyle}
          onPress={() => navigation.navigate('Add Grocery Items')}>
          <Text style={inventoryScreenStyles.inventoryButtonText}>Add item</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

AddGroceryItemScreen.propTypes = {
  navigation: PropTypes.object,
};

export default AddGroceryItemScreen;
