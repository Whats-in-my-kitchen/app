import {
  ADD_GROCERY_TO_INVENTORY_LIST,
  REMOVE_GROCERY_FROM_INVENTORY_LIST,
} from "../action/types";

const initialState = {
  groceryItem: [
    { id: 1, name: "Egg", count: 2, },
    { id: 2, name: "Milk", count: 5, },
    { id: 3, name: "Spinach", count: 2, },
  ],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_GROCERY_TO_INVENTORY_LIST:
      return {
        ...state,
        groceryItem: [payload, ...state.groceryItem],
      };
    case REMOVE_GROCERY_FROM_INVENTORY_LIST:
      return {
        ...state,
        groceryList: state.groceryList.filter(
          (grocery) => grocery._id == payload
        ),
      };
    default:
      return state;
  }
}
