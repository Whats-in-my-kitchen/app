import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import {
  kcPrimaryColor,
  kcSecondaryColor,
  kcBlack,
  kcWhite,
} from "../../constants/AppColors";
import KTButton from "../../components/Button/KTButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { KTHeadingOne } from "../../components/Text/KTText";
import LottieView from "lottie-react-native";
import LottieAnimation from "../../../../assets/lottie/cart.json";
import { View } from "react-native";
import StylesWelcomeScreen from "./WelcomeScreenStyles";
import SizedBox from "../../components/SizedBox/SizedBox";

function WelcomeScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: kcWhite, height: "100%" }}>
      <LinearGradient
        colors={[kcPrimaryColor, kcSecondaryColor]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          height: "100%",
        }}
      />

      <SafeAreaView>
        <View style={StylesWelcomeScreen.container}>
          <SizedBox height={50} />
          <KTHeadingOne
            text="What's in my Kitchen?"
            color={kcWhite}
            fontWeight={"bold"}
          />
          <LottieView
            style={{
              width: 350,
              height: 350,
            }}
            source={LottieAnimation}
            autoPlay
          />
          <KTButton
            title="Login"
            onPress={() => navigation.navigate("Login")}
            backgroundColor={kcWhite}
            textColor={kcPrimaryColor}
            fontWeight="600"
          />
          <KTButton
            title="Signup"
            onPress={() => navigation.navigate("Signup")}
            backgroundColor={kcBlack}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

WelcomeScreen.propTypes = {};

export default WelcomeScreen;
