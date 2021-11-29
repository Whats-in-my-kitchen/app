import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import shoppingListStyles from "./ShoppingListStyles";
import { useForm, Controller } from "react-hook-form";
import { kcErrorColor, kcWhite } from '../../constants/AppColors';
import { FontAwesome5 } from '@expo/vector-icons';
import { createShoppingList } from "../../../application/redux/action/shoppingList";
import { connect } from "react-redux";
import SizedBox from "../../components/SizedBox/SizedBox";
import { KTCaption } from "../../components/Text/KTText";
import KTInput from "../../components/Input/KTInput";



function CreateShoppingListScreen({ navigation, shoppingList, createShoppingList }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(shoppingList)
    createShoppingList(data)
    navigation.navigate('Shopping List')
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%" }}>
      <View style={{ alignItems: 'center', height: '100%' }}>
        <View style={{ width: '90%', alignItems: 'center', marginTop: 16 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <KTInput
                placeholder={"List Name"}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="name"
            defaultValue=""
          />
          <SizedBox small />
          {errors.listName && (
            <KTCaption text="List name is required" color={kcErrorColor}></KTCaption>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <KTInput
                placeholder={"Description (Optional)"}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="description"
            defaultValue=""
          />
        </View>
        <TouchableOpacity
          style={shoppingListStyles.buttonStyle}
          onPress={handleSubmit(onSubmit)}>
          <Text style={shoppingListStyles.buttonText}>Save shopping list</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

CreateShoppingListScreen.propTypes = {
  navigation: PropTypes.object,
};

const mapStateToProps = (state) => ({
  shoppingList: state.shoppingList.shoppingList,
});

export default connect(mapStateToProps, { createShoppingList })(CreateShoppingListScreen);