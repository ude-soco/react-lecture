// * Action
export const ADD_GROCERY_ITEM = "groceryList/ADD";

// * Action types
export const addGroceryItemToList = (fruit) => ({
  type: ADD_GROCERY_ITEM,
  payload: fruit,
});

const initialState = {
  groceryList: ["banana", "oats", "milk", "chia seeds"],
};

export default function groceryReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return {
        ...state,
        groceryList: [...state.groceryList, action.payload],
      };

    default:
      return state;
  }
}
