import { useRef } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const cart = () => {
  let prods = useSelector((state) => state.Incart);
  const table = useRef();
  const toggleTable = () => {
    if (table.current.className == "hidden") {
      table.current.className = "modal";
    } else {
      table.current.className = "hidden";
    }
  };
  return (
    <div>
      <button
        className="p-1 text-white font-bold text-xl"
        onClick={toggleTable}
      >
        In Cart({prods.length})
      </button>
      <div ref={table} className="hidden">
        <div className="bg-white drop-shadow-2xl shadow-white">
          <div className="flex justify-between">
            <div className="text-xl m-1">Shopping Bag</div>
            <button
              onClick={toggleTable}
              className="px-2 rounded bg-red-700 text-white"
            >
              close
            </button>
          </div>
          <hr className="my-3" />
          {prods.map((prod) => (
            <CartItem key={"cart-item-" + prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default cart;
