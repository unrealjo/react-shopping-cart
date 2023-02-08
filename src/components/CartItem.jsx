import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../store/actions/CartActions";
function CartItem({ prod }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center mb-1 ">
      <div>{prod.id}</div>
      <img src={prod.image} width="80px" />
      <div>{prod.title}</div>
      <div className="grid grid-cols-3 gap-2 items-center">
        <button
          className="p-2 bg-gray-300 rounded"
          onClick={() => dispatch(incrementQuantity(prod.id))}
        >
          +
        </button>
        {
          <div className="text-center">
            {!!prod?.quantity ? prod.quantity : 1}
          </div>
        }
        <button
          className="p-2 bg-gray-300 rounded"
          onClick={() => dispatch(decrementQuantity(prod.id))}
        >
          -
        </button>
      </div>
      <button className="p-1 bg-red-600 text-white rounded">Delete</button>
    </div>
  );
}

export default CartItem;
