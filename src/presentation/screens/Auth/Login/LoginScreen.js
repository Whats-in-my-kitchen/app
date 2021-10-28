import React from "react";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import KTButton from "../../../components/Button/KTButton";
import {
  kcErrorColor,
  kcPrimaryColor,
  kcWhite,
  kcDarkGrey,
} from "../../../constants/AppColors";
import { useForm, Controller } from "react-hook-form";
import KTContainer from "../../../components/Container/KTContainer";
import SizedBox from "../../../components/SizedBox/SizedBox";
import KTInput from "../../../components/Input/KTInput";
import { KTCaption, KTHeadingOne, KTHeadingFive } from "../../../components/Text/KTText";

function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <SafeAreaView style={{ backgroundColor: kcWhite }}>
      <KTContainer>
        <AntDesign
          name="close"
          size={24}
          color={kcPrimaryColor}
          onPress={() => navigation.goBack()}
        />
        <SizedBox height={20} />
      <KTHeadingOne
            text="Welcome back!"
            color={kcPrimaryColor}
            fontWeight={"bold"}
          />
          <KTHeadingFive
            text="Log in to your account!"
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

        {/* Password Field Button */}
        <Controller
          control={control}
          rules={{
            required: true,
             min: 6,
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
        
        {/* ffForgot password text */ }
        <KTCaption
        text="Forgot Password?" onPress={() =>navigation.navigate("ForgotPassword")}
        color={kcDarkGrey}
        textAlign="right"
        ></KTCaption>

        <SizedBox small />
        {errors.password == "required" && (
          <KTCaption
            text="Password is Required"
            color={kcErrorColor}
          ></KTCaption>
        )}

        <KTButton
          title="Login"
          onPress={handleSubmit(onSubmit)}
          disabled={errors.email && errors.password ? true : false}
        ></KTButton>
      </KTContainer>
    </SafeAreaView>
  );
}

LoginScreen.propTypes = {
  navigation: PropTypes.object,
};

export default LoginScreen;
