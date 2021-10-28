import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

function KTContainer({ children, styles }) {
  return (
    <View style={[styles, { padding: 20, height: "100%" }]}>{children}</View>
  );
}

KTContainer.propTypes = {};

export default KTContainer;
