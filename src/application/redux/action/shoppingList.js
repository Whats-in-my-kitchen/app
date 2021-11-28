import { ADD_GROCERY_TO_SHOPPING_LIST, ADD_GROCERY_TO_SHOPPING_LIST_ERR, ADD_SHOPPING_LIST, ADD_SHOPPING_LIST_ERR } from "./types"

export const createShoppingList = (data, navigation) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_SHOPPING_LIST,
      payload: data,
    });
    navigation.navigate('Shopping List')
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