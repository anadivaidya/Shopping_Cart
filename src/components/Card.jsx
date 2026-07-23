export default function Card({url, name, price, onAddToCart}) {
  return (
    <div className="border-2 flex flex-col justify-between items-center p-3 grow w-72 max-w-100 h-fit rounded-2xl" >
      <div>
        <img src={url} alt={name} className="h-40 w-full object-contain"/>
      </div>
      <hr className="border w-full mt-3"/>
      <h1 className="text-2xl mb-1 mt-1 font-semibold">{name}</h1>
      <h1 className="text-xl mb-2">$ {price}</h1>
      <button className="border-2 p-2 w-30 rounded-xl hover:bg-black hover:text-white transition-all active:scale-90" onClick={onAddToCart}>
        Add to Cart
      </button>
      
    </div>
  );
}
