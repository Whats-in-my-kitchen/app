import{ADD_GROCERY_TO_INVENTORY_LIST,REMOVE_GROCERY_FROM_INVENTORY_LIST, ADD_GROCERY_TO_INVENTORY_LIST_ERR} from "./types"

export const addGroceryToInventoryList = (groceryItem) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_GROCERY_TO_INVENTORY_LIST,
        payload: groceryItem,
      });
    } catch (err) {
      dispatch({
        type: ADD_GROCERY_TO_INVENTORY_LIST_ERR,
        payload: err,
      });
    }
  };

  export const removeGroceryFromInventoryList = (groceryItem) => async (dispatch) => {
    try {
      dispatch({
        type: REMOVE_GROCERY_FROM_INVENTORY_LIST,
        payload: groceryItem,
      });
    } catch (err) {
      dispatch({
        type: REMOVE_GROCERY_FROM_INVENTORY_LIST_ERR,
        payload: err,
      });
    }
  };