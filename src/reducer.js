export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [
    {
      id: "11234",
      title:
        "Love Real Food: More Than 100 Feel-Good Vegetarian Favorites to Delight the Senses and Nourish the Body: A Cookbook",
      price: 12.55,
      rating: 5,
      image: "https://images-na.ssl-images-amazon.com/images/I/A16VN49ZV1L.jpg",
    },
  ],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      // logic to remove

      //we clone the basket
      let newBasket = [...state.basket];

      // check if item exist
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exist remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id ${action.id}) as it is not in the basket`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
