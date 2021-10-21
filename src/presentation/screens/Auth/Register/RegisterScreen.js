import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import KTContainer from "../../../components/Container/KTContainer";
import { kcPrimaryColor } from "../../../constants/AppColors";

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView>
      <KTContainer>
        <AntDesign
          name="close"
          size={24}
          color={kcPrimaryColor}
          onPress={() => navigation.goBack()}
        />
      </KTContainer>
    </SafeAreaView>
  );
}

RegisterScreen.propTypes = {};

export default RegisterScreen;
