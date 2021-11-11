import {
  ADD_GROCERY_TO_SHOPPING_LIST,
  REMOVE_GROCERY_FROM_SHOPPING_LIST,
} from "../action/types";

const initialState = {
  shoppingList: [
    {
      id: 0,
      name: "Common",
      groceryItem: [
        { id: 1, name: "Egg", count: 2, status: false },
        { id: 2, name: "Milk", count: 5, status: true },
        { id: 3, name: "Spinach", count: 2, status: false },
      ],
    },
    {
      id: 1,
      name: "Party at Duncan",
      groceryItem: [{ id: 1, name: "Beer", count: 12, status: false }],
    },
  ],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_GROCERY_TO_SHOPPING_LIST:
      return {
        ...state,
        shoppingList: [payload, ...state.shoppingList],
      };
    case REMOVE_GROCERY_FROM_SHOPPING_LIST:
      return {
        ...state,
        shoppingList: state.shoppingList.filter(
          (grocery) => grocery._id == payload
        ),
      };
    default:
      return state;
  }
}
