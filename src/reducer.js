export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_TO_BASKET":
      // logic to remove
      return { state };
      break;
    default:
      return state;
  }
}

export default reducer;
