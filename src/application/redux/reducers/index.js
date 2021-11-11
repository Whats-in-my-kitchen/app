import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import theme from "./theme";
import auth from "./auth";
import shoppingList from "./shoppingList";
import inventory from "./inventory";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [theme, shoppingList, inventory],
};

const rootReducer = combineReducers({
  theme,
  auth,
  shoppingList,
  inventory,
});

export default persistReducer(persistConfig, rootReducer);
