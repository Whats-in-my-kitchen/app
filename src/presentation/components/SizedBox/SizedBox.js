import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

function SizedBox({ height, width, small, medium, large }) {
  return (
    <View
      style={{
        width: small ? 5 : medium ? 10 : large ? 20 : width,
        height: small ? 5 : medium ? 10 : large ? 20 : height,
      }}
    ></View>
  );
}

SizedBox.propTypes = {};

export default SizedBox;
