import React, {useState} from "react";
import PropTypes from "prop-types";
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import shoppingListStyles from "./ShoppingListStyles";
import { useForm, Controller } from "react-hook-form";
import { kcErrorColor, kcWhite } from '../../constants/AppColors';
import { FontAwesome5 } from '@expo/vector-icons';
import { addGroceryToShoppingList } from "../../../application/redux/action/shoppingList";
import { connect } from "react-redux";
import SizedBox from "../../components/SizedBox/SizedBox";
import { KTCaption } from "../../components/Text/KTText";
import KTInput from "../../components/Input/KTInput";



function CreateShoppingListScreen({ navigation, shoppingList, addGroceryToShoppingList }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => addGroceryToShoppingList(data);

  return (
    <SafeAreaView  style = {{flex:1,backgroundColor:kcWhite, height:"100%"}}> 
      <View style= {{alignItems:'center', height: 256}}>
        <View  style={shoppingListStyles.titleLineStyle}>

          <Text style={shoppingListStyles.titleStyle}>Create List</Text>

          <TouchableOpacity 
            onPress={handleSubmit(onSubmit)} ///////////////////////////////////////
            style={shoppingListStyles.buttonStyle}>
                <FontAwesome5 style={{textAlign:'center', fontSize:14}} name="save"  color="white" />
                  
          </TouchableOpacity>
        </View>

        <View style={{width:'100%', alignItems:'center', marginTop:16}}>
          
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
          name="listName"
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
          name="listDescription"
          defaultValue=""
        />
          
        </View>
      </View>

      <View style = {{alignItems:'center'}}>
      <View  style={shoppingListStyles.titleLineStyle}>

        <Text style={shoppingListStyles.titleStyle}>Share With</Text>

        <TouchableOpacity 
            style={{
              alignSelf:'flex-end',}}>
                <Text style ={{fontSize:12,color:'gray',textAlign:'center'}}>View all</Text> 
        </TouchableOpacity>
      </View>
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

export default connect(mapStateToProps, { addGroceryToShoppingList })(CreateShoppingListScreen);