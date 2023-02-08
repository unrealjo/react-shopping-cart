export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DECRMENT_QUANTITY = "DECRMENT_QUANTITY";
export const INCRMENT_QUANTITY = "INCRMENT_QUANTITY";
// export const INCRMENT_QUANTITY = 'INCRMENT_QUANTITY'
export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
};
export const incrementQuantity = (id) => {
  return {
    type: INCRMENT_QUANTITY,
    payload: id,
  };
};
export const decrementQuantity = (id) => {
  return {
    type: DECRMENT_QUANTITY,
    payload: id,
  };
};
