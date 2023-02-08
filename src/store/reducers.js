import {
  ADD_TO_CART,
  DECRMENT_QUANTITY,
  DELETE_FROM_CART,
  INCRMENT_QUANTITY,
} from "./actions/CartActions";
import data from "./data.json";
const initialState = {
  products: data.map((p) => {
    let obj = {
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.thumbnail,
    };
    return obj;
  }),
  Incart: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        Incart: [
          ...state.Incart,
          {
            ...state.products.find((p) => p.id == action.payload),
            quantity: 1,
          },
        ],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        Incart: state.Incart.filter((p) => p.id != action.payload),
      };
    case INCRMENT_QUANTITY:
      return {
        ...state,
        Incart: state.Incart.map((product) => {
          if (product.id != action.payload) return product;
          return { ...product, quantity: product.quantity + 1 };
        }),
      };
    case DECRMENT_QUANTITY:
      return {
        ...state,
        Incart: state.Incart.map((product) => {
          if (product.id != action.payload) return product;
          return { ...product, quantity: product.quantity - 1 };
        }),
      };
    default:
      return state;
  }
};
