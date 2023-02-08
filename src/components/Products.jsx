import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../store/actions/ProductActions";
const Products = ({ prod }) => {
  const Incart = useSelector((state) => state.Incart);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-1 content-center rounded border-zinc-50 border">
      <img src={prod.image} className="image flex-1 " />
      <div className="flex justify-between">
        <span>{prod.title}</span>
        <span>{prod.price}</span>
      </div>
      <button
        className=" bg-blue-400 text-center disabled:bg-slate-400 disabled:text-gray-100"
        onClick={(e) => {
          dispatch(addTocart(prod.id));
          e.target.disabled = true;
        }}
      >
        add
      </button>
    </div>
  );
};

export default Products;
