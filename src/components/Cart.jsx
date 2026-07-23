import { useOutletContext } from "react-router";
import CartCard from "./CartCard";

export default function Cart() {
  const {cart, removeFromCart} = useOutletContext();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 mb-6 border-b pb-4">
        <h1 className="text-2xl sm:text-4xl font-bold">Your Cart</h1>
        <h3 className="text-base sm:text-xl text-gray-600">Total Items: {cart.length}</h3>
      </div>
      {cart.length === 0 ? (
        <p className="text-center text-lg sm:text-xl text-gray-500 my-12">Your cart is currently empty.</p>
      ):(
        <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <CartCard key={item.id} url={item.image} name={item.title} price={item.price}
          onRemove={() => removeFromCart(item.id)}/>
        ))}
        </div>
      )
    }
    </div>
  );
}
