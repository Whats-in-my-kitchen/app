import{ADD_GROCERY_TO_SHOPPING_LIST,REMOVE_GROCERY_FROM_SHOPPING_LIST, ADD_GROCERY_TO_SHOPPING_LIST_ERR} from "./types"

export const addGroceryToShoppingList = (groceryItem) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_GROCERY_TO_SHOPPING_LIST,
        payload: groceryItem,
      });
    } catch (err) {
      dispatch({
        type: ADD_GROCERY_TO_SHOPPING_LIST_ERR,
        payload: err,
      });
    }
  };