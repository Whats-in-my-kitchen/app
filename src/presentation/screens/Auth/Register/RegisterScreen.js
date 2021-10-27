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

function RegisterScreen({navigation}){
const {
  control,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm();
const watchPassword = watch('password');
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
            text="Sign Up!"
            color={kcPrimaryColor}
            fontWeight={"bold"}
          />
          <KTHeadingFive
            text="Let's get your account setup"
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
            placeholder={"User Name"}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="userName"
        defaultValue=""
      />
      <SizedBox small />
      {errors.emailAddress && (
        <KTCaption text="User Name is Required" color={kcErrorColor}></KTCaption>
      )}
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

      {/* Password Field Button */}
      <Controller
        control={control}
        rules={{
          required: true,
           minLength: 6,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <KTInput
            placeholder={"Password"}
            secureTextEntry
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="password"
        defaultValue=""
      />
      <SizedBox small />
      {errors.password && (
        <KTCaption
          text="Password is Required"
          color={kcErrorColor}
        ></KTCaption>
      )}
      <SizedBox large />
        <Controller
        control={control}
        rules={{
          required: true,
           minLength: 6,
           validate: value => value === watchPassword || 'Password must match'
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <KTInput
            placeholder={"Confirm Password"}
            secureTextEntry
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="confirmPassword"
        defaultValue=""
      />
      <SizedBox small />
       {errors.confirmPassword && (
        <KTCaption
          text={errors.confirmPassword.message}
          color={kcErrorColor}
        ></KTCaption>
      )}


      <KTButton
        title="Sign Up"
        onPress={handleSubmit(onSubmit)}
        disabled={errors.email && errors.password ? true : false}
      ></KTButton>
    </KTContainer>
  </SafeAreaView>
);
}

RegisterScreen.propTypes = {
  navigation: PropTypes.object,
};

export default RegisterScreen;
