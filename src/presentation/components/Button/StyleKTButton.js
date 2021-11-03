import { StyleSheet } from "react-native";
import {
  kcPrimaryColor,
  kcWhite,
  kcLightGrey,
} from "../../constants/AppColors";

const StyleKTButton = StyleSheet.create({
  baseStyles: {
    borderRadius: 10,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    height: 46,
    padding: 10,
  },
  leadingComponent: {
    display: "flex",
    flexDirection: "row",
  },
  primaryButton: {
    backgroundColor: kcPrimaryColor,
    color: kcWhite,
  },
  outlinedButton: {
    backgroundColor: kcWhite,
    color: kcPrimaryColor,
    borderColor: kcPrimaryColor,
    borderWidth: 2,
    fontWeight: "bold",
  },
  disabled: {
    backgroundColor: kcLightGrey,
    color: kcPrimaryColor,
  },
});

export default StyleKTButton;
