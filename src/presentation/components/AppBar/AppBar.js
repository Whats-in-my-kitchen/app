import React from "react";
import PropTypes from "prop-types";

function AppBar({title}) {
  return (
    <Fragment>
      <Text
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          color: kcPrimaryColor,
          fontSize: 24,
          fontWeight: "600",
          display: "flex",
        }}
      >
        {title}
      </Text>
    </Fragment>
  );
}

AppBar.propTypes = {};

export default AppBar;
