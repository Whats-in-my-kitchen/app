import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import KTButton from "../../../components/Button/KTButton";
import {
  kcErrorColor,
  kcPrimaryColor,
  kcWhite,
  kcLightGrey,
  kcDarkGrey,
} from "../../../constants/AppColors";
import { useForm, Controller } from "react-hook-form";
import KTContainer from "../../../components/Container/KTContainer";
import SizedBox from "../../../components/SizedBox/SizedBox";
import KTInput from "../../../components/Input/KTInput";
import { KTCaption, KTHeadingOne, KTHeadingFive } from "../../../components/Text/KTText";

function ForgotPasswordScreen({navigation}){
const {
  control,
  handleSubmit,
  formState: { errors },
} = useForm();
const onSubmit = (data) => console.log(data);
return (
  <SafeAreaView style={{ backgroundColor: kcWhite, height: "100%" }}>
    <KTContainer>
      <AntDesign
        name="close"
        size={24}
        color={kcPrimaryColor}
        onPress={() => navigation.goBack()}
      />
      <SizedBox height={20} />
      <KTHeadingOne
            text="Forgot Password?"
            color={kcPrimaryColor}
            fontWeight={"bold"}
          />
          <KTHeadingFive
            text="Enter your email to reset"
            color={kcDarkGrey}
          />
    
      <SizedBox height={20} />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <KTInput
            placeholder={"Email Address"}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="emailAddress"
        defaultValue=""
      />
      <SizedBox small />
      {errors.emailAddress && (
        <KTCaption text="Email is Required" color={kcErrorColor}></KTCaption>
      )}
      <SizedBox large />

      <KTButton
        title="Send link"
        onPress={handleSubmit(onSubmit)}
        disabled={errors.email && errors.password ? true : false}
      ></KTButton>
    </KTContainer>
  </SafeAreaView>
);
}

ForgotPasswordScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ForgotPasswordScreen;
