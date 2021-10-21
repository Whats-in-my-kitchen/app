import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { TextInput, Text, View } from "react-native";
import StylesKTInput from "./KTInputStyles";

function KTInput({
  placeholder,
  defaultValue,
  secureTextEntry,
  onChange,
  onBlur,
  value,
}) {
  return (
    <Fragment>
      <TextInput
        style={[StylesKTInput.basicStyles, StylesKTInput.input]}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        defaultValue={defaultValue ? defaultValue : null}
      />
    </Fragment>
  );
}

KTInput.propTypes = {};

export default KTInput;
