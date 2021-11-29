import {
  ADD_GROCERY_TO_SHOPPING_LIST,
  REMOVE_GROCERY_FROM_SHOPPING_LIST,
  ADD_SHOPPING_LIST,
} from "../action/types";

const initialState = {
  shoppingList: [
    {
      id: 1,
      name: "Common",
      groceryItem: [
        { id: 1, name: "Egg", count: 2, status: false },
        { id: 2, name: "Milk", count: 5, status: true },
        { id: 3, name: "Spinach", count: 2, status: false },
      ],
    },
    {
      id: 2,
      name: "Party at ScoobyDoobyDo",
      groceryItem: [{ id: 1, name: "Beer", count: 12, status: false }, { id: 1, name: "Chips", count: 23, status: true }],
    },
    {
      id: 3,
      name: "Third Shopping List",
      groceryItem: [{ id: 1, name: "Cookies", count: 1, status: true }]
    }
  ],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_SHOPPING_LIST:
      return {
        ...state,
        shoppingList: [payload, ...state.shoppingList],
      }
    case ADD_GROCERY_TO_SHOPPING_LIST:
      return {
        ...state,
        groceryList: [payload, ...state.groceryList],
      };
    case REMOVE_GROCERY_FROM_SHOPPING_LIST:
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
