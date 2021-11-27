import {
    ADD_GROCERY_TO_INVENTORY_LIST,
    REMOVE_GROCERY_FROM_INVENTORY_LIST,
  } from "../action/types";
  
  const initialState = {
    inventoryList:{
        id: 1,
        name: "Common",
        groceryItem: [
          { id: 1, name: "Egg", count: 2, status: false },
          { id: 2, name: "Milk", count: 5, status: true },
          { id: 3, name: "Spinach", count: 2, status: false },
        ],
      },
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_GROCERY_TO_INVENTORY_LIST:
        return {
          ...state,
          groceryList: [payload, ...state.groceryList],
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
  