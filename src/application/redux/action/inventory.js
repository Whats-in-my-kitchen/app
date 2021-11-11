import {ADD_ITEM_TO_INVENTORY, ADD_ITEM_TO_INVENTORY_ERROR} from "./types"
import uuid from "react-native-uuid";

export const addItemToInventory = (inventoryItem) => async (dispatch) => {
  const inventoryList = {
    id: uuid.v4(),
    name: inventoryItem.inventoryList,
    count: inventoryItem.count,
    inventoryItem: [],
  }
    try {
      dispatch({
        type: ADD_ITEM_TO_INVENTORY,
        payload: inventoryList,
      });
    } catch (err) { 
      dispatch({
        type: ADD_ITEM_TO_INVENTORY_ERROR,
        payload: err,
      });
    }
  };