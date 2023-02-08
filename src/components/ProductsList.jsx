import { useSelector } from "react-redux";
import Products from "./Products";
function ProductsList() {
  const products = useSelector((state) => state.products);
  return (
    <div className="cards-container">
      {products.map((product) => (
        <Products key={product.id} prod={product} />
      ))}
    </div>
  );
}
export default ProductsList;
