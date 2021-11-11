import{ADD_GROCERY_TO_SHOPPING_LIST,REMOVE_GROCERY_FROM_SHOPPING_LIST, ADD_GROCERY_TO_SHOPPING_LIST_ERR} from "./types"
import uuid from "react-native-uuid";


export const addGroceryToShoppingList = (groceryItem) => async (dispatch) => {
  const shoppingList = {
    id: uuid.v4(),
    name: groceryItem.listName,
    description: groceryItem.listDescription,
    groceryItem: [],
  }
    try {
      dispatch({
        type: ADD_GROCERY_TO_SHOPPING_LIST,
        payload: shoppingList,
      });
    } catch (err) {
      dispatch({
        type: ADD_GROCERY_TO_SHOPPING_LIST_ERR,
        payload: err,
      });
    }
  };