import { useDispatch } from "react-redux";
import { addTocart } from "../store/actions/ProductActions";
const Products = ({ prod }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-1 content-center rounded border-zinc-50 border">
      <img src={prod.image} className="image flex-1 " />
      <div className="flex justify-between">
        <span>{prod.title}</span>
        <span>{prod.price}</span>
      </div>
      <button
        className=" bg-blue-400 text-center"
        onClick={() => {
          dispatch(addTocart(prod.id));
        }}
      >
        add
      </button>
    </div>
  );
};

export default Products;
