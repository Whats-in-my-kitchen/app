import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/application/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import PropTypes from "prop-types";
import Routes from "./src/routes/Routes";

function App({ props }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

App.propTypes = {};

export default App;
