import { StyleSheet } from "react-native";
import { kcPrimaryColor, kcWhite } from "../../constants/AppColors";

const StyleKTText = StyleSheet.create({
  baseStyle:{
    color: kcWhite
  },
  headingOne: {
    fontSize: 32,
    color: kcPrimaryColor
  },
  headingTwo: {
    fontSize: 27,
    
  },
  headingThree: {
    fontSize: 24,
  },
  headingFour: {
    fontSize: 21,
  },
  headingFive: {
    fontSize: 18,
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
  },
});

export default StyleKTText;
