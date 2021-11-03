import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StyleKTButton from "./StyleKTButton";
import { KTHeadingFive } from "../Text/KTText";
import { kcDarkGrey, kcWhite, kcPrimaryColor } from "../../constants/AppColors";
import SizedBox from "../SizedBox/SizedBox";

function KTButton({
  title,
  onPress,
  outlined,
  backgroundColor,
  textColor,
  fontWeight,
  disabled,
  busy,
  gap,
  leadingComponent,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        StyleKTButton.baseStyles,
        outlined ? StyleKTButton.outlinedButton : StyleKTButton.primaryButton,
        disabled
          ? { backgroundColor: kcDarkGrey }
          : backgroundColor
          ? { backgroundColor: backgroundColor }
          : null,
      ]}
    >
      {busy ? (
        <ActivityIndicator size="small" color={kcWhite}></ActivityIndicator>
      ) : (
        <View style={StyleKTButton.leadingComponent}>
          {leadingComponent ? leadingComponent : null}
          {leadingComponent ? <SizedBox width={gap ? gap : 10} /> : null}
          {title ? (
            <KTHeadingFive
              text={title}
              fontWeight={fontWeight}
              color={outlined ? kcPrimaryColor : textColor}
            />
          ) : null}
        </View>
      )}
    </TouchableOpacity>
  );
}

KTButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  outlined: PropTypes.bool,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  fontWeight: PropTypes.string,
  disabled: PropTypes.bool,
  busy: PropTypes.bool,
  leadingComponent: PropTypes.object,
};

export default KTButton;
