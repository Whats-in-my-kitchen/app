import React from "react";
import PropTypes from "prop-types";
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import shoppingListStyles from "./ShoppingListStyles";
import { useForm, Controller } from "react-hook-form";
import { kcErrorColor, kcWhite } from '../../constants/AppColors';
import { createShoppingList } from "../../../application/redux/action/shoppingList";
import { connect } from "react-redux";
import SizedBox from "../../components/SizedBox/SizedBox";
import { KTCaption } from "../../components/Text/KTText";
import KTInput from "../../components/Input/KTInput";
import { addGroceryToShoppingList } from "../../../application/redux/action/shoppingList";

function AddGroceryItem({ navigation, addGroceryToShoppingList }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function submitActions(data) {
    addGroceryToInventoryList(data);
    navigation.navigate('Shopping List')
  }
  const onSubmit = (data) => submitActions(data);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%" }}>
      <View style={{ alignItems: 'center', height: 256 }}>
        <View style={shoppingListStyles.titleLineStyle}>
        </View>
        <View style={{ width: '100%', alignItems: 'center', marginTop: 16 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <KTInput
                placeholder={"Item Name"}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="name"
            defaultValue=""
          />

          <SizedBox small />
          {errors.name && (
            <KTCaption text="Item name is required" color={kcErrorColor}></KTCaption>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <KTInput
                placeholder={"Item Count"}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="count"
            defaultValue=""
          />

          <SizedBox small />
          {errors.count && (
            <KTCaption text="Item count is required" color={kcErrorColor}></KTCaption>
          )}
        </View>

        <TouchableOpacity
          style={shoppingListStyles.buttonStyle}
          onPress={handleSubmit(onSubmit)}

        >
          <Text style={shoppingListStyles.buttonText}>Add item</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

AddGroceryItem.propTypes = {
  navigation: PropTypes.object,
};
const mapStateToProps = (state) => ({
  shoppingList: state.shoppingList.shoppingList,
});

export default connect(mapStateToProps, { addGroceryToShoppingList })(AddGroceryItem);
