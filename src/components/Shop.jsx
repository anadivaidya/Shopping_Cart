import { useOutletContext } from "react-router";
import useProductURL from "../hooks/useProductURL";
import Card from "./Card";

export default function Shop() {
const {addToCart} = useOutletContext();

  const { products, error, loading } = useProductURL();
  if (loading)
    return (
      <p className="flex flex-row justify-center items-center">Loading...</p>
    );
  if (error)
    return (
      <p className="flex flex-row justify-center items-center">
        A network error was encountered
      </p>
    );

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-6 items-center justify-center p-6">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              url={product.image}
              name={product.title}
              price={product.price}
              onAddToCart={() => addToCart(product)}
            />
          );
        })}
      </div>
    </div>
  );
}
