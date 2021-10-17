import { ADD_GROCERY_TO_SHOPPING_LIST, REMOVE_GROCERY_FROM_SHOPPING_LIST } from "../action/types";

const initialState = {
  groceryList:[],
};

export default function (state = initialState, action) {
  const { type,payload } = action;
  switch (type) {
    case ADD_GROCERY_TO_SHOPPING_LIST:
      return {
        ...state,
        groceryList: [payload, ...state.groceryList],
      };
    case REMOVE_GROCERY_FROM_SHOPPING_LIST:
      return {
        ...state,
        groceryList:  state.groceryList.filter((grocery) => grocery._id == payload),
      };
    default:
      return state;
  }
}