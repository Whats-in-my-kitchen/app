import { ADD_GROCERY_TO_SHOPPING_LIST, ADD_GROCERY_TO_SHOPPING_LIST_ERR, ADD_SHOPPING_LIST, ADD_SHOPPING_LIST_ERR, TAP_GROCERY_ITEM } from "./types"

export const createShoppingList = (data) => async (dispatch) => {

  try {
    dispatch({
      type: ADD_SHOPPING_LIST,
      payload: data,
    });

  } catch (err) {
    dispatch({
      type: ADD_SHOPPING_LIST_ERR,
      payload: err,
    });
  }
};

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

export const tapGroceryItem = (item) => async (dispatch) => {
  try {
    dispatch({
      type: TAP_GROCERY_ITEM,
      payload: item,
    });
  } catch (err) {
    dispatch({
      type: ADD_GROCERY_TO_SHOPPING_LIST_ERR,
      payload: err,
    });
  }
};