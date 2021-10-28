import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import StyleKTText from "./StyleKTText";
import { kcPrimaryColor } from "../../constants/AppColors";

function KTHeadingOne({ text, color, fontWeight }) {
  return (
    <Text
      style={[
        StyleKTText.headingOne,
        { fontWeight: fontWeight ? fontWeight : "bold", color: color ?? kcPrimaryColor },
      ]}
    >
      {text}
    </Text>
  );
}

function KTHeadingTwo({ text, color, fontWeight }) {
  return (
    <Text
      style={[
        StyleKTText.baseStyle,
        StyleKTText.headingTwo,
        color ? { color: color } : null,
        { fontWeight: fontWeight ? fontWeight : "bold" },
      ]}
    >
      {text}
    </Text>
  );
}

function KTHeadingThree({ text, color, fontWeight }) {
  return (
    <Text
      style={[
        StyleKTText.baseStyle,
        StyleKTText.headingThree,
        color ? { color: color } : null,
        fontWeight ? { fontWeight: fontWeight } : null,
      ]}
    >
      {text}
    </Text>
  );
}

function KTHeadingFour({ text, color, fontWeight }) {
  return (
    <Text
      style={[
        StyleKTText.baseStyle,
        StyleKTText.headingFour,
        color ? { color: color } : null,
        fontWeight ? { fontWeight: fontWeight } : null,
      ]}
    >
      {text}
    </Text>
  );
}

function KTHeadingFive({ text, color, fontWeight }) {
  return (
    <Text
      style={[
        StyleKTText.baseStyle,
        StyleKTText.headingFive,
        color ? { color: color } : null,
        fontWeight ? { fontWeight: fontWeight } : null,
      ]}
    >
      {text}
    </Text>
  );
}
function KTBody({ text, color, fontWeight }) {
  return (
    <Text
      style={[
        StyleKTText.baseStyle,
        StyleKTText.body,
        color ? { color: color } : null,
        fontWeight ? { fontWeight: fontWeight } : null,
      ]}
    >
      {text}
    </Text>
  );
}

function KTCaption({ text, color, fontWeight, onPress, textAlign }) {
  return (
    <Text
      style={[
        StyleKTText.baseStyle,
        StyleKTText.caption,
        color ? { color: color } : null,
        fontWeight ? { fontWeight: fontWeight } : null,
        textAlign,
      ]}
      onPress={onPress}
      
    >
      {text}
    </Text>
  );
}


export {
  KTHeadingOne,
  KTHeadingTwo,
  KTHeadingThree,
  KTHeadingFour,
  KTHeadingFive,
  KTBody,
  KTCaption,
};
