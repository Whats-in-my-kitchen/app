import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { AppTabs } from "../navigation/Tabs/AppTabs";
import AuthStack from "../navigation/AuthStack/AuthStack";
import { Provider, connect } from "react-redux";
import { store, persistor } from "../application/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { loginUser } from "../application/redux/action/auth";

const Routes = ({ RouteProps, isAuthenticated }) => {
  const [loading, setLoading] = useState(false);
  const user = isAuthenticated;
  useEffect(() => {
    setLoading(false);
  }, [loading]);
  if (loading) {
    return <ActivityIndicator size="large"></ActivityIndicator>;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          {user ? <AppTabs /> : <AuthStack></AuthStack>}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Routes);
