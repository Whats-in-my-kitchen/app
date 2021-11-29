import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from 'react-native';
import inventoryScreenStyles from "./InventoryScreenStyles";
import { kcWhite } from '../../constants/AppColors';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import KTInput from "../../components/Input/KTInput";
import SizedBox from "../../components/SizedBox/SizedBox";
import { addGroceryToInventoryList } from "../../../application/redux/action/inventoryList";

function AddGroceryItemScreen({ navigation, addGroceryToInventoryList }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function submitActions(data) {
    addGroceryToInventoryList(data);
    navigation.navigate('Inventory')
  }
  const onSubmit = (data) => submitActions(data);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: kcWhite, height: "100%" }}>
      <View style={{ alignItems: 'center', height: 256 }}>
        <View style={inventoryScreenStyles.titleLineStyle}>

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
          style={inventoryScreenStyles.inventoryButtonStyle}
          onPress={handleSubmit(onSubmit)}

        >
          <Text style={inventoryScreenStyles.inventoryButtonText}>Add item</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

AddGroceryItemScreen.propTypes = {
  navigation: PropTypes.object,
};
const mapStateToProps = (state) => ({
  shoppingList: state.shoppingList.shoppingList,
});

export default connect(mapStateToProps, { addGroceryToInventoryList })(AddGroceryItemScreen);
