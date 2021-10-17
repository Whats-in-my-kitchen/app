import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import theme from "./theme";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [theme],
};

const rootReducer = combineReducers({
  theme,
});

export default persistReducer(persistConfig, rootReducer);