import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const handleClickShop = () => {
    navigate("/shop");
  };
  const handleClickCart = () => {
    navigate("/cart");
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl mb-6">Go to Shop</h1>
        <button
          className="border-2 p-2 w-30 rounded-xl hover:bg-black hover:text-white transition-all active:scale-90"
          onClick={handleClickShop}
        >
          Shop
        </button>
      </div>

      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl mb-6">Go to Cart</h1>
        <button
          className="border-2 p-2 w-30 rounded-xl hover:bg-black hover:text-white transition-all active:scale-90"
          onClick={handleClickCart}
        >
          Cart
        </button>
      </div>
    </div>
  );
}
