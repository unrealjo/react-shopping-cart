import data from "./data.json";
import { INCRMENT_QUANTITY, DECRMENT_QUANTITY } from "./actions/CartActions";
const initialState = {
  products: data.map((p) => {
    let obj = {
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.thumbnail,
      // quantity: 0,
    };
    return obj;
  }),
  Incart: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        Incart: [
          ...state.Incart,
          state.products.find((p) => p.id == action.payload),
        ],
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        Incart: [
          ...state.Incart,
          state.products.filter((p) => p.id != action.payload),
        ],
      };
    case INCRMENT_QUANTITY:
      return {
        ...state,
        Incart: state.Incart.map((cart) => {
          if (!!cart?.quantity) return { ...cart, quantity: cart.quantity + 1 };
          else return { ...cart, quantity: 2 };
        }),
      };
    case DECRMENT_QUANTITY:
      return {
        ...state,
        Incart: state.Incart.map((cart) => {
          if (!!cart?.quantity) return { ...cart, quantity: cart.quantity - 1 };
          else return cart;
        }),
      };
    default:
      return state;
  }
};
